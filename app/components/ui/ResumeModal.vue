<template>
  <Teleport to="body">
    <Transition name="resume-modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Resume"
        @click.self="close"
      >
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="close" />
        <div
          class="relative flex max-h-[90vh] w-[70vw] flex-col overflow-hidden rounded-2xl border border-slate-200/20 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
        >
          <div class="flex items-center justify-between border-b border-slate-200/60 px-4 py-3 dark:border-white/10">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
              {{ t('resume.title') }}
            </h3>
            <button
              type="button"
              class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Close"
              @click="close"
            >
              <Icon name="mdi:close" class="h-5 w-5" />
            </button>
          </div>
          <div class="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950">
            <iframe
              :src="resumeUrl"
              title="Resume"
              class="h-[80vh] min-h-[500px] w-full"
              frameborder="0"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const resumeUrl = '/Roy%20Andreson.pdf'

function close() {
  emit('update:modelValue', false)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.resume-modal-enter-active,
.resume-modal-leave-active {
  transition: opacity 0.2s ease;
}
.resume-modal-enter-from,
.resume-modal-leave-to {
  opacity: 0;
}
</style>
