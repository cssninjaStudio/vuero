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
  image: {
    type: String,
    default: undefined,
  },
  badge: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <V-Avatar size="xl" :picture="image" :badge="badge" />
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>
