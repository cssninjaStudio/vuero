<script setup lang="ts">
export type MinimalTheme = 'darker' | 'light'

const props = withDefaults(
  defineProps<{
    theme?: MinimalTheme
  }>(),
  {
    theme: 'darker',
  }
)
</script>

<template>
  <div class="minimal-wrapper" :class="[props.theme]">
    <slot></slot>
  </div>
</template>
