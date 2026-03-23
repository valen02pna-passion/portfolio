<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <button
        type="button"
        class="inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold tracking-wide !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-white dark:hover:!text-white dark:hover:bg-white/5"
        aria-label="Go to home"
        @click="goHome"
      >
        Roy Andreson
      </button>

      <div class="hidden items-center gap-1 sm:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.hash"
          :to="localePath(link.to)"
          :class="[
            'rounded-md px-3 py-2 text-sm transition',
            isActiveLink(link.hash)
              ? 'bg-slate-100 font-semibold !text-slate-900 dark:bg-white/10 dark:!text-white'
              : '!text-slate-900 hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white',
          ]"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden inline-flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-semibold !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white sm:inline-flex"
          @click="showResume = true"
        >
          <Icon name="mdi:file-document-outline" class="h-5 w-5" />
          <span class="ml-1.5">{{ t('nav.resume') }}</span>
        </button>
        <div class="relative hidden sm:inline-flex" ref="localeWrapper">
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
            :aria-expanded="isLocaleOpen"
            aria-label="Change language"
            @click="isLocaleOpen = !isLocaleOpen"
          >
            <Icon name="mdi:translate" class="h-5 w-5" />
          </button>
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-1 scale-95"
          >
            <div
              v-if="isLocaleOpen"
              class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
            >
            <button
              v-for="localeItem in locales"
              :key="localeItem.code"
              class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
              @click="handleLocaleChange(localeItem.code)"
            >
              <span class="text-[10px] uppercase tracking-wide !text-slate-500 dark:!text-slate-400">
                {{ localeItem.code }}
              </span>
              <span class="!text-slate-900 dark:!text-slate-100">{{ localeItem.name }}</span>
            </button>
            </div>
          </Transition>
        </div>
        <ThemeToggle class="hidden sm:inline-flex" />
        <a
          href="https://github.com/roy-andreson"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="h-5 w-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <!-- <a
          href="https://www.linkedin.com/in/roy-andreson-0435733a6/"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          <span class="sr-only">LinkedIn</span>
        </a> -->
        <a
          href="https://dev.to/bigchubby666sudo"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="DEV Community"
        >
          <Icon name="simple-icons:devdotto" class="h-5 w-5" />
          <span class="sr-only">DEV Community</span>
        </a>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      v-motion
      :initial="{ opacity: 0, y: -8 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.2 } }"
      class="border-t border-slate-200/60 bg-white/90 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-slate-950/90 sm:hidden"
    >
      <div class="flex flex-col gap-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.hash"
          :to="localePath(link.to)"
          :class="[
            'rounded-md px-3 py-2 text-sm transition',
            isActiveLink(link.hash)
              ? 'bg-slate-100 font-semibold !text-slate-900 dark:bg-white/10 dark:!text-white'
              : '!text-slate-900 hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white',
          ]"
          @click="isOpen = false"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </div>
      <div class="mt-4 flex items-center gap-2">
        <div class="relative" ref="mobileLocaleWrapper">
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
            :aria-expanded="isMobileLocaleOpen"
            aria-label="Change language"
            @click="isMobileLocaleOpen = !isMobileLocaleOpen"
          >
            <Icon name="mdi:translate" class="h-5 w-5" />
          </button>
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-1 scale-95"
          >
            <div
              v-if="isMobileLocaleOpen"
              class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
            >
            <button
              v-for="localeItem in locales"
              :key="localeItem.code"
              class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
              @click="handleLocaleChange(localeItem.code, true)"
            >
              <span class="text-[10px] uppercase tracking-wide !text-slate-500 dark:!text-slate-400">
                {{ localeItem.code }}
              </span>
              <span class="!text-slate-900 dark:!text-slate-100">{{ localeItem.name }}</span>
            </button>
            </div>
          </Transition>
        </div>
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-semibold !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white sm:hidden"
          @click="showResume = true; isOpen = false"
        >
          <Icon name="mdi:file-document-outline" class="h-5 w-5" />
          <span class="ml-1.5">{{ t('nav.resume') }}</span>
        </button>
        <a
          href="https://github.com/roy-andreson"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="h-5 w-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/roy-andreson-0435733a6/"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://dev.to/bigchubby666sudo"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-950 dark:!text-slate-200 dark:hover:bg-white/5 dark:hover:!text-white"
          aria-label="DEV Community"
        >
          <Icon name="simple-icons:devdotto" class="h-5 w-5" />
          <span class="sr-only">DEV Community</span>
        </a>
      </div>
    </div>

    <ResumeModal v-model="showResume" />
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import ResumeModal from '~/components/ui/ResumeModal.vue'

const { t, locales, setLocale, locale } = useI18n()
const showResume = useResumeModal()
const localePath = useLocalePath()

const navLinks = [
  { labelKey: 'nav.about', hash: '#about', to: { path: '/', hash: '#about' } },
  { labelKey: 'nav.employment', hash: '#employment', to: { path: '/', hash: '#employment' } },
  { labelKey: 'nav.skills', hash: '#skills', to: { path: '/', hash: '#skills' } },
  { labelKey: 'nav.education', hash: '#education', to: { path: '/', hash: '#education' } },
  { labelKey: 'nav.projects', hash: '#projects', to: { path: '/', hash: '#projects' } },
  { labelKey: 'nav.contact', hash: '#contact', to: { path: '/', hash: '#contact' } },
]

const isOpen = ref(false)
const isLocaleOpen = ref(false)
const isMobileLocaleOpen = ref(false)
const localeWrapper = ref<HTMLElement | null>(null)
const mobileLocaleWrapper = ref<HTMLElement | null>(null)
const route = useRoute()
const activeHash = ref('')
const sectionIds = navLinks.map((link) => link.hash.replace('#', ''))
let rafId = 0
const isProjectsRoute = computed(() => route.path.includes('/projects'))

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
    isLocaleOpen.value = false
    isMobileLocaleOpen.value = false
  }
)

function updateActiveHash() {
  const offset = 140
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top - offset <= 0) current = `#${id}`
  }
  activeHash.value = current || route.hash
}

function onScroll() {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    rafId = 0
    updateActiveHash()
  })
}

function handleLocaleClickOutside(e: MouseEvent) {
  if (localeWrapper.value && !localeWrapper.value.contains(e.target as Node)) {
    isLocaleOpen.value = false
  }
  if (mobileLocaleWrapper.value && !mobileLocaleWrapper.value.contains(e.target as Node)) {
    isMobileLocaleOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleLocaleClickOutside))
onMounted(() => {
  updateActiveHash()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onUnmounted(() => {
  document.removeEventListener('click', handleLocaleClickOutside)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId) window.cancelAnimationFrame(rafId)
})

function handleLocaleChange(code: string, isMobile = false) {
  if (code === locale.value) {
    if (isMobile) {
      isMobileLocaleOpen.value = false
    } else {
      isLocaleOpen.value = false
    }
    return
  }
  setLocale(code as 'en' | 'es')
  if (isMobile) {
    isMobileLocaleOpen.value = false
  } else {
    isLocaleOpen.value = false
  }
}

function isActiveLink(hash: string) {
  if (isProjectsRoute.value) return hash === '#projects'
  return hash === activeHash.value
}

async function goHome() {
  await navigateTo(localePath('/'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

