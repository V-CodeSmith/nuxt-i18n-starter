// Nuxt application configuration: modules, i18n locales, color mode and document head defaults.
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],

  // Flat component names: `ui/BaseButton.vue` is usable as <BaseButton>.
  components: [{ path: '~/components', pathPrefix: false }],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      title: 'Nuxt i18n Starter',
      titleTemplate: '%s · Nuxt i18n Starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A production-ready Nuxt 4 starter with English and Persian translations, RTL support, dark mode, Pinia and strict TypeScript.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#f8fafc', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#020617', media: '(prefers-color-scheme: dark)' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-i18n-starter-color-mode',
    dataValue: 'theme',
  },

  compatibilityDate: '2025-07-15',

  typescript: {
    strict: true,
    typeCheck: false,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    // Translation files live in `<root>/i18n`.
    restructureDir: 'i18n',
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        dir: 'ltr',
        file: 'en.json',
      },
      {
        code: 'fa',
        name: 'فارسی',
        language: 'fa-IR',
        dir: 'rtl',
        file: 'fa.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },
})
