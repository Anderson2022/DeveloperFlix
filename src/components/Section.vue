<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getVideosCollection } from '../Api/Request/firebaseQueries'
import fallback1 from '@/assets/land2.jpg'
import fallback2 from '@/assets/land(3).jpg'
import fallback3 from '@/assets/land(4).jpg'
import fallback4 from '@/assets/land(5).jpg'
import fallback5 from '@/assets/land(6).jpg'
import fallback6 from '@/assets/Demolidor.jpg'

interface Video { videoId?: string; URL?: string; title?: string; description?: string }
interface Card extends Video { label: string; tag: string; duration: string; episode: number }

const props = withDefaults(defineProps<{ filter?: string; brazilOnly?: boolean }>(), { filter: 'Todos', brazilOnly: false })

const rows = ref<{ title: string; subtitle: string; cards: Card[] }[]>([])
const loading = ref(true)
const selected = ref<Card | null>(null)
const playing = ref(false)
const rowElements = ref<HTMLElement[]>([])
const fallbackImages = [fallback1, fallback2, fallback3, fallback4, fallback5, fallback6]
const titles = ['JavaScript sem mistério', 'Interfaces com Vue 3', 'APIs que escalam', 'Inteligência Artificial', 'Clean Code na prática', 'Carreira dev no Brasil']
const descriptions = [
  'Aprenda os conceitos que realmente importam e transforme teoria em código de produção.',
  'Uma experiência prática, direta ao ponto, criada para quem quer evoluir como desenvolvedor.',
  'Construa um projeto completo enquanto domina padrões, ferramentas e boas práticas modernas.'
]
const displayedRows = computed(() => {
  if (props.filter === 'Todos') return rows.value
  const wanted = props.filter.toUpperCase()
  return rows.value.map(row => ({ ...row, cards: row.cards.filter(card => card.tag === wanted) })).filter(row => row.cards.length)
})

function isBrazilian(video: Video) {
  const text = `${video.title || ''} ${video.description || ''}`.toLowerCase()
  return /\b(voc[eê]|aprenda|curso|aula|como|programa[cç][aã]o|desenvolvedor|brasil|portugu[eê]s|projeto|carreira|dados|c[oó]digo)\b/.test(text)
}

const embedUrl = computed(() => {
  if (!selected.value?.videoId) return ''
  const origin = encodeURIComponent(window.location.origin)
  return `https://www.youtube.com/embed/${selected.value.videoId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=${origin}&widget_referrer=${origin}`
})
const youtubeUrl = computed(() => selected.value?.videoId ? `https://www.youtube.com/watch?v=${selected.value.videoId}` : '')

function makeCards(videos: Video[], offset = 0): Card[] {
  return Array.from({ length: 8 }, (_, index) => {
    const item = videos.length ? videos[(index + offset) % videos.length] : {}
    return {
      ...item,
      URL: item.URL || fallbackImages[(index + offset) % fallbackImages.length],
      label: item.title || titles[(index + offset) % titles.length],
      description: item.description || descriptions[index % descriptions.length],
      tag: ['FRONT-END', 'BACK-END', 'MOBILE', 'DEVOPS', 'IA & DADOS', 'CARREIRA'][index % 6],
      duration: `${12 + index * 3} min`,
      episode: index + 1
    }
  })
}

