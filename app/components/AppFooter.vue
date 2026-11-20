<script setup lang="ts">
// Footer with the translated copyright line and the stack credit.
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/80 bg-surface/50">
    <div
      class="mx-auto flex max-w-content flex-col gap-2 py-6 pe-4 ps-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8"
    >
      <p>{{ t('footer.copyright', { year }) }}</p>
      <p class="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        <span>{{ t('footer.builtWith') }}</span>
        <span class="font-medium text-foreground">Nuxt 4</span>
        <span aria-hidden="true">·</span>
        <span class="font-medium text-foreground">Pinia</span>
        <span aria-hidden="true">·</span>
        <span class="font-medium text-foreground">Tailwind CSS</span>
      </p>
    </div>
  </footer>
</template>
