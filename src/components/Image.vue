<template>
  <img :src="source" v-lazy="source" />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const { size, src } = defineProps(["size", "src"]);

const imageSize = computed(() =>
  typeof size === "string" ? size : `w${size}`
);

const source = `https://image.tmdb.org/t/p/${imageSize.value}${src}`;
</script>


<style>
img[lazy="loaded"] {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
}
</style>