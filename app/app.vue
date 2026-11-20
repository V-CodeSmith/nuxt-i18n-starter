<script setup lang="ts">
// Root component: keeps <html lang/dir> in sync with the locale and mirrors preferences into the store.
import { isColorModePreference } from '~/stores/settings'

const { locale } = useI18n()
const { dir } = useDirection()
const colorMode = useColorMode()
const settings = useSettingsStore()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: dir.value,
  },
}))

watch(
  locale,
  (value) => {
    if (value === 'fa' || value === 'en') {
      settings.setLocale(value)
    }
  },
  { immediate: true },
)

watch(
  () => colorMode.preference,
  (value) => {
    if (isColorModePreference(value)) {
      settings.setColorMode(value)
    }
  },
  { immediate: true },
)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
