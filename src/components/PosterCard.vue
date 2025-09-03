<template>
  <div class="group cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-gray-900 transform transition duration-300 hover:scale-105 hover:shadow-2xl" style="width: 220px; height: 320px;">
    <div class="relative w-full h-full">
      <Image
        :src="data.backdrop_path"
        :alt="data.title || data.name"
        :size="300"
        class="w-full h-full object-cover absolute left-0 top-0"
      />
      <div class="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex flex-col">
        <h3 class="text-white text-lg font-semibold drop-shadow mb-1">
          {{ data.title || data.name }}
        </h3>
        <div class="flex items-center space-x-2 mb-1">
          <span class="flex items-center text-yellow-500">
            <IconStar />
            <span class="ml-1">{{ data.vote_average.toFixed(1) }}</span>
          </span>
          <span class="text-gray-300 text-xs">{{ data.release_date || data.first_air_date }}</span>
        </div>
        <p class="text-xs text-gray-300 line-clamp-3">{{ data.overview }}</p>
      </div>
      <div class="invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-black bg-opacity-80 border border-gray-300">
        <IconPlayFill />
      </div>
    </div>
    <div class="absolute top-4 right-4 z-10">
      <circle-button>
        <!-- <IconPlus /> -->
      </circle-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import IconPlayFill from "~icons/ph/play-fill";
// import IconPlus from "~icons/ic/outline-plus";
// import IconStar from "~icons/ic/sharp-star-purple500";

import CircleButton from "./CircleButton.vue";
import Image from "./Image.vue";

const props = defineProps(["data"]);
</script>
