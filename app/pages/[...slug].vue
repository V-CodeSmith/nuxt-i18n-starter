<script setup lang="ts">
// Catch-all route that renders the translated 404 page and sets the HTTP status code.
const { t } = useI18n()
const localePath = useLocalePath()

setResponseStatus(404)

useHead(() => ({
  title: t('notFound.title'),
  meta: [{ name: 'robots', content: 'noindex' }],
}))
</script>

<template>
  <section
    class="mx-auto flex max-w-content flex-col items-center py-24 pe-4 ps-4 text-center sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8"
  >
    <p class="font-mono text-sm font-semibold tracking-widest text-primary">
      {{ t('notFound.code') }}
    </p>
    <h1 class="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('notFound.title') }}
    </h1>
    <p class="mt-3 max-w-md text-pretty text-muted">
      {{ t('notFound.description') }}
    </p>
    <BaseButton :to="localePath('index')" class="mt-8">
      {{ t('notFound.backHome') }}
    </BaseButton>
  </section>
</template>
