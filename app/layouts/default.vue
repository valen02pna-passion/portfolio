<template>
  <div class="relative min-h-dvh overflow-x-clip bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <ParticleTriangleBackground />
    <div class="relative z-10">
      <Navbar />
      <main class="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div id="top"></div>
        <slot />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import ParticleTriangleBackground from '~/components/ui/ParticleTriangleBackground.vue'
import ScrollToTopButton from '~/components/ui/ScrollToTopButton.vue'
</script>
