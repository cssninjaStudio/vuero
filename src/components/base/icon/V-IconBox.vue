<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
      props.size && 'is-' + props.size,
      props.color && 'is-' + props.color,
      props.rounded && 'is-rounded',
      props.bordered && 'is-bordered',
    ]"
  >
    <slot></slot>
  </div>
</template>
