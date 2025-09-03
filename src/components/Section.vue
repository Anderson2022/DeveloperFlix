<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getVideosCollection } from '../Api/Request/firebaseQueries';
import { insertData } from '../Api/Model/insertData';

interface Video {
  videoId: string;
  URL: string;
}

const firstSectionVideos = ref<Video[]>([]);
const secondSectionVideos = ref<Video[]>([]);
const thirdSectionVideos = ref<Video[]>([]);
const fourthSectionVideos = ref<Video[]>([]);
const fifthSectionVideos = ref<Video[]>([]);
const currentIndexes = ref([0, 0, 0]); // Um índice para cada seção

onMounted(async () => {
  await searchVideos();
});

async function searchVideos() {
  try {
    const videos = await getVideosCollection();
    firstSectionVideos.value = videos.slice(0, 15) as Video[];
    secondSectionVideos.value = videos.slice(10, 20) as Video[];
    thirdSectionVideos.value = videos.slice(20, 30) as Video[];
    fourthSectionVideos.value = videos.slice(30, 40) as Video[]; // Exemplo
    fifthSectionVideos.value = videos.slice(40, 50) as Video[]; // Exemplo
  } catch (error) {
    console.error("Erro na pesquisa de vídeos:", error);
  }
}

function inserirDados() {
  insertData();
}

function prevSlide(sectionIndex: number, sectionVideos: Video[]) {
  if (sectionVideos.length === 0) return;
  currentIndexes.value[sectionIndex] = (currentIndexes.value[sectionIndex] - 1 + sectionVideos.length) % sectionVideos.length;
}
function nextSlide(sectionIndex: number, sectionVideos: Video[]) {
  if (sectionVideos.length === 0) return;
  currentIndexes.value[sectionIndex] = (currentIndexes.value[sectionIndex] + 1) % sectionVideos.length;
}

const firstSection = ref<HTMLElement | null>(null);
const secondSection = ref<HTMLElement | null>(null);
const thirdSection = ref<HTMLElement | null>(null);
const fourthSection = ref<HTMLElement | null>(null);

function scroll(refName: 'firstSection' | 'secondSection' | 'thirdSection' | 'fourthSection', scrollOffset: number) {
  const refs = { firstSection, secondSection, thirdSection, fourthSection };
  const element = refs[refName]?.value;
  if (element) {
    element.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  }
}
</script>

<template>
  <div>
    <section class="movies-section">
      <h3 class="section-title">Populares na Netflix</h3>      
      <div class="row-container">
        <button class="arrow-button left" @click="scroll('firstSection', -1000)">&#8249;</button>
        <div class="movies-row" ref="firstSection">
        <div class="row__inner">
          <div v-for="video in firstSectionVideos" :key="video.videoId" class="tile">
            <div class="tile__media">
              <img class="tile__img" :src="video.URL" :alt="video.videoId" />
            </div>
          </div>
          </div>
        </div>
        <button class="arrow-button right" @click="scroll('firstSection', 1000)">&#8250;</button>
      </div>
    </section>
    <section class="movies-section">
      <h3 class="section-title">Em alta</h3>
      <div class="row-container">
        <button class="arrow-button left" @click="scroll('secondSection', -1000)">&#8249;</button>
        <div class="movies-row" ref="secondSection">
        <div class="row__inner">
          <div v-for="video in secondSectionVideos" :key="video.videoId" class="tile">
            <img class="tile__img" :src="video.URL" :alt="video.videoId" />
          </div>
        </div>
        </div>
        <button class="arrow-button right" @click="scroll('secondSection', 1000)">&#8250;</button>
      </div>
    </section>
    <section class="movies-section">
      <h3 class="section-title">Relacionados à I.A.</h3>
      <div class="row-container">
        <button class="arrow-button left" @click="scroll('thirdSection', -1000)">&#8249;</button>
        <div class="movies-row" ref="thirdSection">
        <div class="row__inner">
          <div v-for="video in thirdSectionVideos" :key="video.videoId" class="tile">
            <img class="tile__img" :src="video.URL" :alt="video.videoId" />
          </div>
        </div>
        </div>
        <button class="arrow-button right" @click="scroll('thirdSection', 1000)">&#8250;</button>
      </div>
    </section>
    <section class="movies-section">
      <h3 class="section-title">Vídeos da Semana</h3>
      <div class="row-container">
        <button class="arrow-button left" @click="scroll('fourthSection', -1000)">&#8249;</button>
        <div class="movies-row" ref="fourthSection">
        <div class="row__inner">
          <div v-for="video in fourthSectionVideos" :key="video.videoId" class="tile">
            <img class="tile__img" :src="video.URL" :alt="video.videoId" />
          </div>
        </div>
        </div>
        <button class="arrow-button right" @click="scroll('fourthSection', 1000)">&#8250;</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.row-container {
  position: relative;
}

.movies-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #e5e5e5;
  margin: 0 0 1rem 50px;
}

.movies-row {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  /* Esconde a barra de rolagem mas mantém a funcionalidade */
  scrollbar-width: none; /* Firefox */
}
.movies-row::-webkit-scrollbar {
  display: none;
}

.row__inner {
  transition: 450ms transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0; /* ($tileHeight / 2) */
  padding-bottom: 10px;
  padding-left: 50px;
}

.tile {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140.625px; /* ($tileWidth / (16/9)) */
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
}

.tile__img {
  width: 250px;
  height: 140.625px;
  object-fit: cover;
}

/* Efeitos de Hover */
.row__inner:hover {
  transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .tile {
  opacity: 0.3;
}
.row__inner:hover .tile:hover {
  transform: scale(1.5);
  opacity: 1;
}
.tile:hover ~ .tile {
  transform: translate3d(125px, 0, 0);
}

.arrow-button {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.row-container:hover .arrow-button {
  opacity: 1;
}

.arrow-button.left {
  left: 0;
}

.arrow-button.right {
  right: 0;
}

.arrow-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
