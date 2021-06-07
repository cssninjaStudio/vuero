<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
    default: 'UI Widget',
  },
  icon: {
    type: String,
    default: 'feather:bell',
  },
})
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ title }}</h3>
    </div>
    <div class="right">
      <a class="right-icon has-indicator">
        <i aria-hidden="true" class="iconify" :data-icon="icon"></i>
      </a>
    </div>
  </div>
</template>
