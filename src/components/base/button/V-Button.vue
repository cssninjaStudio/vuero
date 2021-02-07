<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed } from 'vue'

const props = defineProps({
  to: {
    type: Object,
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'big' | 'huge'>,
    default: undefined,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  fullwidth: {
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
  dark: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  lower: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: undefined,
  },
  iconify: {
    type: String,
    default: undefined,
  },
  fa: {
    type: String,
    default: undefined,
  },
})

const classes = computed(() => {
  return [
    'button',
    'v-button',
    props.disabled && 'is-disabled',
    props.rounded && 'is-rounded',
    props.bold && 'is-bold',
    props.size && `is-${props.size}`,
    props.lower && 'is-lower',
    props.fullwidth && 'is-fullwidth',
    props.outlined && 'is-outlined',
    props.dark && `is-dark-bg-${props.dark}`,
    props.darkOutlined && 'is-dark-outlined',
    props.raised && 'is-raised',
    props.elevated && 'is-elevated',
    props.loading && 'is-loading',
    props.color && `is-${props.color}`,
    props.light && 'is-light',
  ]
})
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-else-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </RouterLink>
  <a v-else-if="href" :href="href" :class="classes">
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-else-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </a>
  <button v-else :class="classes" :disabled="disabled">
    <span v-if="fa" class="icon">
      <i :class="fa"></i>
    </span>
    <span v-else-if="iconify" class="icon">
      <i class="iconify" :data-icon="iconify"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
