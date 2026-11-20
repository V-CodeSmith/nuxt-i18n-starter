<script setup lang="ts">
// Site header: brand, translated navigation, language switcher, theme toggle and mobile menu.
import { ref, watch } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const isMenuOpen = ref(false)

const links = computed(() => [
  { label: t('nav.home'), to: localePath('index') },
  { label: t('nav.about'), to: localePath('about') },
])

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur">
    <div
      class="mx-auto flex h-16 max-w-content items-center gap-4 pe-4 ps-4 sm:pe-6 sm:ps-6 lg:pe-8 lg:ps-8"
    >
      <NuxtLink
        :to="localePath('index')"
        class="flex items-center gap-2 rounded-lg focus-visible:outline-none"
      >
        <span
          class="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"
          aria-hidden="true"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"
            />
          </svg>
        </span>
        <span class="flex flex-col leading-tight">
          <span class="text-sm font-semibold">{{ t('app.name') }}</span>
          <span class="hidden text-[11px] font-normal text-muted sm:block">
            {{ t('app.tagline') }}
          </span>
        </span>
      </NuxtLink>

      <nav class="ms-auto hidden items-center gap-1 md:flex" :aria-label="t('nav.ariaLabel')">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-md py-2 pe-3 ps-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
          active-class="!text-foreground"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="ms-auto flex items-center gap-2 md:ms-0">
        <LanguageSwitcher />
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-foreground md:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-navigation"
          :aria-label="isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            v-else
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-if="isMenuOpen"
      id="primary-navigation"
      class="border-t border-border md:hidden"
      :aria-label="t('nav.ariaLabel')"
    >
      <ul class="space-y-1 py-3 pe-4 ps-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block rounded-md py-2 pe-3 ps-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
            active-class="!text-foreground"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
