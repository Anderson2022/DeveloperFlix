<script setup lang="ts">
import { ref } from 'vue';

interface CarouselItem {
  backdrop_path: string;
  title: string;
  vote_average?: number;
  release_date?: string;
  overview?: string;
}

const props = defineProps<{ items: CarouselItem[] }>();

const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};
</script>

<template>
  <div class="w-full flex flex-col items-center bg-black py-8">
    <h1 class="text-5xl font-bold text-red-600 mb-6 font-sans">NETFLIX</h1>
    <div class="relative w-full max-w-[1800px] overflow-hidden">
      <!-- Botão Esquerda -->
      <button @click="prevSlide" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-40 w-20 flex items-center justify-center bg-black bg-opacity-70 rounded-r-xl hover:bg-opacity-90 transition text-white text-7xl">
        ‹
      </button>
      <!-- Carrossel -->
      <div class="grid grid-cols-5 gap-4 px-12">
        <div v-for="(item, index) in props.items" :key="index"
          class="item transition-all duration-250 cursor-pointer"
          :style="{
            transform: index === currentIndex ? 'scale(1.25)' : 'scale(1)',
            margin: index === currentIndex ? '0 50px' : '0',
            zIndex: index === currentIndex ? 2 : 1
          }"
        >
          <img :src="item.backdrop_path" :alt="item.title" class="rounded-lg w-[340px] h-[510px] object-cover" />
        </div>
      </div>
      <!-- Botão Direita -->
      <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-40 w-20 flex items-center justify-center bg-black bg-opacity-70 rounded-l-xl hover:bg-opacity-90 transition text-white text-7xl">
        ›
      </button>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 0 2px;
  transition: 250ms all;
}
@media only screen and (max-width: 600px) {
  button {
    display: none;
  }
}
</style>
