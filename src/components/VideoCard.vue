<!-- <template>
  <div
    ref="container"
    class="
      cursor-pointer
      video-card
      relative
      transition-all
      duration-300
      pt-[56.25%]
    "
    :class="{
      'animate-card-hover': isScaled,
      'animate-card-unhover': !isScaled,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <Image
      :src="$data.backdrop_path"
      :size="185"
      :class="{ 'rounded-b-none shadow': isScaled }"
      :alt="data.title"
    />

    <div
      v-if="isMouseEnter && isDesktop"
      class="
        absolute
        top-full
        w-full
        h-26
        bg-background
        rounded-b-md
        transition-all
        duration-300
        shadow
        p-3
        space-y-2
      "
      :class="[!isScaled ? 'invisible opacity-0' : 'visible opacity-100']"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <circle-button
            class="p-1 bg-white text-black border-white hover:bg-gray-300"
          >
            <IconPlayFill class="text-xs" />
          </circle-button>
          <circle-button class="p-1">
            <IconPlus class="text-xs" />
          </circle-button>
          <circle-button class="p-1">
            <IconThumbUp class="text-xs" />
          </circle-button>
          <circle-button class="p-1">
            <IconThumbDown class="text-xs" />
          </circle-button>
        </div>

        <circle-button class="p-1">
          <IconKeyboardArrowDown class="text-xs" />
        </circle-button>
      </div>

      <p class="line-clamp-1">{{ data.title || data.name }}</p>

      <div class="flex items-center space-x-2 text-xs">
        <div class="flex items-center text-yellow-500">
          <IconStar />
          <p>{{ data.vote_average }}</p>
        </div>

        <p>{{ data.release_date || data.first_air_date }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { setModalActive, setModalData } from "../store.js";

import useDevice from "../hooks/useDevice";

import Image from "@/components/Image.vue";
import CircleButton from "@/components/CircleButton.vue";

const isScaled = ref(false);
const timeout = ref<number | null>(null);
const container = ref<HTMLElement | null>(null);
const isMouseEnter = ref(false);
const mouseLeaveTimeout = ref<number | null>(null);
const { isDesktop } = useDevice();

const handleMouseEnter = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  if (mouseLeaveTimeout.value) {
    clearTimeout(mouseLeaveTimeout.value);
  }

  isMouseEnter.value = true;

  timeout.value = setTimeout(() => {
    isScaled.value = true;
  }, 500);
};

const handleMouseLeave = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  isScaled.value = false;

  mouseLeaveTimeout.value = setTimeout(() => {
    isMouseEnter.value = false;
  }, 500);
};

const handleClick = () => {
  const isTVShow = !!items.first_air_date;

  setModalActive(true);
  setModalData({
    id: items.id,
    type: isTVShow ? "tv" : "movies",
  });
};

onMounted(() => {
  if (container.value) {
    container.value.addEventListener("mouseenter", handleMouseEnter);
    container.value.addEventListener("mouseleave", handleMouseLeave);
  }
});

onBeforeUnmount(() => {
  if (container.value) {
    container.value.removeEventListener("mouseenter", handleMouseEnter);
    container.value.removeEventListener("mouseleave", handleMouseLeave);
  }
});

export { isDesktop, isScaled, isMouseEnter, container, handleMouseEnter, handleMouseLeave, handleClick };
</script>

<style scoped>
.shadow {
  -webkit-box-shadow: 0px 0px 12px 0px #000000;
  box-shadow: 0px 0px 12px 0px #000000;
}

.video-card img {
  @apply object-cover rounded-md absolute top-0 left-0 w-full h-full;
}
</style> -->