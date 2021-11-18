<script setup lang="ts">
import { computed } from 'vue'

export type VCardRadius = 'regular' | 'smooth' | 'rounded'
export type VCardColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface VCardProps {
  radius?: VCardRadius
  color?: VCardColor
  elevated?: boolean
}

const props = withDefaults(defineProps<VCardProps>(), {
  radius: undefined,
  color: undefined,
  elevated: false,
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
  <div :class="[cardRadius, elevated && 'is-raised', props.color && `is-${props.color}`]">
    <slot></slot>
  </div>
</template>
