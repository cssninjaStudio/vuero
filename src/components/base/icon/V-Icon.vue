<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span><i class="iconify" :data-icon="icon"></i></span>
</template>
