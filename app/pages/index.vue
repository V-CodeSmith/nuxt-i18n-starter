<script setup lang="ts">
// Home page: hero, feature grid and a live i18n / RTL / theme demo.
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { dir } = useDirection()
const { preferenceLabelKey, resolvedMode } = useTheme()
const settings = useSettingsStore()

useHead(() => ({
  title: t('nav.home'),
  meta: [{ name: 'description', content: t('home.hero.subtitle') }],
}))

const FEATURE_KEYS = ['i18n', 'rtl', 'theme', 'stores', 'typescript', 'quality'] as const

const stats = computed(() => [
  { label: t('home.demo.localeLabel'), value: locale.value.toUpperCase() },
  { label: t('home.demo.fontLabel'), value: settings.currentFont },
  { label: t('home.demo.directionLabel'), value: dir.value.toUpperCase() },
  {
    label: t('home.demo.themeLabel'),
    value: `${t(preferenceLabelKey.value)} · ${resolvedMode.value.toUpperCase()}`,
  },
])
</script>

<template>
  <div>
    <section class="border-b border-border/80 bg-gradient-to-b from-surface to-background">
      <div class="mx-auto max-w-content py-16 pe-4 ps-4 sm:py-24 sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-border bg-background py-1 pe-3 ps-3 text-xs font-medium text-primary"
          >
            <span class="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {{ t('home.hero.badge') }}
          </span>

          <h1 class="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {{ t('home.hero.title') }}
          </h1>

          <p class="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {{ t('home.hero.subtitle') }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <BaseButton :to="localePath('about')" size="lg">
              {{ t('home.hero.primaryCta') }}
            </BaseButton>
            <BaseButton to="#features" variant="secondary" size="lg">
              {{ t('home.hero.secondaryCta') }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <section
      id="features"
      class="mx-auto max-w-content py-16 pe-4 ps-4 sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8"
    >
      <div class="max-w-2xl">
        <h2 class="text-2xl font-bold sm:text-3xl">
          {{ t('home.features.title') }}
        </h2>
        <p class="mt-2 text-muted">
          {{ t('home.features.subtitle') }}
        </p>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="(key, index) in FEATURE_KEYS" :key="key" elevated>
          <p class="font-mono text-xs font-semibold text-primary" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </p>
          <h3 class="mt-3 text-base font-semibold">
            {{ t(`home.features.items.${key}.title`) }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ t(`home.features.items.${key}.description`) }}
          </p>
        </BaseCard>
      </div>
    </section>

    <section class="border-t border-border/80 bg-surface/40">
      <div class="mx-auto max-w-content py-16 pe-4 ps-4 sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8">
        <BaseCard elevated class="!p-0">
          <template #header>
            <div class="border-b border-border py-5 pe-6 ps-6">
              <h2 class="text-xl font-bold">
                {{ t('home.demo.title') }}
              </h2>
              <p class="mt-1 text-sm text-muted">
                {{ t('home.demo.subtitle') }}
              </p>
            </div>
          </template>

          <div class="grid gap-6 p-6 lg:grid-cols-2">
            <div>
              <dl class="grid grid-cols-2 gap-3">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="rounded-lg border border-border bg-background py-3 pe-3 ps-3"
                >
                  <dt class="text-[11px] font-medium uppercase tracking-wide text-muted">
                    {{ stat.label }}
                  </dt>
                  <dd class="mt-1 text-sm font-semibold" dir="auto">
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>

              <div class="mt-4 rounded-lg border border-border bg-background py-4 pe-4 ps-4">
                <p class="text-[11px] font-medium uppercase tracking-wide text-muted">
                  {{ t('home.demo.sampleLabel') }}
                </p>
                <p class="mt-2 text-sm leading-relaxed" :lang="locale" :dir="dir">
                  {{ t('home.demo.sampleText') }}
                </p>
              </div>
            </div>

            <div>
              <div
                class="h-full rounded-lg border border-dashed border-border bg-background py-4 pe-4 ps-4"
              >
                <p class="text-[11px] font-medium uppercase tracking-wide text-muted">
                  {{ t('home.demo.logicalLabel') }}
                </p>

                <div class="mt-3 space-y-2">
                  <div
                    class="relative flex items-center rounded-md border border-border bg-surface py-2.5 pe-2 ps-8 text-sm"
                  >
                    <span class="absolute start-2 text-primary" aria-hidden="true">
                      <svg
                        class="flip-on-rtl size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                    {{ t('home.demo.logicalStart') }}
                  </div>

                  <div
                    class="relative flex items-center justify-end rounded-md border border-border bg-surface py-2.5 pe-8 ps-2 text-sm"
                  >
                    {{ t('home.demo.logicalEnd') }}
                    <span class="absolute end-2 text-primary" aria-hidden="true">
                      <svg
                        class="flip-on-rtl size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M19 12H5M11 18l-6-6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>

                <p class="mt-3 text-xs leading-relaxed text-muted">
                  {{ t('home.demo.note') }}
                </p>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  </div>
</template>
