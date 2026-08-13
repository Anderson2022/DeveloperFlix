<script setup lang="ts">
import { ref } from 'vue'
import Section from './Section.vue'
import heroImage from '@/assets/land.jpg'
import brazil1 from '@/assets/land2.jpg'
import brazil2 from '@/assets/land(3).jpg'
import brazil3 from '@/assets/land(6).jpg'

const showPreview = ref(false)
const period = ref<'Hoje' | 'Este mês' | 'Este ano'>('Hoje')
const periods = ['Hoje', 'Este mês', 'Este ano'] as const
const brazilianContent = [
  { image: brazil1, title: 'JavaScript moderno na prática', creator: 'Código Fonte TV', date: 'HOJE • 18:30', duration: '24 min' },
  { image: brazil2, title: 'Construindo uma API do zero', creator: 'Rocketseat', date: 'HOJE • 20:00', duration: '38 min' },
  { image: brazil3, title: 'Carreira dev no Brasil', creator: 'Filipe Deschamps', date: 'NOVO EPISÓDIO', duration: '17 min' }
]
</script>

<template>
  <main>
    <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <div class="eyebrow"><span></span> DEVELOPERFLIX ORIGINAL</div>
        <h1>Domine a arte<br /><em>de programar.</em></h1>
        <div class="meta">
          <span class="match">98% relevante</span><span>2026</span><span class="rating">L</span><span>12 episódios</span><span class="quality">4K</span>
        </div>
        <p>Do primeiro “Hello World” à arquitetura de sistemas reais. Aprenda com quem constrói tecnologia todos os dias.</p>
        <div class="hero-actions">
          <button class="play" @click="showPreview = true">
            <svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7V5Z" /></svg> Assistir agora
          </button>
          <a href="#conteudos" class="details">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg> Mais detalhes
          </a>
        </div>
      </div>
      <div class="spotlight-card">
        <span>EM DESTAQUE</span>
        <strong>JavaScript moderno</strong>
        <small>Novos episódios toda semana</small>
      </div>
      <a href="#conteudos" class="scroll-hint"><span></span> EXPLORAR</a>
    </section>

    <section id="conteudos" class="content-area">
      <div class="continue">
        <div class="continue-copy">
          <span class="small-label">CONTINUE ASSISTINDO</span>
          <h2>Estruturas de repetição</h2>
          <p>Você parou no episódio 04 • Loops e iterações</p>
        </div>
        <button class="continue-button" @click="showPreview = true"><span>▶</span></button>
        <div class="progress"><i></i></div>
        <span class="time">18 min restantes</span>
      </div>
      <section class="brasil-section">
        <header class="brasil-header">
          <div><span>FEITO NO BRASIL 🇧🇷</span><h2>Conteúdo nacional em destaque</h2><p>Aprenda com profissionais que vivem o mercado brasileiro.</p></div>
          <div class="period-tabs"><button v-for="item in periods" :key="item" :class="{ active: period === item }" @click="period = item">{{ item }}</button></div>
        </header>
        <div class="brasil-grid">
          <article v-for="(item, index) in brazilianContent" :key="item.title" class="brasil-card" @click="showPreview = true">
            <img :src="item.image" :alt="item.title" /><div class="brasil-shade"></div><span class="rank">0{{ index + 1 }}</span><span class="air-date">{{ period === 'Hoje' ? item.date : period === 'Este mês' ? 'DESTAQUE DO MÊS' : 'MAIS VISTO DO ANO' }}</span>
            <div class="brasil-copy"><small>{{ item.creator }}</small><h3>{{ item.title }}</h3><p><b>98% relevante</b> • {{ item.duration }}</p></div>
          </article>
        </div>
      </section>
      <Section brazil-only />
    </section>

    <div v-if="showPreview" class="modal" role="dialog" aria-modal="true" @click.self="showPreview = false">
      <div class="modal-card">
        <button class="close" aria-label="Fechar" @click="showPreview = false">×</button>
        <div class="code-window"><span></span><span></span><span></span><pre><b>const</b> jornada = <b>async</b> () =&gt; {
  <i>await</i> aprender();
  construir();
  evoluir();
};</pre></div>
        <h2>Seu próximo nível começa aqui.</h2>
        <p>Escolha um conteúdo abaixo para continuar aprendendo.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero{position:relative;min-height:92vh;background-size:cover;background-position:center 38%;display:flex;align-items:center;overflow:hidden}.hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,#07090e 3%,rgba(7,9,14,.94) 25%,rgba(7,9,14,.5) 58%,rgba(7,9,14,.1)),linear-gradient(0deg,#080a0f 0%,transparent 34%),linear-gradient(180deg,rgba(6,8,12,.55),transparent 25%)}.hero-content{position:relative;z-index:2;max-width:720px;padding:120px 4vw 70px}.eyebrow{display:flex;align-items:center;gap:10px;color:#d4d5d9;font-size:11px;font-weight:800;letter-spacing:2.2px}.eyebrow span{width:28px;height:2px;background:#ef233c}.hero h1{margin:20px 0 18px;color:white;font-size:clamp(3rem,6.3vw,6.6rem);line-height:.91;letter-spacing:-5px;font-weight:900}.hero h1 em{color:transparent;font-style:normal;-webkit-text-stroke:1px rgba(255,255,255,.8)}.meta{display:flex;align-items:center;gap:13px;color:#c4c7cf;font-size:13px;font-weight:600}.match{color:#57d287}.rating,.quality{padding:1px 6px;border:1px solid #777b86;border-radius:3px;font-size:10px}.quality{font-weight:800}.hero-content>p{max-width:570px;margin:20px 0 27px;color:#c6c8ce;font-size:16px;line-height:1.7}.hero-actions{display:flex;gap:12px}.play,.details{height:48px;padding:0 21px;border:0;border-radius:7px;display:flex;align-items:center;gap:10px;font-weight:800;font-size:14px;text-decoration:none;cursor:pointer}.play{background:#fff;color:#0b0d12}.details{background:rgba(77,80,89,.55);color:#fff;backdrop-filter:blur(8px)}.play:hover{background:#ef233c;color:#fff}.details:hover{background:rgba(100,103,113,.7)}.play svg,.details svg{width:20px;height:20px;fill:currentColor}.details svg{fill:none;stroke:currentColor;stroke-width:1.7}.spotlight-card{position:absolute;right:4vw;bottom:18%;z-index:2;width:260px;padding:16px 18px;border-left:2px solid #ef233c;background:rgba(7,9,14,.65);backdrop-filter:blur(12px);display:flex;flex-direction:column}.spotlight-card span{color:#ef233c;font-size:9px;font-weight:900;letter-spacing:1.5px}.spotlight-card strong{margin:5px 0 2px;color:#fff;font-size:15px}.spotlight-card small{color:#999eaa}.scroll-hint{position:absolute;z-index:2;bottom:36px;right:4vw;display:flex;align-items:center;gap:10px;color:#a4a7af;text-decoration:none;font-size:9px;font-weight:800;letter-spacing:1.7px}.scroll-hint span{width:35px;height:1px;background:#747780}.content-area{position:relative;z-index:3;margin-top:-25px;padding-bottom:70px}.continue{max-width:92%;margin:0 auto 36px;padding:18px 24px;display:grid;grid-template-columns:minmax(240px,1fr) auto 1.5fr auto;align-items:center;gap:22px;background:linear-gradient(110deg,rgba(25,28,37,.96),rgba(15,18,25,.94));border:1px solid rgba(255,255,255,.07);border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.25)}.small-label{color:#ef233c;font-size:9px;font-weight:900;letter-spacing:1.5px}.continue h2{margin:4px 0 0;color:#fff;font-size:18px;font-weight:700}.continue p,.time{color:#777c88;font-size:11px}.continue-button{width:42px;height:42px;border:0;border-radius:50%;background:#ef233c;color:#fff;cursor:pointer}.progress{height:3px;background:#343741;border-radius:3px;overflow:hidden}.progress i{display:block;width:64%;height:100%;background:#ef233c}.time{white-space:nowrap}.modal{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.78);backdrop-filter:blur(10px)}.modal-card{position:relative;width:min(560px,100%);padding:35px;border-radius:16px;background:#12151d;border:1px solid #292d38;color:#fff}.close{position:absolute;right:14px;top:8px;border:0;background:none;color:#aaa;font-size:30px;cursor:pointer}.code-window{margin-bottom:25px;padding:15px 20px 24px;border-radius:10px;background:#080a0f}.code-window>span{display:inline-block;width:8px;height:8px;margin-right:5px;border-radius:50%;background:#ef233c}.code-window>span:nth-child(2){background:#f4b942}.code-window>span:nth-child(3){background:#57d287}.code-window pre{margin:18px 0 0;color:#c9ccd4;font-size:15px;line-height:1.7}.code-window b{color:#ef6680}.code-window i{color:#6ed6c0}.modal-card h2{font-size:26px;font-weight:800}.modal-card p{color:#969aa5}
