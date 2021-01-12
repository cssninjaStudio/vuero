<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="iconify" :data-icon="icon" />
</template>
