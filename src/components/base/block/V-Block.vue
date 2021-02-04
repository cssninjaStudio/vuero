<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  center: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Card title',
  },
  subtitle: {
    type: String,
    default: 'Card subtitle',
  },
  lighter: {
    type: Boolean,
    default: false,
  },
  narrow: {
    type: Boolean,
    default: false,
  },
  mResponsive: {
    type: Boolean,
    default: false,
  },
  tResponsive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    :class="[
      !center && 'media-flex',
      center && 'media-flex-center',
      narrow && 'no-margin',
      mResponsive && 'is-responsive-mobile',
      tResponsive && 'is-responsive-tablet-p',
    ]"
  >
    <slot name="icon"></slot>
    <div class="flex-meta" :class="[lighter && 'is-lighter']">
      <span>{{ title }}</span>
      <span>{{ subtitle }}</span>
    </div>
    <div class="flex-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>
