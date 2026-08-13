<script setup lang="ts">
import { computed, ref } from 'vue'
import channelData from '@/Api/Request/channelData.json'
import heroImage from '@/assets/land(5).jpg'

const query = ref('')
const categories = ['Todos', 'Programação', 'Carreira', 'Dados', 'Comunidade']
const active = ref('Todos')
const curatedChannels = [
  { id: 'rocketseat', title: 'Rocketseat', category: 'Programação', description: 'Programação, carreira e desenvolvimento de aplicações modernas.', handle: '@rocketseat', initials: 'RS' },
  { id: 'codigofontetv', title: 'Código Fonte TV', category: 'Programação', description: 'Tecnologia e programação explicadas de forma divertida e acessível.', handle: '@codigofontetv', initials: 'CF' },
  { id: 'filipedeschamps', title: 'Filipe Deschamps', category: 'Carreira', description: 'Programação, projetos, notícias e histórias do universo da tecnologia.', handle: '@FilipeDeschamps', initials: 'FD' },
  { id: 'attekitadev', title: 'Attekita Dev', category: 'Carreira', description: 'Desenvolvimento mobile, carreira internacional e experiências reais.', handle: '@attekitadev', initials: 'AD' },
  { id: 'lucasmontano', title: 'Lucas Montano', category: 'Carreira', description: 'Engenharia de software, mercado e evolução profissional para devs.', handle: '@LucasMontano', initials: 'LM' },
  { id: 'ballerini', title: 'Rafaella Ballerini', category: 'Comunidade', description: 'Conteúdo de programação, front-end e comunidade para iniciantes.', handle: '@rafaellaballerini', initials: 'RB' },
  { id: 'cursoemvideo', title: 'Curso em Vídeo', category: 'Programação', description: 'Cursos completos e gratuitos de tecnologia com Gustavo Guanabara.', handle: '@CursoemVideo', initials: 'CV' },
  { id: 'alura', title: 'Alura', category: 'Programação', description: 'Tecnologia, inovação, carreira e tendências do mercado brasileiro.', handle: '@Alura', initials: 'AL' },
  { id: 'devsoutinho', title: 'DevSoutinho', category: 'Programação', description: 'JavaScript, front-end, arquitetura e projetos criativos para a web.', handle: '@DevSoutinho', initials: 'DS' },
  { id: 'loianegroner', title: 'Loiane Groner', category: 'Programação', description: 'Java, Angular e desenvolvimento de software com conteúdo aprofundado.', handle: '@loianegroner', initials: 'LG' },
  { id: 'fabioakita', title: 'Fabio Akita', category: 'Carreira', description: 'Computação, negócios, história da tecnologia e engenharia de software.', handle: '@Akitando', initials: 'FA' },
  { id: 'hashtagprogramacao', title: 'Hashtag Programação', category: 'Dados', description: 'Python, ciência de dados, automações e projetos aplicados.', handle: '@HashtagProgramacao', initials: 'HP' }
]
const uniqueChannels = computed(() => {
  const seen = new Set<string>()
  const local = channelData.filter(channel => !seen.has(channel.id) && Boolean(seen.add(channel.id))).map(channel => ({ ...channel, category: 'Comunidade', handle: `channel/${channel.id}`, initials: channel.title.split(' ').map(word => word[0]).slice(0, 2).join('') }))
  const curated = curatedChannels.map(channel => ({ ...channel, URL: '' }))
  return [...local, ...curated].filter(channel => active.value === 'Todos' || channel.category === active.value).filter(channel => channel.title.toLowerCase().includes(query.value.toLowerCase()))
})
</script>

<template>
  <div class="channels-page">
    <section class="channels-hero" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="hero-filter"></div><div class="channels-copy"><span>CANAIS EM DESTAQUE</span><h1>Aprenda com<br>quem <em>faz.</em></h1><p>Os melhores criadores brasileiros de tecnologia, reunidos em um só lugar.</p></div>
    </section>
    <section class="directory">
      <header><div><span>COMUNIDADE BRASILEIRA</span><h2>Descubra novos canais</h2></div><label><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input v-model="query" placeholder="Buscar canal..." /></label></header>
      <div class="category-list"><button v-for="category in categories" :key="category" :class="{ active: active === category }" @click="active = category">{{ category }}</button></div>
      <div class="channel-grid">
        <article v-for="(channel, index) in uniqueChannels" :key="channel.id" class="channel-card">
          <div class="cover"><span>{{ String(index + 1).padStart(2, '0') }}</span></div>
          <img v-if="channel.URL" :src="channel.URL" :alt="channel.title" /><div v-else class="initials">{{ channel.initials }}</div>
          <div class="channel-info"><small>{{ channel.category.toUpperCase() }} <b>✓</b></small><h3>{{ channel.title }}</h3><p>{{ channel.description }}</p><div><span>{{ 24 + index * 13 }} vídeos</span><span>Português</span></div><a :href="`https://www.youtube.com/${channel.handle}`" target="_blank" rel="noopener">Conhecer canal <b>→</b></a></div>
        </article>
      </div>
      <div v-if="!uniqueChannels.length" class="empty">Nenhum canal encontrado.</div>
    </section>
  </div>
