<script setup lang="ts">
// Locale switcher that keeps the current page while changing the URL prefix.
import type { AppLocale } from '~/stores/settings'

const { t, locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const settings = useSettingsStore()

const options = computed(() => [
  { code: 'en' as AppLocale, label: t('languageSwitcher.en') },
  { code: 'fa' as AppLocale, label: t('languageSwitcher.fa') },
])

async function changeLocale(code: AppLocale) {
  if (code === locale.value) {
    return
  }

  settings.setLocale(code)
  await setLocale(code)
  await navigateTo(switchLocalePath(code))
}
</script>

<template>
  <div
    class="flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5"
    role="group"
    :aria-label="t('languageSwitcher.label')"
  >
    <button
      v-for="option in options"
      :key="option.code"
      type="button"
      :lang="option.code"
      :aria-pressed="locale === option.code"
      :aria-label="t('languageSwitcher.switchTo', { language: option.label })"
      :title="option.label"
      class="rounded-md py-1 pe-2 ps-2 text-xs font-semibold uppercase transition-colors"
      :class="
        locale === option.code
          ? 'bg-primary text-primary-foreground'
          : 'text-muted hover:text-foreground'
      "
      @click="changeLocale(option.code)"
    >
      {{ option.code }}
    </button>
  </div>
</template>
