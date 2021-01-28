<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  message: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum.',
  },
  color: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="message" :class="[color && `is-${color}`]">
    <a class="delete"></a>
    <div class="message-body">{{ message }}</div>
  </div>
</template>
