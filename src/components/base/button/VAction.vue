<script setup lang="ts">
export type VActionDark = '1' | '2' | '3' | '4' | '5' | '6'
export interface VActionProps {
  dark?: VActionDark
  active?: boolean
  rounded?: boolean
  hoverable?: boolean
  grey?: boolean
}

const props = withDefaults(defineProps<VActionProps>(), {
  dark: undefined,
})
</script>

<template>
  <button
    class="button v-action"
    :class="[
      props.active && 'is-active',
      props.rounded && 'is-rounded',
      props.dark && `is-dark-bg-${props.dark}`,
      props.hoverable && 'is-hoverable',
      props.grey && 'is-grey',
    ]"
  >
    <slot></slot>
  </button>
</template>
