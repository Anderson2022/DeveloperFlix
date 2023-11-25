<template>
  <button
    @click="handleClick"
    class="
      flex
      items-center
      justify-center
      rounded-full
      p-2
      border border-secondary
      hover:border-gray-300
    "
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';

const emits = defineEmits();

const handleClick = (e: any) => {
  emits('click', e);
};
</script>




<style>
</style>