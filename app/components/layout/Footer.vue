<template>
  <footer class="border-t border-slate-200/60 bg-white dark:border-white/10 dark:bg-transparent">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
            <Icon name="mdi:fountain-pen-tip" class="h-6 w-6" />
          </div>
          <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Valentin Castano</span>
        </div>
        <p class="max-w-xs text-sm text-slate-600 dark:text-slate-400">
          Staff Software Engineer specializing in Distributed Systems and GenAI.
        </p>
      </div>

      <div class="flex flex-col items-start gap-4 sm:items-end">
        <div class="flex items-center gap-3">
          <a
            href="https://github.com/valen02pna-passion"
            target="_blank"
            rel="noreferrer"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <Icon name="mdi:github" class="h-5 w-5" />
            <span class="sr-only">GitHub</span>
          </a>
        </div>
        <p class="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-500">
          Copyright &copy; 2026 &bull; Built with Nuxt & Tailwind
        </p>
      </div>
    </div>
  </footer>
</template>
