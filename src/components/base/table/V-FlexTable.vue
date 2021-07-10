<script setup lang="ts">
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
