<template>
  <section
    id="education"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.education')" />
    <div
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.4 } }"
      class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:shadow-slate-950/30"
    >
      <div class="absolute inset-0">
        <img
          src="/California Lutheran University.jpg"
          :alt="t('education.photoAlt')"
          class="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-white/80 dark:bg-slate-950/75" />
      </div>
      <div class="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
        <div class="space-y-6">
          <!-- <p class="text-sm font-medium text-slate-600 dark:text-slate-300">
            {{ t('education.school') }}
          </p> -->
          <div
            v-for="(entry, idx) in educationItems"
            :key="idx"
            class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <p class="text-base font-semibold text-slate-900 dark:text-white">
              {{ entry.degree }}
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-400 sm:shrink-0 sm:text-base">
              {{ entry.dates }}
            </p>
          </div>
        </div>
        <img
          src="/CLU-mark.jpg"
          :alt="t('education.school')"
          class="h-20 w-20 shrink-0 object-contain opacity-80"
          :title="t('education.school')"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t, tm, rt } = useI18n() as {
  t: (key: string) => string
  tm: (key: string) => unknown
  rt: (msg: unknown) => string
}

const educationItems = computed(() => {
  const items = tm('education.items') as Array<{ degree: string; dates: string }>
  return Array.isArray(items) ? items.map((item) => ({
    ...item,
    degree: rt(item.degree),
    dates: rt(item.dates),
  })) : []
})
</script>

