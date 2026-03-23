<template>
  <section
    id="projects"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.projects')" />
    <div class="grid gap-6 sm:grid-cols-2">
      <NuxtLink
        v-for="(p, index) in localizedProjects"
        :key="p.slug"
        :to="localePath(`/projects/${p.slug}`)"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.08 } }"
        class="group block"
      >
        <div
          class="h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-0 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <div class="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-white/5">
            <img
              v-if="p.photoUrl"
              :src="p.photoUrl"
              :alt="p.title"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <p class="text-lg font-semibold text-slate-900 dark:text-white">
              {{ p.title }}
            </p>
            <p class="mt-2 line-clamp-2 text-sm text-slate-700 dark:text-slate-300">
              {{ p.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tag in p.stack"
                :key="tag"
                class="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t, te } = useI18n()
const localePath = useLocalePath()

const localizedProjects = computed(() =>
  projects.map((project) => {
    const base = `projects.items.${project.slug}`
    return {
      ...project,
      title: te(`${base}.title`) ? t(`${base}.title`) : project.title,
      description: te(`${base}.description`) ? t(`${base}.description`) : project.description,
    }
  })
)
</script>

