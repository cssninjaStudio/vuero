<script setup lang="ts">
export type LandingLayoutTheme = 'darker' | 'light'

const props = withDefaults(
  defineProps<{
    theme?: LandingLayoutTheme
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
