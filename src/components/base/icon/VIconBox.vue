<script setup lang="ts">
export type VIconBoxSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type VIconBoxColor =
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
export interface VIconProps {
  size?: VIconBoxSize
  color?: VIconBoxColor
  rounded?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<VIconProps>(), {
  size: undefined,
  color: undefined,
})
</script>

<template>
  <div
    class="v-icon"
    :class="[
      props.size && 'is-' + props.size,
      props.color && 'is-' + props.color,
      props.rounded && 'is-rounded',
      props.bordered && 'is-bordered',
    ]"
  >
    <slot></slot>
  </div>
</template>
