<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'UI Widget'
  },
  straight: {
      type: Boolean,
      default: false
  }
})
</script>

<template>
  <div class="widget" :class="[straight && 'is-straight']">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>