<script setup lang="ts">
// Cycles light → dark → system, showing sun or moon based on the resolved theme.
import { computed, onMounted, ref } from 'vue'

const { t } = useI18n()
const { preference, preferenceLabelKey, cyclePreference } = useTheme()
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

const label = computed(() => {
  if (!isMounted.value) {
    return t('themeToggle.switch')
  }

  return t('themeToggle.current', { mode: t(preferenceLabelKey.value) })
})

function toggleTheme() {
  cyclePreference()
}
</script>

<template>
  <button
    type="button"
    class="relative inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-foreground"
    :aria-label="label"
    :title="t('themeToggle.switch')"
    @click="toggleTheme"
  >
    <svg
      class="size-4 dark:hidden"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
    <svg
      class="hidden size-4 dark:block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
    <span
      v-if="isMounted && preference === 'system'"
      class="absolute -end-0.5 -top-0.5 size-1.5 rounded-full bg-accent"
      aria-hidden="true"
    />
  </button>
</template>
