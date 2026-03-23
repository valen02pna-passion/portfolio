<template>
  <section id="contact" class="scroll-mt-24">
    <SectionTitle :title="t('sections.contact')" />
    <div
      class="relative left-1/2 w-screen -ml-[50vw] border-y border-slate-200/60 bg-slate-900/95 text-slate-100 shadow-lg shadow-slate-950/30 dark:border-white/10 dark:bg-slate-900/95"
    >
      <div class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="space-y-6">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {{ t('contact.kicker') }}
          </p>
          <h3 class="mt-2 text-3xl font-semibold text-white">
            {{ t('contact.title') }}
          </h3>
          <p class="mt-3 text-slate-300">
            {{ t('contact.body') }}
          </p>
        </div>

        <form class="grid gap-4 sm:grid-cols-2" @submit.prevent="handleSubmit">
          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.nameLabel') }}
            </span>
            <input
              type="text"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.namePlaceholder')"
              v-model.trim="form.name"
            />
          </label>

          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.emailLabel') }}
            </span>
            <input
              type="email"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.emailPlaceholder')"
              v-model.trim="form.email"
            />
          </label>

          <label class="space-y-2 sm:col-span-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.messageLabel') }}
            </span>
            <textarea
              rows="5"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.messagePlaceholder')"
              v-model.trim="form.message"
            ></textarea>
          </label>

          <div class="flex flex-wrap items-center gap-3 sm:col-span-2">
            <button
              type="submit"
              :disabled="status === 'sending'"
              class="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ status === 'sending' ? t('contact.form.sending') : t('contact.form.submit') }}
            </button>
            <a
              href="mailto:bigchubby666@gmail.com"
              class="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              {{ t('contact.email') }}
            </a>
            <!-- <a
              href="https://www.linkedin.com/in/roy-andreson-0435733a6/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              {{ t('contact.linkedin') }}
            </a> -->
          </div>
        </form>
        </div>
      </div>
    </div>

    <Transition name="toast-slide">
      <div
        v-if="toast.visible"
        class="fixed bottom-6 left-1/2 z-50 max-w-xs -translate-x-1/2 rounded-xl border px-4 py-3 text-sm text-white shadow-lg"
        :class="toastClasses"
        role="status"
        aria-live="polite"
      >
        {{ toast.message }}
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const toast = reactive({
  visible: false,
  message: '',
  type: 'success' as 'success' | 'error',
})
const toastClasses = computed(() =>
  toast.type === 'success'
    ? 'border-emerald-400/40 bg-emerald-600/95'
    : 'border-rose-400/40 bg-rose-600/95',
)
let toastTimer: ReturnType<typeof setTimeout> | null = null

const showToast = (type: 'success' | 'error', message: string) => {
  toast.type = type
  toast.message = message
  toast.visible = true
  if (toastTimer) {
    clearTimeout(toastTimer)
  }
  toastTimer = setTimeout(() => {
    toast.visible = false
  }, 3200)
}

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    status.value = 'error'
    showToast('error', t('contact.form.error'))
    return
  }

  status.value = 'sending'

  try {
    const response = await fetch('https://formrelay.varshithvhegde.in/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        form_id: '43bef58a-2a44-4330-b4bb-17a3ffa0daf2',
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    form.name = ''
    form.email = ''
    form.message = ''
    status.value = 'success'
    showToast('success', t('contact.form.success'))
  } catch (error) {
    status.value = 'error'
    showToast('error', t('contact.form.error'))
  }
}
</script>

<style scoped>
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}
.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