</template>

<style scoped>
.channels-page{min-height:100vh;background:#080a0f}.channels-hero{position:relative;height:500px;background-size:cover;background-position:center;display:flex;align-items:center}.hero-filter{position:absolute;inset:0;background:linear-gradient(90deg,#080a0f 5%,rgba(8,10,15,.86) 45%,rgba(8,10,15,.18)),linear-gradient(0deg,#080a0f,transparent 40%)}.channels-copy{position:relative;padding:90px 4vw 20px}.channels-copy>span,.directory header>div>span{color:#ef334d;font-size:9px;font-weight:900;letter-spacing:2px}.channels-copy h1{margin:12px 0 18px;color:#fff;font-size:clamp(48px,6vw,78px);font-weight:900;line-height:.94;letter-spacing:-4px}.channels-copy h1 em{color:transparent;font-style:normal;-webkit-text-stroke:1px #e2e3e7}.channels-copy p{max-width:500px;color:#b8bbc3;font-size:15px}.directory{position:relative;padding:25px 4vw 80px}.directory>header{display:flex;align-items:flex-end;justify-content:space-between}.directory h2{margin-top:4px;color:#fff;font-size:29px;font-weight:850}.directory label{width:min(300px,40vw);height:42px;padding:0 13px;display:flex;align-items:center;gap:9px;border:1px solid #292d36;border-radius:9px;background:#11141b}.directory label svg{width:18px;fill:none;stroke:#777c86;stroke-width:2}.directory input{width:100%;border:0;outline:0;background:none;color:#fff}.category-list{display:flex;gap:8px;margin:25px 0 30px}.category-list button{padding:8px 15px;border:1px solid #2b2e37;border-radius:20px;background:transparent;color:#8f939e;font-size:10px;font-weight:700;cursor:pointer}.category-list button.active{background:#ef233c;border-color:#ef233c;color:#fff}.channel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.channel-card{position:relative;min-height:330px;padding:24px;overflow:hidden;border:1px solid rgba(255,255,255,.07);border-radius:15px;background:linear-gradient(145deg,#151820,#0e1117);transition:.3s}.channel-card:hover{transform:translateY(-6px);border-color:rgba(239,35,60,.5);box-shadow:0 22px 45px rgba(0,0,0,.35)}.cover{position:absolute;inset:0 0 auto;height:95px;background:radial-gradient(circle at 70% 20%,rgba(239,35,60,.3),transparent 40%),linear-gradient(120deg,#1c202a,#101218)}.cover span{position:absolute;right:18px;top:10px;color:transparent;font-size:45px;font-weight:900;-webkit-text-stroke:1px rgba(255,255,255,.1)}.channel-card>img{position:relative;width:78px;height:78px;margin-top:27px;border:4px solid #151820;border-radius:20px;object-fit:cover}.channel-info{position:relative;margin-top:14px}.channel-info small{color:#777c87;font-size:8px;font-weight:800;letter-spacing:1px}.channel-info small b{color:#57d28d}.channel-info h3{margin:5px 0;color:#fff;font-size:20px;font-weight:800}.channel-info p{height:40px;overflow:hidden;color:#858a95;font-size:11px;line-height:1.7}.channel-info>div{display:flex;gap:14px;margin:14px 0;color:#646975;font-size:9px}.channel-info a{display:flex;justify-content:space-between;color:#d7d9de;text-decoration:none;font-size:11px;font-weight:800}.channel-info a b{color:#ef334d;font-size:17px}.empty{padding:50px;text-align:center;color:#777}@media(max-width:900px){.channel-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:620px){.channels-hero{height:560px;background-position:65%}.channels-copy{padding-inline:20px}.channel-grid{grid-template-columns:1fr}.directory{padding-inline:16px}.directory>header{align-items:flex-start;flex-direction:column;gap:18px}.directory label{width:100%}.category-list{overflow-x:auto}}
.initials{position:relative;width:78px;height:78px;margin-top:27px;border:4px solid #151820;border-radius:20px;display:grid;place-items:center;background:linear-gradient(135deg,#ef334d,#70101f);color:#fff;font-size:20px;font-weight:900;letter-spacing:-1px}
</style>
