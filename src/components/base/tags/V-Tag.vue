<script setup lang="ts">
export type TagColor =
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

const props = withDefaults(
  defineProps<{
    label?: string | number
    color?: TagColor
    rounded?: boolean
    curved?: boolean
    outlined?: boolean
    elevated?: boolean
    remove?: boolean
  }>(),
  {
    label: undefined,
    color: undefined,
  }
)
</script>

<template>
  <small
    class="tag"
    :class="[
      color && 'is-' + color,
      rounded && 'is-rounded',
      curved && 'is-curved',
      outlined && 'is-outlined',
      elevated && 'is-elevated',
      remove && 'is-delete',
    ]"
    >{{ label }}</small
  >
</template>
