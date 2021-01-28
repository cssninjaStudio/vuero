<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Widget Title',
  },
  value: {
    type: String,
    default: '8,641.26',
  },
  text: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria.',
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="stat-widget flex-stat-widget is-straight">
    <div class="chart-media">
      <div class="meta">
        <h4 class="dark-inverted">{{ title }}</h4>
        <span class="is-dark-primary">${{ value }}</span>
        <p>
          {{ text }}
        </p>
      </div>
      <div class="chart-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
