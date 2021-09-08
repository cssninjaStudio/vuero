<script setup lang="ts">
export type ActionDark = '1' | '2' | '3' | '4' | '5' | '6'

const props = withDefaults(
  defineProps<{
    dark?: ActionDark
    active?: boolean
    rounded?: boolean
    hoverable?: boolean
    grey?: boolean
  }>(),
  {
    dark: undefined,
  }
)
</script>

<template>
  <button
    class="button v-action"
    :class="[
      active && 'is-active',
      rounded && 'is-rounded',
      dark && `is-dark-bg-${dark}`,
      hoverable && 'is-hoverable',
      grey && 'is-grey',
    ]"
  >
    <slot></slot>
  </button>
</template>
