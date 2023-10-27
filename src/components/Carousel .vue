<script setup lang="ts">
import { ref, onMounted } from 'vue';

const images = ref([
  'src/assets/land.jpg',
  'src/assets/land2.jpg',
  'src/assets/land(3).jpg',
  'src/assets/land(4).jpg',
  'src/assets/land(5).jpg',
  'src/assets/land(6).jpg',
]);

const currentIndex = ref(0);

const setCurrentIndex = (index: number) => {
  currentIndex.value = index;
};

const prevSlide = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.value.length - 1;
  } else {
    currentIndex.value--;
  }
};

const nextSlide = () => {
  if (currentIndex.value === images.value.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }

  const startAutoRotation = () => {
    setInterval(() => {
      nextSlide();
    }, 5000); // Altere o valor 5000 para o intervalo desejado em milissegundos (5 segundos neste exemplo).
  };

  onMounted(() => {
    startAutoRotation();
  });
}
</script>


<template>
  <div class="absolute w-full h-full bg-black justify-end " data-carousel="slide">  
    <!-- Carousel wrapper -->
      <div class="absolute rounded-lg w-4/6 h-full inset-y-0 right-0"> 
   <div v-for="(image, index) in images" :key="index" class="duration-700 ease-in-out" data-carousel-item :class="{ 'hidden': index !== currentIndex }">
       <img :src="image" class="absolute block w-full h-full" alt="...">  
        <div class="absolute inset-0 w-1/4 bg-gradient-to-l from-transparent to-black"></div>
   <div class="absolute inset-0 w-full h-1/4  bg-gradient-to-t from-transparent to-black"></div>
        </div>
      </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button v-for="(image, index) in images" :key="index" type="button" class="w-3 h-3 rounded-full"
        :aria-current="index === currentIndex ? 'true' : 'false'" :aria-label="'Slide ' + (index + 1)"
        @click="setCurrentIndex(index)"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev @click="prevSlide">
      <!-- Previous button content -->
    </button>
    <button type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next @click="nextSlide">
      <!-- Next button content -->
    </button>
  </div>
</template>


