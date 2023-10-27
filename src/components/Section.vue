<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { getVideosCollection } from '../firebaseQueries';
import { insertData } from '../insertData';

import 'vue3-carousel/dist/carousel.css'

const firstSectionVideos = ref();
const secondSectionVideos = ref();
const thirdSectionVideos = ref();

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 7,
    snapAlign: 'start',
  },
};

onMounted(async () => {
  await searchVideos();
});

async function searchVideos() {
  try {
    const videos = await getVideosCollection();
    firstSectionVideos.value = videos.slice(0, 15);
    secondSectionVideos.value = videos.slice(10, 20);
    thirdSectionVideos.value = videos.slice(20, 30);
  } catch (error) {
    console.error("Erro na pesquisa de vídeos:", error);
  }
}

function inserirDados() {
  insertData();
}
</script>

<template>
  <div class="">  
  <section class="bg-black shadow  ">
    <h3 class="text-gray-200 mx-8 pt-6 text-xl">JavaScript</h3>
    <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">

      <Slide v-for="video in firstSectionVideos" :key="video.videoId"
        class="inline-block mr-1 cursor-pointer transform transition-transform duration-450 origin-center-left hover:opacity-100 hover:scale-150 w-48 z-100">
        <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
          <img :src="video.URL" alt="Thumbnail" class="w-52" />
        </a>
      </Slide>
      <template #addons>
        <Navigation class="custom-navigation" />
      </template>
    </Carousel>
  </section>
  <section class="bg-black shadow">
    <h3 class="text-gray-200 mx-8 pt-6 text-xl">PHP</h3>
    <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
      <Slide v-for="video in secondSectionVideos" :key="video.videoId"
        class="inline-block mr-1 cursor-pointer transform transition-transform duration-450 origin-center-left hover:opacity-100 hover:scale-150 w-48 z-100">
        <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
          <img :src="video.URL" alt="Thumbnail" class="w-52" />
        </a>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
  <section class="bg-black shadow">
    <h3 class="text-gray-200 mx-8 pt-6 text-xl">Python</h3>
    <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
      <Slide v-for="video in thirdSectionVideos" :key="video.videoId"
        class="inline-block mr-1 cursor-pointer transform transition-transform duration-450 origin-center-left hover:opacity-100 hover:scale-150 w-48 z-100">
        <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
          <img :src="video.URL" alt="Thumbnail" class="w-52" />
        </a>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
  </div>
</template>


