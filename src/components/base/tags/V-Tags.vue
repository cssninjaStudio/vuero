<script setup lang="ts">
const props = defineProps<{
  addons?: boolean
}>()
</script>

<template>
  <div class="tags" :class="[props.addons && 'has-addons']">
    <slot></slot>
  </div>
</template>
