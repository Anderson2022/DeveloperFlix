<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { getChannelsCollection } from '../Api/Request/firebaseQueriesChannelsTempo';
import { insertData } from '../Api/Model/insertData';
import VideoModal from './VideoModal.vue'
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
  console.log('firstSectionVideos:', firstSectionVideos.value);
});

async function searchVideos() {
  try {
    const videos = await getChannelsCollection();
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

interface Video {
  id: number;
  title: string;
  description: string;
  URL: string;
  // Adicione outros campos, se necessário
}

// Variáveis reativas
const modalDetails = ref<Video | {}>({});

console.log('erro', modalDetails.value);

const isModalOpen = ref(false);

// Função para abrir o modal
const openModal = (video: Video) => {
  console.log('Video clicado:', video);
  modalDetails.value = video;
  isModalOpen.value = true;
};

// Função para fechar o modal
const closeModal = () => {
  isModalOpen.value = false;

};
</script>

<template>
  <div class="">
    <section class="bg-black shadow pt-6 ">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">JavaScript</h3>


      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full h-[15rem] p-8">

       <Slide v-for="video in firstSectionVideos" :key="video.Id"
         class="inline-block mr-1 cursor-pointer relative w-60  max-h-[20rem] min-h-[15rem] m-1 rounded-md overflow-hidden transition-transform duration-300 transform border-2 border-inherit"
         @click="openModal(video)">
          <div class="flex flex-col w-full h-full">
            <div class="">
              <a v-if="video.id" target="_blank" class="">
                <img :src="video.URL" alt="Thumbnail" class="h-full w-full" />
              </a>
            </div>
            <div class="h-11 w-full">
              <h2 class="text-cyan-50">{{ video.title }}</h2>
              <h4 class="text-cyan-50 marquee">{{ video.description }}</h4>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation class="custom-navigation white-arrow" />
        </template>
     
      </Carousel>
   
    </section>
<VideoModal :videoDetails="modalDetails" :modalOpen="isModalOpen" @close="closeModal" />
  </div>
</template>


<style>
.relative-hover:hover {
  z-index: 1000;
  /* ou outro número alto que funcione para o seu layout */
}

.marquee {
  overflow: hidden;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
  padding-right: 100%;
  /* Adicione algum espaço à direita para garantir que o texto não seja cortado */
  width: max-content;
  /* Define a largura do contêiner com base no conteúdo */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>