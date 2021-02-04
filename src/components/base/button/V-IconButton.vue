<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  circle: {
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
  dark: {
    type: String,
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
  darkOutlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  iconify: {
    type: String,
    default: '',
  },
  fa: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button
    class="button"
    :class="[
      circle && 'is-circle',
      bold && 'is-bold',
      outlined && 'is-outlined',
      raised && 'is-raised',
      dark && `is-dark-bg-${dark}`,
      darkOutlined && 'is-dark-outlined',
      elevated && 'is-elevated',
      loading && 'is-loading',
      color && `is-${color}`,
      color && light && 'is-light',
    ]"
    :disabled="disabled"
  >
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
  </button>
</template>
