<template>
  <div class="space-y-4">
    <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-white/5">
      <Transition :name="transitionName" mode="out-in">
        <img
          v-if="activeImage"
          :key="activeImage"
          :src="activeImage"
          :alt="alt"
          class="h-full w-full object-cover"
        />
      </Transition>

      <button
        v-if="hasMultipleImages"
        type="button"
        class="group absolute left-0 top-0 h-full w-[9%] bg-transparent"
        aria-label="Previous photo"
        @click="prevImage"
      >
        <span
          class="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></span>
        <span
          class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 p-2 text-white transition"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 5L8 12l7 7" />
          </svg>
        </span>
      </button>
      <button
        v-if="hasMultipleImages"
        type="button"
        class="group absolute right-0 top-0 h-full w-[9%] bg-transparent"
        aria-label="Next photo"
        @click="nextImage"
      >
        <span
          class="pointer-events-none absolute inset-0 bg-gradient-to-l from-slate-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></span>
        <span
          class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white transition"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>

    <div v-if="hasMultipleImages" class="flex items-center justify-center gap-3">
      <button
        v-for="(image, index) in images"
        :key="image"
        type="button"
        class="h-3.5 w-3.5 rounded-full transition"
        :class="index === activeIndex ? 'bg-slate-900 dark:bg-white' : 'bg-slate-400/50 dark:bg-white/30'"
        :aria-label="`Go to image ${index + 1}`"
        @click="setImage(index)"
      />
    </div>

    <div v-if="hasMultipleImages" class="flex gap-2 overflow-x-auto p-4">
      <button
        v-for="(image, index) in images"
        :key="image"
        type="button"
        class="relative h-16 w-24 overflow-hidden rounded-lg border-2 transition-all duration-200 mr-2"
        :class="index === activeIndex ? 'border-slate-800 dark:border-white ring-2 ring-slate-800/25 dark:ring-white/25 scale-105' : 'border-slate-200 dark:border-white/10 opacity-60 hover:opacity-90'"
        :aria-label="`View image ${index + 1}`"
        @click="setImage(index)"
      >
        <img :src="image" :alt="alt" class="h-full w-full object-cover" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: string[]
    alt?: string
    interval?: number
  }>(),
  {
    alt: 'Gallery image',
    interval: 4500,
  },
)

const activeIndex = ref(0)
const direction = ref<'next' | 'prev'>('next')
const transitionName = computed(() =>
  direction.value === 'next' ? 'gallery-slide-next' : 'gallery-slide-prev',
)
const activeImage = computed(() => props.images[activeIndex.value])
const hasMultipleImages = computed(() => props.images.length > 1)
let intervalId: ReturnType<typeof setInterval> | null = null

const startAutoFlow = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  if (props.images.length < 2) return
  intervalId = setInterval(() => {
    direction.value = 'next'
    activeIndex.value = (activeIndex.value + 1) % props.images.length
  }, props.interval)
}

watch(
  () => props.images,
  (nextImages) => {
    activeIndex.value = nextImages.length ? 0 : 0
    direction.value = 'next'
    startAutoFlow()
  },
  { immediate: true },
)

onMounted(() => {
  startAutoFlow()
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const prevImage = () => {
  if (!props.images.length) return
  direction.value = 'prev'
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
  startAutoFlow()
}

const nextImage = () => {
  if (!props.images.length) return
  direction.value = 'next'
  activeIndex.value = (activeIndex.value + 1) % props.images.length
  startAutoFlow()
}

const setImage = (index: number) => {
  if (!props.images.length) return
  direction.value = index >= activeIndex.value ? 'next' : 'prev'
  activeIndex.value = index
  startAutoFlow()
}
</script>

<style scoped>
.gallery-slide-next-enter-active,
.gallery-slide-next-leave-active,
.gallery-slide-prev-enter-active,
.gallery-slide-prev-leave-active {
  transition: opacity 360ms ease, transform 360ms ease;
}
.gallery-slide-next-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.gallery-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
.gallery-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-16px);
}
.gallery-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(16px);
}
</style>
