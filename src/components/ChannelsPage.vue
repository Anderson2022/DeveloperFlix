<script setup lang="ts">
import SectionChannelsPage from '../components/SectionChannelsPage.vue'
import Carousel from '../components/Carousel .vue'
import VideoModal from '@/components/VideoModal.vue';
import DF from '@/assets/DF.png';

import { ref } from 'vue';
const showModal = ref(false);
const Channels = 'Canais'
const title = 'Canais'
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

</script>

<template>
  <div class=" flex flex-col ">
    <div class="text-white mx-auto w-full min-h-screen  h-auto flex flex-col ">
      <Carousel />
      <div class="flex flex-col relative mt-28 w-96 h-96 ml-12">
        <div class="w-full h-52">
          
        </div>
        <div class="flex flex-col ">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-2" :src="DF" />
            <h1 class="text-cyan-50 text-2xl font-bold">{{ Channels }}</h1>
          </div>
          <div class="px-8">
            <header>
              <div class="">
                <h1 class="text-6xl font-bold">{{ title }}</h1>
              </div>
            </header>
          </div>
          <div class="flex">
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 w-32 rounded inline-flex items-center m-4">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
              </svg>
              Assistir
            </button>

            <button
              class="bg-slate-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-4">
              Mais Informações
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <SectionChannelsPage />
    </div>
</div></template>
