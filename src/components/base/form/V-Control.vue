<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isValid: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  fa: {
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
      (iconify || fa) && 'has-icon',
      loading && 'is-loading',
      expanded && 'is-expanded',
      textaddon && 'is-textarea-addon',
      isValid && 'has-validation has-success',
      hasError && 'has-validation has-error',
    ]"
  >
    <slot></slot>
    <div v-if="iconify || fa" class="form-icon">
      <i v-if="iconify" class="iconify" :data-icon="iconify"></i>
      <i v-else :class="fa"></i>
    </div>
    <div v-if="isValid" class="validation-icon is-success">
      <i class="iconify" data-icon="feather:check"></i>
    </div>
    <div v-else-if="hasError" class="validation-icon is-error">
      <i class="iconify" data-icon="feather:x"></i>
    </div>
  </div>
</template>
