type ThemePreference = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme-preference'

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyThemeClass(theme: ThemePreference) {
  if (typeof document === 'undefined') return

  const effective = theme === 'system' ? getSystemTheme() : theme
  const root = document.documentElement

  if (effective === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function useTheme() {
  const preference = useState<ThemePreference>('theme-preference', () => 'dark')

  if (process.client) {
    if (!window.__themeInitialized) {
      const stored = window.localStorage.getItem(STORAGE_KEY) as ThemePreference | null
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        preference.value = stored
      }
      applyThemeClass(preference.value)

      const media = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => {
        if (preference.value === 'system') {
          applyThemeClass('system')
        }
      }
      media.addEventListener('change', handler)
      window.__themeInitialized = true
    }
  }

  function setTheme(next: ThemePreference) {
    preference.value = next
    if (process.client) {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    applyThemeClass(next)
  }

  const isDark = computed(() => {
    const effective = preference.value === 'system' ? getSystemTheme() : preference.value
    return effective === 'dark'
  })

  return {
    preference,
    isDark,
    setTheme,
  }
}

declare global {
  interface Window {
    __themeInitialized?: boolean
  }
}

