<script setup lang="ts">
import { ref } from 'vue'
import LayoutPage from '@/components/LayoutPage.vue'
import Section from '@/components/Section.vue'
import heroImage from '@/assets/land(4).jpg'

const activeFilter = ref('Todos')
const filters = ['Todos', 'Front-end', 'Back-end', 'Mobile', 'DevOps', 'IA & Dados', 'Carreira']
</script>

<template>
  <main class="videos-page">
    <LayoutPage />
    <section class="videos-hero" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="videos-overlay"></div>
      <div class="videos-copy">
        <span class="page-label">BIBLIOTECA DE CONTEÚDOS</span>
        <h1>Aprenda. Construa.<br><em>Evolua.</em></h1>
        <p>Uma seleção de aulas, séries e projetos para acompanhar cada etapa da sua carreira em tecnologia.</p>
        <div class="stats"><div><strong>500+</strong><span>vídeos</span></div><div><strong>40+</strong><span>tecnologias</span></div><div><strong>100%</strong><span>em português</span></div></div>
      </div>
    </section>
    <section class="video-library">
      <div class="library-title"><div><span>EXPLORE A BIBLIOTECA</span><h2>Todos os vídeos</h2></div><p>Conteúdo novo toda semana</p></div>
      <div class="filter-bar"><button v-for="filter in filters" :key="filter" :class="{ active: activeFilter === filter }" @click="activeFilter = filter">{{ filter }}</button></div>
      <Section :filter="activeFilter" />
    </section>
  </main>
</template>

<style scoped>
.videos-page{min-height:100vh;background:#080a0f}.videos-hero{position:relative;height:520px;background-size:cover;background-position:center;display:flex;align-items:center}.videos-overlay{position:absolute;inset:0;background:linear-gradient(90deg,#080a0f 6%,rgba(8,10,15,.85) 42%,rgba(8,10,15,.2)),linear-gradient(0deg,#080a0f,transparent 45%)}.videos-copy{position:relative;z-index:1;padding:90px 4vw 30px;max-width:720px}.page-label,.library-title span{color:#ef334d;font-size:9px;font-weight:900;letter-spacing:2px}.videos-copy h1{margin:12px 0 18px;color:#fff;font-size:clamp(48px,6vw,82px);font-weight:900;line-height:.92;letter-spacing:-4px}.videos-copy h1 em{color:transparent;font-style:normal;-webkit-text-stroke:1px #d5d7dd}.videos-copy>p{max-width:590px;color:#b5b8c0;font-size:15px;line-height:1.7}.stats{display:flex;gap:35px;margin-top:30px}.stats div{display:flex;flex-direction:column}.stats strong{font-size:20px;color:#fff}.stats span{color:#747984;font-size:10px}.video-library{position:relative;z-index:2;padding-top:30px}.library-title{display:flex;justify-content:space-between;align-items:flex-end;padding:0 4vw 20px}.library-title h2{color:#fff;font-size:30px;font-weight:850}.library-title p{color:#747984;font-size:11px}.filter-bar{display:flex;gap:8px;padding:0 4vw 34px;overflow-x:auto}.filter-bar button{padding:9px 16px;border:1px solid #2c3039;border-radius:30px;background:#11141b;color:#9196a1;font-size:11px;font-weight:700;white-space:nowrap;cursor:pointer}.filter-bar button:hover,.filter-bar button.active{border-color:#ef334d;background:#ef233c;color:#fff}@media(max-width:700px){.videos-hero{height:600px;background-position:65% center}.videos-copy{padding:100px 20px 25px}.videos-copy h1{font-size:52px}.stats{gap:20px}.library-title{padding-inline:16px}.library-title p{display:none}.filter-bar{padding-inline:16px}}
</style>
