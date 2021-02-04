<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  imageLight: {
    type: String,
    default: '/images/placeholders/huro-1.svg',
  },
  imageDark: {
    type: String,
    default: '/images/placeholders/huro-1.svg',
  },
  title: {
    type: String,
    default: 'Placeholder title',
  },
  subtitle: {
    type: String,
    default: 'Lorem ipsum sit dolor amet is a dummy text used by typographers',
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
      <img class="light-image" :src="imageLight" alt="" />
      <img class="dark-image" :src="imageDark" alt="" />
      <h3 class="dark-inverted">{{ title }}</h3>
      <p>{{ subtitle }}</p>
      <V-Button v-if="action" color="primary" elevated>{{ cta }}</V-Button>
    </div>
  </div>
</template>
