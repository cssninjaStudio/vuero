<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div v-for="item in items" :key="item.id" class="collapse has-chevron">
    <div class="collapse-header">
      <h3>{{ item.title }}</h3>
      <div class="collapse-icon">
        <i class="iconify" data-icon="feather:chevron-down"></i>
      </div>
    </div>
    <div class="collapse-content">
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>
