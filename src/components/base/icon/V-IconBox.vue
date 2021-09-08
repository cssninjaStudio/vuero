<script setup lang="ts">
export type IconBoxSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type IconBoxColor =
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

const props = withDefaults(
  defineProps<{
    size?: IconBoxSize
    color?: IconBoxColor
    rounded?: boolean
    bordered?: boolean
  }>(),
  {
    size: undefined,
    color: undefined,
  }
)
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
