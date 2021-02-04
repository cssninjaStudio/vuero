<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
  grey: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: String,
  },
})
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
