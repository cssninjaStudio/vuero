<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
  darkOutlined: {
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
  <RouterLink
    :to="{ name: link }"
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
  >
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </RouterLink>
</template>
