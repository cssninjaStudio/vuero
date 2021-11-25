<script setup lang="ts">
const props = defineProps<{
  straight?: boolean
}>()
</script>

<template>
  <div class="stat-widget spark-tile-widget" :class="[props.straight && 'is-straight']">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.stat-widget {
  &.spark-tile-widget {
    padding: 0;
  }
}
</style>
