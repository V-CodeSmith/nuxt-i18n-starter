// Pinia setup store holding the visitor's locale and theme preferences, persisted to localStorage.
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type AppLocale = 'en' | 'fa'
export type ColorModePreference = 'light' | 'dark' | 'system'

export const SUPPORTED_LOCALES: readonly AppLocale[] = ['en', 'fa']

const COLOR_MODE_CYCLE: readonly ColorModePreference[] = ['light', 'dark', 'system']

/** Narrows an arbitrary string to a supported application locale. */
export function isAppLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.some((locale) => locale === value)
}

/** Narrows an arbitrary string to a supported color mode preference. */
export function isColorModePreference(value: string): value is ColorModePreference {
  return COLOR_MODE_CYCLE.some((mode) => mode === value)
}

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const locale = ref<AppLocale>('en')
    const colorMode = ref<ColorModePreference>('system')

    const isRtl = computed(() => locale.value === 'fa')
    const currentFont = computed(() => (isRtl.value ? 'Vazirmatn' : 'Inter'))

    function setLocale(next: AppLocale) {
      locale.value = next
    }

    function setColorMode(next: ColorModePreference) {
      colorMode.value = next
    }

    function toggleColorMode() {
      const index = COLOR_MODE_CYCLE.indexOf(colorMode.value)
      colorMode.value = COLOR_MODE_CYCLE[(index + 1) % COLOR_MODE_CYCLE.length] ?? 'system'
    }

    return {
      locale,
      colorMode,
      isRtl,
      currentFont,
      setLocale,
      setColorMode,
      toggleColorMode,
    }
  },
  {
    persist: {
      key: 'nuxt-i18n-starter-settings',
      pick: ['locale', 'colorMode'],
    },
  },
)
