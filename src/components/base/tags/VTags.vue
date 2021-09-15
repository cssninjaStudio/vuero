<script setup lang="ts">
export interface VTagsProps {
  addons?: boolean
}

const props = defineProps<VTagsProps>()
</script>

<template>
  <div class="tags" :class="[props.addons && 'has-addons']">
    <slot></slot>
  </div>
</template>
