<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
// Remover importação dos módulos Navigation e Scrollbar
import { getVideosCollection } from '../Api/Request/firebaseQueries';
import { insertData } from '../Api/Model/insertData';
import { GetVideos } from '../Api/Request/GetVideos';

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
  // Adiciona evento para scroll horizontal com roleta do mouse
  setTimeout(() => {
    const tracks = document.querySelectorAll('.carousel__track');
    tracks.forEach(track => {
      track.addEventListener('wheel', function(e: WheelEvent) {
        if (e.deltaY === 0) return;
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      });
    });
  }, 500);
});

async function searchVideos() {


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


}

function inserirDados() {
  insertData();
}

function executeFetch() {
  GetVideos('termo_de_pesquisa');
  console.log('Consulta e salvamento concluídos com sucesso!');
}

</script>

<template>
  <div class="">
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">JavaScript</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in firstSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">PHP</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in secondSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Python</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in thirdSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Java</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in roomSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">C+</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in fifthSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">TypeScript</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in sixthSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">C#</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in sixthSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Go</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in seventhSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Kotlin</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in seventhSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">TypeScript</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in eighthSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="bg-black shadow">
      <h3 class="text-gray-200 mx-8 pt-6 text-xl">Node.js</h3>
      <Swiper :slides-per-view="6" :space-between="24" navigation scrollbar mousewheel class="netflix-swiper">
        <SwiperSlide v-for="video in ninthSectionVideos" :key="video.videoId">
          <a v-if="video.videoId" :href="'https://www.youtube.com/watch?v=' + video.videoId" target="_blank" class="w-52">
            <img :src="video.URL" alt="Thumbnail" class="w-52 card-slide" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style>
.netflix-swiper {
  padding-bottom: 32px;
}
.netflix-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.card-slide {
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s, border 0.2s;
  border-radius: 12px;
  background: #181818;
  box-shadow: 0 2px 8px rgba(0,0,0,0.45);
  border: 2px solid transparent;
  overflow: hidden;
}
.card-slide:hover {
  transform: scale(1.18) translateY(-12px);
  z-index: 10;
  box-shadow: 0 12px 40px 0 rgba(229,9,20,0.25), 0 8px 32px rgba(0,0,0,0.55);
  border: 2px solid #e50914;
}
.card-slide img {
  border-radius: 12px;
  transition: filter 0.3s;
  filter: brightness(0.95) contrast(1.1);
}
.card-slide:hover img {
  filter: brightness(1.05) contrast(1.2);
}
</style>


