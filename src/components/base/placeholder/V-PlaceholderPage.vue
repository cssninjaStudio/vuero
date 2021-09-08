<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    larger?: boolean
  }>(),
  {
    subtitle: undefined,
  }
)
</script>

<template>
  <div class="page-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ title }}</h3>
      <p v-if="subtitle" :class="[larger && 'is-larger']">{{ subtitle }}</p>
      <slot name="action"></slot>
    </div>
  </div>
</template>
