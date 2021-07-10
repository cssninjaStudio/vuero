<script setup lang="ts">
const props = defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex-table" :class="[props.compact && 'is-compact']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
