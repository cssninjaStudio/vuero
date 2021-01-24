<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
    <div class="flex-meta">
      <span>{{ props.title }}</span>
      <span>{{ props.subtitle }}</span>
    </div>
    <div class="flex-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>
