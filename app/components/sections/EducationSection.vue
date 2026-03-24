<template>
  <section
    id="education"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.education')" />
    <div class="space-y-8">
      <div
        v-for="(entry, idx) in educationItems"
        :key="idx"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.1 } }"
        class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:shadow-slate-950/30"
      >
        <div class="absolute inset-0">
          <img
            :src="entry.campusUrl"
            :alt="t('education.photoAlt')"
            class="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-white/85 dark:bg-slate-950/80" />
        </div>
        <div class="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
          <div class="space-y-4">
            <p v-if="idx === 0 && t('education.resumeDescription')" class="max-w-xl text-sm italic leading-relaxed text-slate-700 dark:text-slate-300">
              {{ t('education.resumeDescription') }}
            </p>
            <div>
              <p class="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {{ entry.degree }}
              </p>
              <p v-if="entry.description" class="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {{ entry.description }}
              </p>
              <p class="mt-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
                {{ entry.dates }}
              </p>
            </div>
          </div>
          <img
            v-if="entry.logoUrl"
            :src="entry.logoUrl"
            :alt="entry.degree"
            class="h-24 w-24 shrink-0 rounded-xl object-contain bg-white/50 p-2 shadow-sm dark:bg-white/10"
            loading="lazy"
          />
        </div>
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
  const items = tm('education.items') as Array<{ degree: string; dates: string; description?: string; campusUrl?: string; logoUrl?: string }>
  return Array.isArray(items) ? items.map((item) => ({
    ...item,
    degree: rt(item.degree),
    dates: rt(item.dates),
    description: item.description ? rt(item.description) : undefined,
    campusUrl: item.campusUrl ? rt(item.campusUrl) : undefined,
    logoUrl: item.logoUrl ? rt(item.logoUrl) : undefined,
  })) : []
})
</script>

