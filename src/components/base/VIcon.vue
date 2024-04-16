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
    <iconify-icon
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :icon="props.icon"
    ></iconify-icon>
    <i
      v-else
      aria-hidden="true"
      :class="props.icon"
    />
  </span>
</template>
