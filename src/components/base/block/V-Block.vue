<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  infratitle: {
    type: String,
    default: undefined,
  },
  center: {
    type: Boolean,
    default: false,
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
      <span v-if="subtitle">{{ subtitle }}</span>
      <span v-if="infratitle">{{ infratitle }}</span>
      <slot></slot>
    </div>
    <div class="flex-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>
