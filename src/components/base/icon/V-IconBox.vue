<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
})
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
