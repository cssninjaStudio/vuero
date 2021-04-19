<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  addons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="tags" :class="[props.addons && 'has-addons']">
    <slot></slot>
  </div>
</template>
