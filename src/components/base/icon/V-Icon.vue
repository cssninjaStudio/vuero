<script setup lang="ts">
import { computed } from 'vue'

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
    <i
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="icon"
    ></i>
    <i v-else aria-hidden="true" :class="icon"></i>
  </span>
</template>
