<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  larger: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['click'])
</script>

<template>
  <div class="page-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle" :class="[larger && 'is-larger']">{{ subtitle }}</p>
      <slot name="action"></slot>
    </div>
  </div>
</template>
