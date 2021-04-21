<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
      <slot name="action"></slot>
    </div>
  </div>
</template>
