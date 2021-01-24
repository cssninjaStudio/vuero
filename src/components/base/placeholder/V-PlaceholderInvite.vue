<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  badge: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  title: {
    type: String,
    default: 'Placeholder title',
  },
  subtitle: {
    type: String,
    default: 'Lorem ipsum sit dolor amet is a dummy text used by typographers',
  },
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <V-Avatar size="xl" :picture="image" :badge="badge" />
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <p>{{ props.subtitle }}</p>
    </div>
  </div>
</template>
