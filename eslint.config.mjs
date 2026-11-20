// ESLint flat config: Nuxt's preset plus the project's Composition API and typing rules.
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    name: 'nuxt-i18n-starter/rules',
    rules: {
      // Enforce <script setup> only: no Options API anywhere in the template.
      'vue/component-api-style': ['error', ['script-setup']],
      // Layouts, pages and single-purpose leaf components are allowed one-word names.
      'vue/multi-word-component-names': 'off',
      // The template bans `any`; use `unknown` plus narrowing instead.
      '@typescript-eslint/no-explicit-any': 'error',
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      // Prettier owns Vue template wrapping; attribute-per-line rules would fight it.
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      // Keep arrow parentheses aligned with Prettier's `arrowParens: "always"`.
      '@stylistic/arrow-parens': ['error', 'always'],
    },
  },
  {
    name: 'nuxt-i18n-starter/ignores',
    ignores: ['i18n/locales/**', 'app/assets/fonts/**'],
  },
)
