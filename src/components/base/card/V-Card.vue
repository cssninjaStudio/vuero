<script setup lang="ts">
import { computed } from 'vue'

export type CardRadius = 'regular' | 'smooth' | 'rounded'
export type CardColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const props = withDefaults(
  defineProps<{
    radius?: CardRadius
    color?: CardColor
    elevated?: boolean
  }>(),
  {
    radius: undefined,
    color: undefined,
    elevated: false,
  }
)

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
