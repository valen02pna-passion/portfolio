<template>
  <section
    id="skills"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.skills')" />

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(category, idx) in skillCategories"
        :key="category.labelKey"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.06 } }"
        class="skill-card group rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/60 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:shadow-slate-950/30"
      >
        <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {{ t(`skills.${category.labelKey}`) }}
        </h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in category.items"
            :key="item.name"
            class="skill-chip group/chip relative inline-flex items-center justify-center rounded-lg border border-slate-200/70 bg-slate-50 p-2.5 transition-all duration-200 hover:scale-105 hover:border-slate-300/80 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/50 dark:hover:bg-slate-800/50 dark:hover:border-white/20"
            :aria-label="item.name"
          >
            <span class="inline-flex" :style="{ color: item.color }">
              <Icon :name="item.icon" class="h-6 w-6" />
            </span>
            <span
              class="skill-tooltip pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/chip:opacity-100 dark:bg-slate-100 dark:text-slate-900"
            >
              {{ item.name }}
              <span class="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-slate-900 dark:border-t-slate-100" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
import { skillCategories } from '~/data/skills'

const { t } = useI18n()
</script>
