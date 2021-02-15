<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  cta: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmit(['click'])
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
      <V-Button v-if="cta" color="primary" elevated @click="emit('click')">
        {{ cta }}
      </V-Button>
    </div>
  </div>
</template>
