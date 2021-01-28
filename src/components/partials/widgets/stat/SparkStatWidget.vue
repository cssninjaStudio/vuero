<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="stat-widget spark-tile-widget"
    :class="[straight && 'is-straight']"
  >
    <slot></slot>
  </div>
</template>
