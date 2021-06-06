<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'UI Widget',
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="widget" :class="[straight && 'is-straight']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
