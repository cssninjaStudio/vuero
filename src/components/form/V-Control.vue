<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  validation: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  iconed: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  iconify: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  textaddon: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="control"
    :class="[
      iconed && 'has-icon',
      loading && 'is-loading',
      expanded && 'is-expanded',
      textaddon && 'is-textarea-addon',
      validation && 'has-validation',
      success && 'has-success',
      error && 'has-error',
    ]"
  >
    <slot></slot>
    <div v-if="iconed" class="form-icon">
      <i v-if="iconify && !icon" class="iconify" :data-icon="iconify"></i>
      <i v-if="icon && !iconify" :class="icon"></i>
    </div>
    <div v-if="validation" class="validation-icon is-success">
      <i class="iconify" data-icon="feather:check"></i>
    </div>
    <div v-if="validation" class="validation-icon is-error">
      <i class="iconify" data-icon="feather:x"></i>
    </div>
  </div>
</template>
