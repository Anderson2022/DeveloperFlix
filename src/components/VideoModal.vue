

<script setup lang="ts">
// @ts-ignore
// import IconPlayFill from "~icons/ph/play-fill";
// import IconPlus from "~icons/ic/outline-plus";
// import IconThumbUp from "~icons/fluent/thumb-like-20-regular";
// import IconThumbDown from "~icons/fluent/thumb-dislike-24-regular";
// import IconCross from "~icons/akar-icons/cross";
// import IconStar from "~icons/ic/sharp-star-purple500";
// import PosterCard from "./PosterCard.vue";
import Button from "./Button.vue";
import CircleButton from "./CircleButton.vue";
// import Image from "./Image.vue";
// import DetailsModalSkeleton from "../skeletons/DetailsModalSkeleton.vue";
// import useMovieDetails from "../hooks/useMovieDetails";
// import useTVDetails from "../hooks/useTVDetails";
import { state, setModalActive } from "../store";
import { defineProps, getCurrentInstance, ref, watchEffect } from 'vue';

interface Video {
  id: number;
  title: string;
  description: string;
  URL: string;
  // Adicione outros campos, se necessário
}
const {videoDetails, modalOpen } = defineProps(['videoDetails', 'modalOpen']);
// Exibindo as props no console para verificar se foram recebidas corretamente
const instance = getCurrentInstance();
console.log('errors', videoDetails.URL);

const closeModal = () => {
  if (instance) {
    instance.emit('close');
  }
};


const handleCloseClick = () => {
  closeModal();
};
</script>



<template>
  <div v-if="modalOpen" class="z-[60] bg-black bg-opacity-60 top-0 fixed h-screen w-full overflow-y-scroll fixed " @click.self="handleCloseClick">
    <div :class="'bg-slate-600 md:rounded-xl lg:w-[30vw] md:w-[80vw] max-w-[54rem] min-h-[90vh] md:mt-[2rem] md:my-[2rem] shadow overflow-hidden mx-auto'">
      <!-- <details-modal-skeleton v-if="props" /> -->

      <div class="">
        <div class="relative w-full  max-h-[30rem] min-h-[16rem]">
          <img :src="videoDetails.URL" alt="Thumbnail" class="max-h-[30rem] min-h-[20rem] w-full relative " />
       <circle-button class="z-50 absolute top-5 right-5 bg-background text-white" @click="handleCloseClick">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               class="h-6 w-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </circle-button>

          <div class="info__overlay max-h-[30rem] min-h-[20rem]">
            <h1 class="text-2xl font-netflix_medium mb-6">
           
            </h1>

            <div class="flex items-center space-x-2">
              <Button class="bg-white text-black">
                <!-- <IconPlayFill class="text-lg" /> -->
                <p>Play</p>
              </Button>
              <circle-button>
                <!-- <IconPlus class="text-lg" /> -->
              </circle-button>
              <circle-button>
                <!-- <IconThumbUp class="text-lg" /> -->
              </circle-button>
              <circle-button>
                <!-- <IconThumbDown class="text-lg" /> -->
              </circle-button>
            </div>
          </div>
        </div>

        <div class="px-4 md:px-12 my-3 max-h-[30rem] min-h-[20rem]">
          <div class="md:space-x-8 flex flex-col md:flex-row space-y-4">
            <div class="flex-1 flex-grow-[2] space-y-4">
              <p class="text-base text-gray-300"></p>

              <div class="flex items-center space-x-2">
                <div class="flex items-center text-yellow-500">
                  <!-- <IconStar /> -->
            
                </div>

                <p>
                 
                </p>

                <p v-if="12" class="border border-gray-500 px-2 text-cyan-100">
                  10+
                </p>
              </div>

              <p class="text-base">
               
              </p>
            </div>

            <div class="mt-4 md:mt-0 flex-1 space-y-2 text-sm">
              <div class="space-x-2">
                <span class="text-gray-400">Vídeos:</span>
                <span class="text-white">
                 
                </span>
              </div>

              <div class="space-x-2">
                <span class="text-gray-400">Pais:</span>
                <span class="text-white">
                  {{
                   
                  }}
                </span>
              </div>

              <div class="space-x-2">
                <span class="text-gray-400">Inscritos:</span>
                <span class="text-white">
                  {{
                    
                  }}
                </span>
              </div>
            </div>
          </div>

          <h1 class="text-2xl font-netflix_medium text-black mt-8">{{ videoDetails.title }}</h1>
          <div class=" w-full mt-8 ">
            <p class="text-cyan-50 text-center ">{{ videoDetails.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.info__overlay {
  @apply p-4 md:p-12 absolute top-0 inset-0 flex flex-col justify-end space-y-2;
  background: linear-gradient(rgba(0, 0, 0, 0),
      rgba(var(--background-color-rgb), 1));
}
</style>