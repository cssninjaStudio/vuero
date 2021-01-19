<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
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
    class="h-icon"
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
