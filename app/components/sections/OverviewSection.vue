<template>
  <section
    id="overview"
    v-motion
    :initial="{ opacity: 0, y: 12 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-white/10 dark:from-slate-900/50 dark:to-slate-950/80"
  >
    <div class="absolute right-0 top-0 z-0 h-64 w-64 translate-x-16 -translate-y-16 rounded-full bg-slate-200/40 dark:bg-white/5" aria-hidden="true" />
    <div class="relative z-10 overflow-visible">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {{ t('overview.title') }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {{ t('overview.subtitle') }}
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-3 overflow-visible">
        <NuxtLink
          :to="`${localePath('/')}#projects`"
          class="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:border-slate-400 hover:bg-slate-800 dark:border-white/20 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
          {{ t('overview.cta.projects') }}
        </NuxtLink>
        <NuxtLink
          :to="`${localePath('/')}#contact`"
          class="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-transparent px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5"
        >
          {{ t('overview.cta.contact') }}
        </NuxtLink>
        <a
          :href="resumeUrl"
          download
          class="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5"
        >
          <Icon name="mdi:download" class="size-5 shrink-0" />
          {{ t('overview.cta.resume') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const resumeUrl = '/Roy%20Andreson.pdf'
</script>