onMounted(async () => {
  let videos: Video[] = []
  try { videos = (await getVideosCollection()) as Video[] } catch { /* fallback local */ }
  if (props.brazilOnly) videos = videos.filter(isBrazilian)
  rows.value = [
    { title: 'Em alta entre devs', subtitle: 'Os conteúdos mais assistidos nesta semana', cards: makeCards(videos) },
    { title: 'Construa projetos reais', subtitle: 'Da ideia ao deploy, passo a passo', cards: makeCards(videos, 3) },
    { title: 'Inteligência artificial', subtitle: 'Ferramentas e conceitos para o presente', cards: makeCards(videos, 5) }
  ]
  loading.value = false
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

function openDetails(card: Card) {
  selected.value = { ...card }
  playing.value = Boolean(card.videoId)
  document.body.style.overflow = 'hidden'
}
function closeDetails() { selected.value = null; playing.value = false; document.body.style.overflow = '' }
function startPlayback() { if (selected.value?.videoId) playing.value = true }
function handleKeydown(event: KeyboardEvent) { if (event.key === 'Escape') closeDetails() }
function scrollRow(index: number, direction: number) { rowElements.value[index]?.scrollBy({ left: direction * 760, behavior: 'smooth' }) }
</script>

<template>
  <div class="catalog">
    <div v-if="loading" class="loading-row"><div v-for="n in 5" :key="n"></div></div>

    <section v-for="(row, rowIndex) in displayedRows" :key="row.title" class="content-row">
      <header class="row-heading">
        <div><span class="row-kicker">CURADORIA DEVELOPERFLIX</span><h2>{{ row.title }}</h2><p>{{ row.subtitle }}</p></div>
        <span class="row-count">0{{ rowIndex + 1 }}</span>
      </header>
      <div class="rail-wrap">
        <button class="arrow left" aria-label="Voltar" @click="scrollRow(rowIndex, -1)">&lsaquo;</button>
        <div :ref="el => { if (el) rowElements[rowIndex] = el as HTMLElement }" class="rail">
          <article v-for="card in row.cards" :key="`${card.videoId}-${card.episode}`" class="card" tabindex="0" role="button" @click.capture="openDetails(card)" @keydown.enter.prevent="openDetails(card)">
            <img :src="card.URL" :alt="card.label" loading="lazy" />
            <div class="shade"></div>
            <div class="card-top"><span class="tag">{{ card.tag }}</span><span class="duration">{{ card.duration }}</span></div>
            <div class="play-icon"><span></span></div>
            <div class="card-copy"><small>SÉRIE ORIGINAL • EP. {{ String(card.episode).padStart(2, '0') }}</small><h3>{{ card.label }}</h3><div class="card-meta"><b>98% relevante</b><span>Intermediário</span><span>4K</span></div></div>
          </article>
        </div>
        <button class="arrow right" aria-label="Avançar" @click="scrollRow(rowIndex, 1)">&rsaquo;</button>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selected" class="details-overlay" role="dialog" aria-modal="true" @click.self="closeDetails">
          <article class="details-modal">
            <button class="modal-close" aria-label="Fechar detalhes" @click="closeDetails">&times;</button>
            <div class="modal-media">
              <iframe v-if="playing && embedUrl" :src="embedUrl" title="Reprodução do vídeo" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <img v-else :src="selected.URL" :alt="selected.label" />
              <div v-if="!playing" class="modal-gradient"></div>
              <div v-if="!playing" class="modal-title"><span>DEVELOPERFLIX ORIGINAL</span><h2>{{ selected.label }}</h2></div>
            </div>
            <div class="modal-content">
              <div class="modal-actions">
                <button class="watch" :disabled="!selected.videoId" @click="startPlayback"><span>▶</span>{{ selected.videoId ? (playing ? 'Reproduzindo' : 'Assistir agora') : 'Vídeo em breve' }}</button>
                <a v-if="youtubeUrl" class="youtube-link" :href="youtubeUrl" target="_blank" rel="noopener">Abrir no YouTube ↗</a>
                <button class="round" aria-label="Adicionar à lista">+</button><button class="round" aria-label="Gostei">♡</button>
                <span class="episode-number">EP. {{ String(selected.episode).padStart(2, '0') }}</span>
              </div>
              <div class="modal-grid">
                <div><div class="modal-meta"><b>98% relevante</b><span>2026</span><span class="age">L</span><span>{{ selected.duration }}</span><span class="hd">4K</span></div><p class="description">{{ selected.description }}</p></div>
                <aside><p><span>Categoria:</span> {{ selected.tag }}</p><p><span>Nível:</span> Intermediário</p><p><span>Áudio:</span> Português</p></aside>
              </div>
              <div class="learning"><span class="learning-icon">{ }</span><div><small>VOCÊ VAI APRENDER</small><strong>Conceitos modernos, boas práticas e aplicação em projetos reais.</strong></div></div>
            </div>
          </article>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.catalog{padding:8px 4vw 20px}.content-row{margin-bottom:58px}.row-heading{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:18px}.row-kicker{display:block;margin-bottom:5px;color:#ef334d;font-size:9px;font-weight:900;letter-spacing:1.8px}.row-heading h2{color:#f7f7f8;font-size:24px;font-weight:850;letter-spacing:-.7px}.row-heading p{margin-top:2px;color:#777c87;font-size:12px}.row-count{color:transparent;font-size:48px;font-weight:900;line-height:.8;-webkit-text-stroke:1px rgba(255,255,255,.12)}.rail-wrap{position:relative}.rail{display:grid;grid-auto-flow:column;grid-template-rows:1fr;grid-auto-columns:clamp(270px,24vw,370px);gap:15px;overflow-x:auto;overflow-y:hidden;padding:6px 3px 22px;scroll-snap-type:x proximity;scrollbar-width:none}.rail::-webkit-scrollbar{display:none}.card{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:12px;background:#161922;cursor:pointer;scroll-snap-align:start;outline:none;box-shadow:0 10px 30px rgba(0,0,0,.18);transition:.3s cubic-bezier(.2,.8,.2,1)}.card:focus-visible{box-shadow:0 0 0 3px #ef334d}.card:hover{transform:translateY(-7px);box-shadow:0 22px 45px rgba(0,0,0,.55)}.card>img{width:100%;height:100%;object-fit:cover;transition:transform .55s,filter .3s}.card:hover>img{transform:scale(1.07);filter:saturate(.8)}.shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,7,11,.98),rgba(5,7,11,.08) 75%)}.card-top{position:absolute;inset:12px 12px auto;display:flex;justify-content:space-between}.tag,.duration{padding:5px 8px;border-radius:5px;font-size:8px;font-weight:900;letter-spacing:1px}.tag{background:#ef233c;color:#fff}.duration{background:rgba(5,7,11,.76);color:#fff;backdrop-filter:blur(7px)}.play-icon{position:absolute;inset:0;margin:auto;width:47px;height:47px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.6);border-radius:50%;background:rgba(7,9,14,.58);opacity:0;transform:scale(.7);transition:.3s}.play-icon span{margin-left:3px;border-left:12px solid #fff;border-top:7px solid transparent;border-bottom:7px solid transparent}.card:hover .play-icon{opacity:1;transform:scale(1)}.card-copy{position:absolute;left:16px;right:16px;bottom:14px}.card-copy small{color:#ef4960;font-size:7px;font-weight:900;letter-spacing:1.2px}.card-copy h3{margin:3px 0 5px;color:#fff;font-size:16px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-meta{display:flex;gap:9px;align-items:center;color:#a5a8b0;font-size:8px}.card-meta b{color:#58d592}.card-meta span:last-child{padding:0 3px;border:1px solid #777b83}.arrow{position:absolute;z-index:4;top:50%;width:40px;height:74px;transform:translateY(-60%);border:1px solid rgba(255,255,255,.1);border-radius:9px;background:rgba(7,9,14,.9);color:#fff;font-size:32px;opacity:0;cursor:pointer;transition:.2s}.rail-wrap:hover .arrow{opacity:1}.arrow:hover{background:#ef233c}.arrow.left{left:-19px}.arrow.right{right:-19px}.loading-row{display:flex;gap:15px}.loading-row div{width:330px;aspect-ratio:16/9;border-radius:12px;background:#171a22}
.details-overlay{position:fixed;inset:0;z-index:200;overflow-y:auto;padding:35px 18px;background:rgba(2,3,6,.82);backdrop-filter:blur(15px)}.details-modal{position:relative;width:min(900px,100%);margin:auto;overflow:hidden;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:#11141b;box-shadow:0 35px 100px rgba(0,0,0,.8)}.modal-close{position:absolute;z-index:4;right:17px;top:17px;width:38px;height:38px;border:1px solid rgba(255,255,255,.12);border-radius:50%;background:rgba(7,9,13,.8);color:#fff;font-size:27px;line-height:1;cursor:pointer}.modal-close:hover{background:#ef233c}.modal-media{position:relative;height:440px;background:#07090d}.modal-media img,.modal-media iframe{width:100%;height:100%;border:0;object-fit:cover}.modal-gradient{position:absolute;inset:0;background:linear-gradient(0deg,#11141b 0%,transparent 55%),linear-gradient(90deg,rgba(8,10,14,.75),transparent 65%)}.modal-title{position:absolute;left:40px;right:40px;bottom:35px}.modal-title span{color:#ef334d;font-size:9px;font-weight:900;letter-spacing:2px}.modal-title h2{max-width:650px;margin-top:6px;color:#fff;font-size:clamp(28px,4vw,48px);font-weight:900;line-height:1.05;letter-spacing:-1.5px}.modal-content{padding:0 40px 38px}.modal-actions{display:flex;align-items:center;gap:10px;margin-bottom:25px}.watch{height:47px;padding:0 22px;border:0;border-radius:7px;background:#fff;color:#080a0f;font-weight:850;cursor:pointer}.watch:hover{background:#ef233c;color:#fff}.watch span{margin-right:9px}.round{width:43px;height:43px;border:1px solid #555a65;border-radius:50%;background:transparent;color:#fff;font-size:24px;cursor:pointer}.round:hover{border-color:#fff}.episode-number{margin-left:auto;color:#646975;font-size:11px;font-weight:900;letter-spacing:1.5px}.modal-grid{display:grid;grid-template-columns:2fr 1fr;gap:45px}.modal-meta{display:flex;align-items:center;gap:12px;color:#c5c7cd;font-size:12px}.modal-meta b{color:#58d592}.age,.hd{padding:1px 5px;border:1px solid #626773;border-radius:3px;font-size:9px}.description{margin-top:17px;color:#c5c8cf;font-size:15px;line-height:1.7}.modal-grid aside p{margin-bottom:8px;color:#d2d4d8;font-size:12px}.modal-grid aside span{color:#6e737e}.learning{display:flex;align-items:center;gap:15px;margin-top:28px;padding:17px 19px;border:1px solid rgba(255,255,255,.07);border-radius:10px;background:#0b0d13}.learning-icon{display:grid;place-items:center;width:40px;height:40px;border-radius:8px;background:rgba(239,35,60,.12);color:#ef334d;font-weight:900}.learning div{display:flex;flex-direction:column}.learning small{color:#ef334d;font-size:8px;font-weight:900;letter-spacing:1.4px}.learning strong{margin-top:3px;color:#dddfe3;font-size:12px}.modal-enter-active,.modal-leave-active{transition:.25s}.modal-enter-active .details-modal,.modal-leave-active .details-modal{transition:.25s}.modal-enter-from,.modal-leave-to{opacity:0}.modal-enter-from .details-modal,.modal-leave-to .details-modal{transform:translateY(25px) scale(.97)}
@media(max-width:700px){.catalog{padding:0 16px}.content-row{margin-bottom:38px}.row-heading h2{font-size:20px}.row-count{font-size:36px}.rail{grid-auto-columns:82vw}.arrow{display:none}.details-overlay{padding:0}.details-modal{min-height:100vh;border:0;border-radius:0}.modal-media{height:42vh}.modal-title{left:20px;right:20px;bottom:22px}.modal-content{padding:0 20px 30px}.modal-grid{grid-template-columns:1fr;gap:22px}.modal-actions{margin-top:4px}.episode-number{display:none}.learning{align-items:flex-start}.card-copy h3{font-size:15px}}
.youtube-link{color:#c9cbd1;text-decoration:none;font-size:11px;font-weight:750;white-space:nowrap}.youtube-link:hover{color:#fff}
@media(max-width:700px){.youtube-link{order:4;width:100%;padding-top:4px}}
</style>
