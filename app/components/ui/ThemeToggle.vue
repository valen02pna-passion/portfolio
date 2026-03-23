<template>
  <div ref="wrapper" class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs font-medium !text-slate-900 shadow-sm dark:border-white/15 dark:bg-slate-900/70 dark:!text-slate-100"
      @click="open = !open"
    >
      <Icon v-if="preference === 'light'" name="mdi:white-balance-sunny" class="h-4 w-4" />
      <Icon v-else-if="preference === 'dark'" name="mdi:moon-waning-crescent" class="h-4 w-4" />
      <Icon v-else name="mdi:desktop-tower-monitor" class="h-4 w-4" />
      <span v-if="preference === 'light'">Light</span>
      <span v-else-if="preference === 'dark'">Dark</span>
      <span v-else>System</span>
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
        v-if="open"
        class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
      >
        <button
          class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-left !text-slate-900 transition hover:bg-slate-100 dark:!text-slate-100 dark:hover:bg-slate-800"
          @click="change('light')"
        >
          <Icon name="mdi:white-balance-sunny" class="h-4 w-4" />
          <span>Light</span>
        </button>
        <button
          class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-left !text-slate-900 transition hover:bg-slate-100 dark:!text-slate-100 dark:hover:bg-slate-800"
          @click="change('dark')"
        >
          <Icon name="mdi:moon-waning-crescent" class="h-4 w-4" />
          <span>Dark</span>
        </button>
        <button
          class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-left !text-slate-900 transition hover:bg-slate-100 dark:!text-slate-100 dark:hover:bg-slate-800"
          @click="change('system')"
        >
          <Icon name="mdi:desktop-tower-monitor" class="h-4 w-4" />
          <span>System</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { preference, setTheme } = useTheme()
const open = ref(false)

function change(next: 'light' | 'dark' | 'system') {
  setTheme(next)
  open.value = false
}

const wrapper = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

