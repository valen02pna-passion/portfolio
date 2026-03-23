<template>
  <component
    :is="websiteUrl ? 'a' : 'div'"
    v-bind="linkProps"
    class="inline-flex shrink-0 items-center justify-center overflow-hidden bg-slate-100 shadow-md dark:bg-slate-800"
    :class="[
      sizeClass,
      square
        ? 'rounded-md border-2 border-white transition-all hover:border-sky-500/50 dark:border-slate-300 dark:hover:border-sky-400/50'
        : 'rounded-full border-2 border-white ring-2 ring-white transition-all hover:ring-sky-500/50 dark:border-slate-300 dark:ring-slate-300 dark:hover:ring-sky-400/50',
      websiteUrl && 'group block transition-transform hover:scale-105',
    ]"
  >
    <img
      v-if="logoUrl"
      :src="logoUrl"
      :alt="companyName"
      referrerpolicy="no-referrer"
      class="h-full w-full object-contain p-1"
      :class="{ 'dark:invert': invertInDark }"
      @error="$emit('error', $event)"
    />
    <span v-else class="text-xs font-bold text-slate-600 dark:text-slate-300">
      {{ badge }}
    </span>
  </component>
</template>

<script setup lang="ts">
type Props = {
  logoUrl: string
  badge: string
  companyName: string
  websiteUrl?: string
  invertInDark?: boolean
  size?: 'sm' | 'md' | 'lg'
  /** Use rectangle + border instead of circle + ring */
  square?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  websiteUrl: '',
  invertInDark: false,
  size: 'md',
  square: false,
})

defineEmits<{ error: [event: Event] }>()

const linkProps = computed(() =>
  props.websiteUrl
    ? {
        href: props.websiteUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        title: props.companyName,
      }
    : {}
)

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'h-10 w-10'
  if (props.size === 'lg') return 'h-16 w-16'
  return 'h-12 w-12'
})
</script>
