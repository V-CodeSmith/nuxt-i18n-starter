// Resolves the document direction (ltr/rtl) from the active i18n locale.
import { computed } from 'vue'
import type { AppLocale } from '~/stores/settings'

const RTL_LOCALES: readonly AppLocale[] = ['fa']

export function useDirection() {
  const { locale } = useI18n()

  const currentLocale = computed<AppLocale>(() => (locale.value === 'fa' ? 'fa' : 'en'))
  const isRtl = computed(() => RTL_LOCALES.includes(currentLocale.value))
  const dir = computed<'ltr' | 'rtl'>(() => (isRtl.value ? 'rtl' : 'ltr'))

  return { dir, isRtl, currentLocale }
}
