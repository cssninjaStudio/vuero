<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: {
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
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <img class="light-image" :src="image" alt="" />
      <img class="dark-image" :src="image" alt="" />
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <p>{{ props.subtitle }}</p>
    </div>
  </div>
</template>
