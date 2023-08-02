<script setup lang="ts">
export interface VIconProps {
  icon: string
}

const props = defineProps<VIconProps>()

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <span :key="props.icon">
    <i
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="props.icon"
    />
    <i
      v-else
      aria-hidden="true"
      :class="props.icon"
    />
  </span>
</template>
