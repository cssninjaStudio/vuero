<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  value: {
    type: Number,
  },
})
</script>

<template>
  <progress
    v-if="value"
    class="progress"
    :class="[size && `is-${size}`, color && `is-${color}`]"
    :value="value"
    max="100"
  >
    {{ value }}%
  </progress>
  <progress
    v-else
    class="progress"
    :class="[size && `is-${size}`, color && `is-${color}`]"
    max="100"
  ></progress>
</template>
