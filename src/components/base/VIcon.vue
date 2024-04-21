<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <iconify-icon
    v-if="isIconify"
    class="iconify"
    :icon="props.icon"
  />
  <i
    v-else
    aria-hidden="true"
    :class="props.icon"
  />
</template>
