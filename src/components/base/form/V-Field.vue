<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
  </div>
</template>
