<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <span :key="icon">
    <i v-if="isIconify" class="iconify" :data-icon="icon"></i>
    <i v-else :class="icon"></i>
  </span>
</template>
