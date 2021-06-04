<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type MinimalTheme = 'darker' | 'light'

const props = defineProps({
  theme: {
    type: String as PropType<MinimalTheme>,
    default: 'darker',
  },
})
</script>

<template>
  <div class="minimal-wrapper" :class="[props.theme]">
    <slot></slot>
  </div>
</template>
