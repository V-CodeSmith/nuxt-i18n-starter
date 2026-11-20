<script setup lang="ts">
// Surface card with optional header and footer slots.
import { useSlots } from 'vue'

const slots = useSlots()

withDefaults(
  defineProps<{
    elevated?: boolean
    as?: string
  }>(),
  {
    elevated: false,
    as: 'div',
  },
)
</script>

<template>
  <component
    :is="as"
    class="rounded-xl border border-border bg-surface p-6"
    :class="elevated ? 'shadow-card' : ''"
  >
    <header v-if="slots.header" class="mb-4">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="slots.footer" class="mt-4 border-t border-border pt-4">
      <slot name="footer" />
    </footer>
  </component>
</template>
