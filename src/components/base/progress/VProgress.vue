<script setup lang="ts">
export type VProgressSize = 'tiny' | 'smaller' | 'small'
export type VProgressColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
export interface VProgressProps {
  value?: number
  max?: number
  size?: VProgressSize
  color?: VProgressColor
}

const props = withDefaults(defineProps<VProgressProps>(), {
  value: undefined,
  max: 100,
  size: undefined,
  color: 'primary',
})
</script>

<template>
  <progress
    class="progress"
    :class="[
      props.size && `is-${props.size}`,
      props.color && `is-${props.color}`,
    ]"
    :value="props.value"
    :max="props.max"
  >
    {{ props.value ? `${(props.value / props.max) * 100}%` : '' }}
  </progress>
</template>
