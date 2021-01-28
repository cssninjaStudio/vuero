<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
})
</script>

<template>
  <button
    class="button v-action"
    :class="[
      rounded && 'is-rounded',
      hoverable && 'is-hoverable',
      grey && 'is-grey',
    ]"
  >
    <slot></slot>
  </button>
</template>
