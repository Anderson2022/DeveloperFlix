<script setup lang="ts">
import Section from '../components/Section.vue'
import Carousel from '../components/Carousel .vue'
import VideoModal from '@/components/VideoModal.vue';
import Loop from '@/assets/Loop.png';
import { ref } from 'vue';

const showModal = ref(false);

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
      <div class="relative mt-28 w-96 ml-12">
        <img class=" mt-8 " :src="Loop" />

        <div class="rapper">
          <header>
            <div class="description">
              <p class="leading-4 tracking-tight text-sm leading-relaxed">
                O termo "loop" é um conceito que existe em praticamente todas as linguagens de programação. Um loop é uma
                estrutura de controle que permite que um bloco de código seja executado repetidamente com base em uma
                condição ou um número de iterações específico. Os loops são fundamentais para a programação, pois permitem
                que você automatize tarefas repetitivas, processe dados em listas ou realize operações semelhantes em um
                conjunto de elementos.
              </p>
            </div>
          </header>
        </div>


        <div>
          <!-- <button @click="openModal"
          class="play bg-main-color border border-main-color hover:bg-main-color-dark text-white text-xs px-4 py-2 rounded my-8">
          <i class="fa fa-play"></i> TRAILER
        </button> -->

          <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
            <!-- Componente Login.vue exibido como um modal -->
            <VideoModal :closeModal="closeModal" class="shadow-md" />

          </div>
        </div>

        <!-- <button
        class="add bg-lighten-bcknd-clr border border-lighten-bcknd-clr hover:bg-lighten-bcknd-clr-hover text-white text-xs px-4 py-2 rounded">
        <i class="fa fa-plus"></i> MY LIST
      </button> -->
      </div>
    </div>
    <div>
    <Section />
    </div>
  </div>
</template>
