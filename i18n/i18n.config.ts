// Vue I18n runtime configuration shared by the app (Composition API mode, English fallback).
import type { I18nOptions } from 'vue-i18n'

export default defineI18nConfig((): I18nOptions => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  missingWarn: false,
  fallbackWarn: false,
}))
