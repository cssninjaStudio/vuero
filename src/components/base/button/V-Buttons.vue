<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type ButtonsAlign = undefined | 'centered' | 'right'

const props = defineProps({
  addons: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<ButtonsAlign>,
    default: undefined,
    validator: (value: ButtonsAlign) => {
      // The value must match one of these strings
      if ([undefined, 'centered', 'right'].indexOf(value) === -1) {
        console.warn(
          `V-Buttons: invalid "${value}" align. Should be centered, right or undefined`
        )
        return false
      }

      return true
    },
  },
})
</script>

<template>
  <div
    class="buttons"
    :class="[props.addons && 'has-addons', props.align && `is-${props.align}`]"
  >
    <slot></slot>
  </div>
</template>
