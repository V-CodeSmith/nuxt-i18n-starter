<script setup lang="ts">
// Accessible labeled text input with hint and error states.
import { computed, useId } from 'vue'

const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    label: string
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
    hint?: string
    error?: string
    placeholder?: string
    autocomplete?: string
    disabled?: boolean
    required?: boolean
  }>(),
  {
    type: 'text',
    hint: undefined,
    error: undefined,
    placeholder: undefined,
    autocomplete: undefined,
    disabled: false,
    required: false,
  },
)

const inputId = useId()
const hintId = computed(() => `${inputId}-hint`)
const errorId = computed(() => `${inputId}-error`)

const describedBy = computed(() => {
  const ids = [props.hint && !props.error ? hintId.value : null, props.error ? errorId.value : null]

  return ids.filter((id): id is string => Boolean(id)).join(' ') || undefined
})
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label :for="inputId" class="text-sm font-medium text-foreground">
      {{ label }}
      <span v-if="required" class="text-accent" aria-hidden="true">*</span>
    </label>

    <input
      :id="inputId"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      class="h-10 w-full rounded-lg border bg-background pe-3 ps-3 text-sm text-foreground transition-colors placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
      :class="error ? 'border-red-500' : 'border-border'"
    />

    <p v-if="hint && !error" :id="hintId" class="text-xs text-muted">
      {{ hint }}
    </p>
    <p
      v-if="error"
      :id="errorId"
      class="text-xs font-medium text-red-600 dark:text-red-400"
      role="alert"
    >
      {{ error }}
    </p>
  </div>
</template>
