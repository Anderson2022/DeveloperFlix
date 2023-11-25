<template>
  <button
    @click="handleClick"
    class="flex items-center space-x-3 px-6 py-2 rounded-md hover:bg-opacity-80"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['data']);
const emits = defineEmits();

const handleClick = (e: any) => {
  emits('click', e);
};
</script>



<style>
</style>