<template>
  <div class="group/tag relative inline-flex">
    <span
      class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/10"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-sky-500/80"></span>
      {{ name }}
    </span>

    <div
      v-if="skill?.descriptionKey"
      class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-48 -translate-x-1/2 rounded-lg bg-slate-900 p-3 text-xs text-white shadow-xl transition-all duration-200 opacity-0 group-hover/tag:opacity-100 group-hover/tag:-translate-y-1 dark:bg-white dark:text-slate-900"
    >
      <p class="font-bold border-b border-white/10 pb-1 mb-1.5 dark:border-slate-200">{{ name }}</p>
      <p class="leading-relaxed text-slate-300 dark:text-slate-600">
        {{ t(`skills.descriptions.${skill.descriptionKey}`) }}
      </p>
      <span class="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-slate-900 dark:border-t-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { findSkillByName } from '~/data/skills'

const props = defineProps<{
  name: string
}>()

const { t } = useI18n()
const skill = computed(() => findSkillByName(props.name))
</script>
