<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  to: {
    type: Object,
    default: undefined,
  },
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
    default: undefined,
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
const classes = computed(() => {
  return [
    props.disabled && 'is-disabled',
    props.circle && 'is-circle',
    props.bold && 'is-bold',
    props.outlined && 'is-outlined',
    props.raised && 'is-raised',
    props.dark && `is-dark-bg-${props.dark}`,
    props.darkOutlined && 'is-dark-outlined',
    props.elevated && 'is-elevated',
    props.loading && 'is-loading',
    props.color && `is-${props.color}`,
    props.light && 'is-light',
  ]
})
</script>

<template>
  <RouterLink v-if="to" :to="to" class="button" :class="classes">
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-else-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
  </RouterLink>
  <button v-else class="button" :class="classes" :disabled="disabled">
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-else-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
  </button>
</template>
