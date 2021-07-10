<script setup lang="ts">
import type { PropType } from 'vue'

type IconBoxSize = undefined | 'small' | 'medium' | 'large' | 'big' | 'xl'
type IconBoxColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'red'
  | 'blue'

const props = defineProps({
  size: {
    type: String as PropType<IconBoxSize>,
    default: undefined,
    validator: (value: IconBoxSize) => {
      // The value must match one of these strings
      if (
        [undefined, 'small', 'medium', 'large', 'big', 'xl'].indexOf(value) ===
        -1
      ) {
        console.warn(
          `V-IconBox: invalid "${value}" size. Should be small, medium, large, big, xl or undefined`
        )
        return false
      }

      return true
    },
  },
  color: {
    type: String as PropType<IconBoxColor>,
    default: undefined,
    validator: (value: IconBoxColor) => {
      if (!value) return true
      // The value must match one of these strings
      if (
        [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'purple',
          'yellow',
          'orange',
          'green',
          'red',
          'blue',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-IconBox: invalid "${value}" color. Should be primary, info, success, ` +
            `warning, danger, purple, yellow, orange, green, red, blue or undefined`
        )
        return false
      }

      return true
    },
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="v-icon"
    :class="[
      size && 'is-' + size,
      color && 'is-' + color,
      rounded && 'is-rounded',
      bordered && 'is-bordered',
    ]"
  >
    <slot></slot>
  </div>
</template>
