<script setup lang="ts">
export interface VFlexTableProps {
  compact?: boolean
}

const props = defineProps<VFlexTableProps>()
</script>

<template>
  <div class="flex-table" :class="[props.compact && 'is-compact']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
