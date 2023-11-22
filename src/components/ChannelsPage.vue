<script setup lang="ts">
import Section from '../components/Section.vue'
import Carousel from '../components/Carousel .vue'
import VideoModal from '@/components/VideoModal.vue';
import DF from '@/assets/DF.png';

import { ref } from 'vue';
const showModal = ref(false);
const Channels = 'Canais'
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
        <div class="w-full h-80">
        </div>
        <div class="flex flex-col ">
        <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-2" :src="DF" />
      <h1 class="text-cyan-50 text-2xl font-bold">{{ Channels }}</h1>
    </div>
          <div class="px-8">
            <header>
              <div class="">
<p>teste</p>
              </div>
            </header>
          </div>
        </div>





      </div>
    </div>
    <div>
      <Section />
    </div>
  </div>
</template>
