<script setup lang="ts">
export interface VPlaceholderPageProps {
  title: string
  subtitle?: string
  larger?: boolean
}

const props = withDefaults(defineProps<VPlaceholderPageProps>(), {
  subtitle: undefined,
})
</script>

<template>
  <div class="page-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <p v-if="props.subtitle" :class="[props.larger && 'is-larger']">
        {{ props.subtitle }}
      </p>
      <slot name="action"></slot>
    </div>
  </div>
</template>
