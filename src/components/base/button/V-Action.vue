<script setup lang="ts">
import type { PropType } from 'vue'

type ActionDark = undefined | '1' | '2' | '3' | '4' | '5' | '6'

const props = defineProps({
  dark: {
    type: String as PropType<ActionDark>,
    default: undefined,
    validator: (value: ActionDark) => {
      // The value must match one of these strings
      if ([undefined, '1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
        console.warn(
          `V-Action: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
        )
        return false
      }

      return true
    },
  },
  active: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
  grey: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    class="button v-action"
    :class="[
      active && 'is-active',
      rounded && 'is-rounded',
      dark && `is-dark-bg-${dark}`,
      hoverable && 'is-hoverable',
      grey && 'is-grey',
    ]"
  >
    <slot></slot>
  </button>
</template>
