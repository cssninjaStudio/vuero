<script setup lang="ts">
const props = defineProps({
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="widget" :class="[props.straight && 'is-straight']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
