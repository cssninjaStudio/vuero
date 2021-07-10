<script setup lang="ts">
const props = defineProps({
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="stat-widget spark-tile-widget"
    :class="[props.straight && 'is-straight']"
  >
    <slot></slot>
  </div>
</template>
