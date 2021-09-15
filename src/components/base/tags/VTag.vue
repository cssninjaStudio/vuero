<script setup lang="ts">
export type VTagColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'blue'
  | 'green'
  | 'purple'
  | 'white'
  | 'light'
  | 'solid'

export interface VTagProps {
  label?: string | number
  color?: VTagColor
  rounded?: boolean
  curved?: boolean
  outlined?: boolean
  elevated?: boolean
  remove?: boolean
}

const props = withDefaults(defineProps<VTagProps>(), {
  label: undefined,
  color: undefined,
})
</script>

<template>
  <small
    class="tag"
    :class="[
      props.color && 'is-' + props.color,
      props.rounded && 'is-rounded',
      props.curved && 'is-curved',
      props.outlined && 'is-outlined',
      props.elevated && 'is-elevated',
      props.remove && 'is-delete',
    ]"
    >{{ props.label }}</small
  >
</template>
