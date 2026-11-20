// Typed wrapper around @nuxtjs/color-mode for reading, setting and cycling the theme preference.
import { computed } from 'vue'
import type { ColorModePreference } from '~/stores/settings'
import { isColorModePreference } from '~/stores/settings'

const THEME_CYCLE: readonly ColorModePreference[] = ['light', 'dark', 'system']

const PREFERENCE_LABEL_KEYS: Record<ColorModePreference, string> = {
  light: 'themeToggle.light',
  dark: 'themeToggle.dark',
  system: 'themeToggle.system',
}

export function useTheme() {
  const colorMode = useColorMode()

  const preference = computed<ColorModePreference>(() =>
    isColorModePreference(colorMode.preference) ? colorMode.preference : 'system',
  )
  const resolvedMode = computed<'light' | 'dark'>(() =>
    colorMode.value === 'dark' ? 'dark' : 'light',
  )
  const isDark = computed(() => resolvedMode.value === 'dark')
  const preferenceLabelKey = computed(() => PREFERENCE_LABEL_KEYS[preference.value])

  function setPreference(next: ColorModePreference) {
    colorMode.preference = next
  }

  function cyclePreference() {
    const index = THEME_CYCLE.indexOf(preference.value)
    setPreference(THEME_CYCLE[(index + 1) % THEME_CYCLE.length] ?? 'system')
  }

  return {
    preference,
    resolvedMode,
    isDark,
    preferenceLabelKey,
    setPreference,
    cyclePreference,
  }
}
