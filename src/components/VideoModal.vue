
<script setup lang="ts">
// import  youtube  from 'vue-youtube-embed';
import { ref } from 'vue';


const isModalOpen = ref(false);
const videoId = 'gmupEp468lY'; // Substitua pelo URL do vídeo que deseja exibir

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="bg-white">
    <h3>asdasd</h3>
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-4 rounded-lg shadow-lg" style="height: 100vh;">
        <button @click="closeModal" class="text-red-500 mt-2">Fechar</button>
        <div class="video-container">
          <youtube :video-id="videoId" />
        </div>
      </div>
    </div>
  </div>
</template>
