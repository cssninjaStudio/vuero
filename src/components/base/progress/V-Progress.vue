<script setup lang="ts">
import type { PropType } from 'vue'

type ProgressSize = undefined | 'tiny' | 'smaller' | 'small'
type ProgressColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'

const props = defineProps({
  value: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: 100,
  },
  size: {
    type: String as PropType<ProgressSize>,
    default: undefined,
    validator: (value: ProgressSize) => {
      // The value must match one of these strings
      if ([undefined, 'tiny', 'smaller', 'small'].indexOf(value) === -1) {
        console.warn(
          `V-Progress: invalid "${value}" size. Should be tiny, smaller, small or undefined`
        )
        return false
      }

      return true
    },
  },
  color: {
    type: String as PropType<ProgressColor>,
    default: 'primary',
    validator: (value: ProgressColor) => {
      // The value must match one of these strings
      if (
        ['primary', 'success', 'info', 'warning', 'danger'].indexOf(value) ===
        -1
      ) {
        console.warn(
          `V-Progress: invalid "${value}" color. Should be primary, success, info, warning, or danger`
        )
        return false
      }

      return true
    },
  },
})
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
