<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  size: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="v-loader-wrapper" :class="[active && 'is-active']">
    <div class="loader is-loading" :class="[size && `is-${size}`]"></div>
  </div>
</template>
