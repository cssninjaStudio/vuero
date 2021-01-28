<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex-table" :class="[compact && 'is-compact']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
