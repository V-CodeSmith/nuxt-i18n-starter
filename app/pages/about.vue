<script setup lang="ts">
// About page: explains the starter's approach to i18n, state and logical layouts.
const { t } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: t('nav.about'),
  meta: [{ name: 'description', content: t('about.intro') }],
}))

const STACK = [
  'Nuxt 4',
  'Vue 3',
  'Pinia',
  'Tailwind CSS',
  '@nuxtjs/i18n',
  '@nuxtjs/color-mode',
  'TypeScript',
  'ESLint',
  'Prettier',
  'Husky',
  'GitHub Actions',
]

const sections = computed(() => [
  {
    key: 'language',
    title: t('about.languageTitle'),
    body: t('about.languageBody'),
  },
  {
    key: 'state',
    title: t('about.stateTitle'),
    body: t('about.stateBody'),
  },
  {
    key: 'direction',
    title: t('about.directionTitle'),
    body: t('about.directionBody'),
  },
])
</script>

<template>
  <div class="mx-auto max-w-content py-16 pe-4 ps-4 sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8">
    <header class="max-w-3xl">
      <h1 class="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {{ t('about.title') }}
      </h1>
      <p class="mt-4 text-lg leading-relaxed text-muted">
        {{ t('about.intro') }}
      </p>
    </header>

    <div class="mt-10 grid gap-4 md:grid-cols-3">
      <BaseCard v-for="section in sections" :key="section.key" elevated>
        <h2 class="text-base font-semibold">
          {{ section.title }}
        </h2>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          {{ section.body }}
        </p>
      </BaseCard>
    </div>

    <BaseCard class="mt-4">
      <template #header>
        <h2 class="text-base font-semibold">
          {{ t('about.stackTitle') }}
        </h2>
        <p class="mt-1 text-sm text-muted">
          {{ t('about.stackBody') }}
        </p>
      </template>

      <ul class="flex flex-wrap gap-2">
        <li
          v-for="item in STACK"
          :key="item"
          class="rounded-full border border-border bg-background py-1 pe-3 ps-3 text-xs font-medium text-foreground"
        >
          {{ item }}
        </li>
      </ul>

      <template #footer>
        <BaseButton :to="localePath('index')" variant="secondary" size="sm">
          {{ t('about.backHome') }}
        </BaseButton>
      </template>
    </BaseCard>
  </div>
</template>
