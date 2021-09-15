<script setup lang="ts">
export interface VPlaceholderSectionProps {
  title: string
  subtitle?: string
}

const props = withDefaults(defineProps<VPlaceholderSectionProps>(), {
  subtitle: undefined,
})
</script>

<template>
  <div class="section-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <p v-if="props.subtitle">{{ props.subtitle }}</p>
      <slot name="action"></slot>
    </div>
  </div>
</template>
