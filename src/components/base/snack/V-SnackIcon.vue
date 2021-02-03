<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    default: 'fas fa-check',
  },
  title: {
    type: String,
    default: 'Snack title',
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  solid: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="snack" :class="[white && 'is-white', size && `is-${size}`]">
    <div
      class="snack-media is-icon"
      :class="[color && `is-${color}`, solid && `is-solid`]"
    >
      <slot name="icon"></slot>
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot name="action"></slot>
    </span>
  </div>
</template>
