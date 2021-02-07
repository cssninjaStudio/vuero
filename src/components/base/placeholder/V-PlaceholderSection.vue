<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Placeholder title',
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  action: {
    type: Boolean,
    default: false,
  },
  cta: {
    type: String,
    default: 'Action Button',
  },
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
      <V-Button v-if="action" color="primary" elevated>{{ cta }}</V-Button>
    </div>
  </div>
</template>
