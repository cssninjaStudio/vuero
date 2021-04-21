<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

type CardRadius = 'regular' | 'smooth' | 'rounded'
type CardColor =
  | undefined
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const props = defineProps({
  radius: {
    type: String as PropType<CardRadius>,
    default: 'regular',
    validator: (value: CardRadius) => {
      // The value must match one of these strings
      if (['regular', 'smooth', 'rounded'].indexOf(value) === -1) {
        console.warn(
          `V-Card: invalid "${value}" radius. Should be smooth, rounded or regular`
        )
        return false
      }

      return true
    },
  },
  color: {
    type: String as PropType<CardColor>,
    default: undefined,
    validator: (value: CardRadius) => {
      // The value must match one of these strings
      if (
        [
          undefined,
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'danger',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-Card: invalid "${value}" color. Should be primary, secondary, info, 
          success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  elevated: {
    type: Boolean,
    default: false,
  },
})

const cardRadius = computed(() => {
  if (props.radius === 'smooth') {
    return 's-card'
  } else if (props.radius === 'rounded') {
    return 'l-card'
  }

  return 'r-card'
})
</script>

<template>
  <div
    :class="[
      cardRadius,
      elevated && 'is-raised',
      props.color && `is-${props.color}`,
    ]"
  >
    <slot></slot>
  </div>
</template>
