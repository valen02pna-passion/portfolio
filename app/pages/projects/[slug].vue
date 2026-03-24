<template>
  <div class="space-y-8">
    <NuxtLink :to="`${localePath('/')}#projects`"
      class="text-sm text-slate-700 underline-offset-4 hover:underline dark:text-slate-300">
      ← {{ t('projects.back') }}
    </NuxtLink>

    <div v-if="localizedProject"
      class="overflow-visible rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div class="px-6 pt-6 sm:px-8">
        <AutoFlowCarousel :images="gallery" :alt="localizedProject.title" />
      </div>

      <div class="space-y-5 p-6 sm:p-8">
        <div>
          <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {{ localizedProject.title }}
          </h1>
          <p class="mt-3 text-slate-700 dark:text-slate-300">
            {{ localizedProject.description }}
          </p>
          <div v-if="localizedProject.detailedDescription"
            class="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <p v-for="(paragraph, i) in localizedProject.detailedDescription.split('\n')" :key="i">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <SkillTag v-for="tag in localizedProject.stack" :key="tag" :name="tag" />
        </div>

        <div class="flex flex-wrap gap-3">
          <a v-if="localizedProject.liveDemoUrl" :href="localizedProject.liveDemoUrl" target="_blank" rel="noreferrer"
            class="btn-live-demo">
            {{ t('projects.liveDemo') }}
          </a>
        </div>
      </div>
    </div>

    <div v-else class="rounded-2xl border border-slate-200/60 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
      <p class="text-slate-700 dark:text-slate-200">{{ t('projects.notFound') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AutoFlowCarousel from '~/components/ui/AutoFlowCarousel.vue'
import SkillTag from '~/components/ui/SkillTag.vue'
import { projects } from '~/data/projects'

const { t, te } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const project = computed(() => projects.find((p) => p.slug === slug.value))
const localizedProject = computed(() => {
  if (!project.value) return null
  const base = `projects.items.${project.value.slug}`
  return {
    ...project.value,
    title: te(`${base}.title`) ? t(`${base}.title`) : project.value.title,
    description: te(`${base}.description`) ? t(`${base}.description`) : project.value.description,
    detailedDescription: te(`${base}.detailedDescription`) ? t(`${base}.detailedDescription`) : project.value.detailedDescription,
  }
})
const gallery = computed(() => {
  if (!localizedProject.value) return []
  if (localizedProject.value.gallery?.length) return localizedProject.value.gallery
  return localizedProject.value.photoUrl ? [localizedProject.value.photoUrl] : []
})
useSeoMeta({
  title: computed(() =>
    localizedProject.value
      ? `${localizedProject.value.title} — Portfolio`
      : t('projects.metaTitle'),
  ),
  description: computed(() => localizedProject.value?.description),
})
</script>

<style scoped>
@reference "tailwindcss";

.btn-live-demo {
  @apply inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-200;
}

.dark .btn-live-demo {
  @apply bg-white text-slate-950 hover:bg-slate-200;
}
</style>
