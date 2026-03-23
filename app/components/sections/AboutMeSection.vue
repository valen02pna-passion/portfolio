<template>
  <section
    id="about"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.about')" />
    <div
      class="grid gap-0 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5 md:grid-cols-[minmax(0,320px)_1fr]"
    >
      <div class="relative h-64 w-full md:h-auto">
        <img
          src="/Roy_Andreson.jpg"
          :alt="t('about.photoAlt')"
          class="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:hidden" />
      </div>
      <div class="flex flex-col justify-center p-6 md:p-8">
        <p class="text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {{ t('about.p1') }}
        </p>
        <p class="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {{ t('about.p2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t } = useI18n()
</script>

