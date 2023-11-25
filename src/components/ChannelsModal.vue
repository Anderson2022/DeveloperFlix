<template>
  <transition name="modal-fade">
    <div v-if="modalOpen" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 w-40 h-70 rounded-md shadow-md modal-container" @click.stop>
        <div class="modal-content">
          <h2>{{ modalContent.title }}</h2>
          <p>{{ modalContent.description }}</p>
        </div>
        <button @click="closeModal">Fechar Modal</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps(['modalOpen', 'modalContent']);
const emits = defineEmits();

const closeModal = () => {
  emits('close');
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
  transform: translate(0, -20px);
}

.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-content {
  height: 100%;
  overflow-y: auto;
  /* Adicionado para permitir rolar o conteúdo se necessário */
}
</style>
