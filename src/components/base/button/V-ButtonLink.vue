<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  link: {
    type: String,
    default: 'index',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false,
  },
  elevated: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  feather: {
    type: String,
    default: '',
  },
  fa: {
    type: String,
    default: '',
  },
  circle: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <RouterLink
    :to="{ name: link }"
    class="button h-button"
    :class="[
      rounded && 'is-rounded',
      bold && 'is-bold',
      outlined && 'is-outlined',
      raised && 'is-raised',
      elevated && 'is-elevated',
      circle && 'is-circle',
      loading && 'is-loading',
      color && `is-${color}`,
      color && light && 'is-light',
    ]"
  >
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-if="feather" class="icon">
      <i class="iconify" :data-icon="feather"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </RouterLink>
</template>
