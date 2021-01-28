<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  help: {
    type: String,
  },
  addons: {
    type: Boolean,
    default: false,
  },
  textaddon: {
    type: Boolean,
    default: false,
  },
  grouped: {
    type: Boolean,
    default: false,
  },
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
})
</script>

<template>
  <div
    class="field"
    :class="[
      addons && 'has-addons',
      textaddon && 'has-textarea-addon',
      grouped && 'is-grouped',
    ]"
  >
    <slot></slot>
    <p v-if="help" class="help"></p>
    <p v-if="validation && success" class="help text-success">
      Looks like we're good
    </p>
    <p v-if="validation && error" class="help text-danger">
      Please enter a valid value
    </p>
  </div>
</template>