@media(max-width:800px){.hero{min-height:820px;background-position:64% center;align-items:flex-end}.hero-shade{background:linear-gradient(0deg,#080a0f 6%,rgba(7,9,14,.8) 55%,rgba(7,9,14,.2)),linear-gradient(90deg,rgba(7,9,14,.75),transparent)}.hero-content{padding:100px 20px 90px}.hero h1{font-size:54px;letter-spacing:-3px}.spotlight-card,.scroll-hint{display:none}.continue{max-width:calc(100% - 32px);grid-template-columns:1fr auto;gap:14px;padding:17px}.progress{grid-column:1/-1}.time{display:none}}
@media(max-width:480px){.hero h1{font-size:44px}.hero-content>p{font-size:14px}.hero-actions{flex-wrap:wrap}.play,.details{flex:1;justify-content:center;padding:0 12px}.meta{flex-wrap:wrap}}
.brasil-section{padding:12px 4vw 55px}.brasil-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:20px}.brasil-header>div>span{color:#57d28d;font-size:9px;font-weight:900;letter-spacing:1.7px}.brasil-header h2{margin:4px 0;color:#fff;font-size:25px;font-weight:850;letter-spacing:-.7px}.brasil-header p{color:#777c88;font-size:12px}.period-tabs{display:flex;padding:4px;border:1px solid #292d36;border-radius:9px;background:#10131a}.period-tabs button{padding:8px 14px;border:0;border-radius:6px;background:transparent;color:#7f8490;font-size:10px;font-weight:800;cursor:pointer}.period-tabs button.active{background:#ef233c;color:#fff}.brasil-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.brasil-card{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:12px;background:#171a22;cursor:pointer;transition:.3s}.brasil-card:hover{transform:translateY(-6px);box-shadow:0 22px 45px rgba(0,0,0,.45)}.brasil-card img{width:100%;height:100%;object-fit:cover;transition:.45s}.brasil-card:hover img{transform:scale(1.06)}.brasil-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,7,11,.98),transparent 70%)}.rank{position:absolute;right:12px;top:4px;color:transparent;font-size:46px;font-weight:900;-webkit-text-stroke:1px rgba(255,255,255,.22)}.air-date{position:absolute;left:13px;top:13px;padding:5px 7px;border-radius:4px;background:rgba(5,7,11,.75);color:#fff;font-size:7px;font-weight:900;letter-spacing:1px}.brasil-copy{position:absolute;left:15px;right:15px;bottom:13px}.brasil-copy small{color:#57d28d;font-size:8px;font-weight:800;letter-spacing:1px}.brasil-copy h3{margin:3px 0;color:#fff;font-size:15px;font-weight:800}.brasil-copy p{color:#999da7;font-size:9px}.brasil-copy b{color:#57d28d}@media(max-width:800px){.brasil-header{align-items:flex-start;flex-direction:column;gap:16px}.brasil-grid{grid-template-columns:1fr}.brasil-section{padding-inline:16px}.brasil-card{aspect-ratio:16/9}}
</style>
