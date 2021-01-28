<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="single-accordion is-exclusive">
    <div v-for="item in items" :key="item.id" class="accordion-item">
      <div class="accordion-header">{{ item.title }}</div>
      <div class="accordion-content">{{ item.content }}</div>
    </div>
  </div>
</template>
