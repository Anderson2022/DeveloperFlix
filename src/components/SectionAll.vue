<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { getVideosCollection } from '../Api/Request/firebaseQueries';
import { insertData } from '../Api/Model/insertData';
import { GetVideos } from '../Api/Request/GetVideos';
import 'vue3-carousel/dist/carousel.css'

const firstSectionVideos = ref();
const secondSectionVideos = ref();
const thirdSectionVideos = ref();
const roomSectionVideos = ref()
const fifthSectionVideos = ref();
const sixthSectionVideos = ref();
const seventhSectionVideos = ref();
const eighthSectionVideos = ref();
const ninthSectionVideos = ref();
const descendSectionVideos = ref();


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

    // Defina o termo que você deseja procurar na descrição
    const JavaScript = "JavaScript";
    const PHP = "PHP";
    const Python = "Python";
    const Java = "Java";
    const C = "C#";
    const TypeScript = "TypeScript";
    const Kotlin = "Kotlin";
    const cmais = "C++";
    const Node = "Node";

    // Use a função de filtro para filtrar os vídeos com base no termo na descrição
    const JavaScriptVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(JavaScript);
    });
    const PHPVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(PHP);
    });
    const PythonVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(Python);
    });
    const JavaVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(Java);
    });
    const CVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(C);
    });
    const cmaisVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(cmais);
    });
    const TypeScriptVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(TypeScript);
    });
    const KotlinVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(Kotlin);
    });
    const NodeVideos = videos.filter(video => {
      // Certifique-se de que a descrição não seja undefined antes de usar includes
      const description = video.title || '';
      return description.includes(Node);
    });

    firstSectionVideos.value = JavaScriptVideos;
    secondSectionVideos.value = PHPVideos;
    thirdSectionVideos.value = PythonVideos;
    roomSectionVideos.value = JavaVideos;
    fifthSectionVideos.value = CVideos;
    sixthSectionVideos.value = cmaisVideos;
    seventhSectionVideos.value = KotlinVideos;
    eighthSectionVideos.value = TypeScriptVideos;
    ninthSectionVideos.value = NodeVideos

  } catch (error) {
    console.error("Erro na pesquisa de vídeos:", error);
  }
}


function inserirDados() {
  insertData();
}

function executeFetch() {
  try {
    GetVideos('termo_de_pesquisa');
    console.log('Consulta e salvamento concluídos com sucesso!');
  } catch (error) {
    console.error('Erro ao executar a consulta e o salvamento:', error);
  }
}



</script>

<template>
  <div class="">
    <!-- <div>
      <button @click="executeFetch">Executar</button>
    </div> -->
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

    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Java</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in roomSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">C+</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in fifthSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">TypeScript</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in sixthSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Kotlin</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in sixthSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">cmais</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in seventhSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Kotlin</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in seventhSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">TypeScript</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in eighthSectionVideos" :key="video.videoId"
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
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Node.js</h3>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="w-full">
        <Slide v-for="video in ninthSectionVideos" :key="video.videoId"
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


