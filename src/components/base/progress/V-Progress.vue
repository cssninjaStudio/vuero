<script setup lang="ts">
export type ProgressSize = 'tiny' | 'smaller' | 'small'
export type ProgressColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

const props = withDefaults(
  defineProps<{
    value?: number
    max?: number
    size?: ProgressSize
    color?: ProgressColor
  }>(),
  {
    value: undefined,
    max: 100,
    size: undefined,
    color: 'primary',
  }
)
</script>

<template>
  <progress
    class="progress"
    :class="[size && `is-${size}`, color && `is-${color}`]"
    :value="value"
    :max="max"
  >
    {{ value ? `${(value / max) * 100}%` : '' }}
  </progress>
</template>
