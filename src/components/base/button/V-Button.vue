<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
  feather: {
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
    class="button v-button"
    :class="[
      rounded && 'is-rounded',
      bold && 'is-bold',
      outlined && 'is-outlined',
      darkOutlined && 'is-dark-outlined',
      raised && 'is-raised',
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
    <span v-if="feather" class="icon">
      <i class="iconify" :data-icon="feather"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
