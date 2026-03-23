<template>
  <button
    ref="buttonRef"
    type="button"
    :class="[
      'fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200/70 bg-white/90 text-sm font-semibold text-slate-800 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/15 dark:bg-slate-900/90 dark:text-slate-100',
      !isVisible && 'pointer-events-none',
    ]"
    :aria-hidden="!isVisible"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <svg
      class="h-6 w-6"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 44 L32 20 L52 44"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="sr-only">Scroll to top</span>
  </button>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const isVisible = ref(false)
const buttonRef = ref<HTMLElement | null>(null)

function onScroll() {
  isVisible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const motion = useMotion(buttonRef, {
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, y: 12, transition: { duration: 0.2 } },
})

watch(isVisible, (show) => {
  motion.variant.value = show ? 'visible' : 'hidden'
})

onMounted(async () => {
  await nextTick()
  motion.variant.value = isVisible.value ? 'visible' : 'hidden'
})
</script>
