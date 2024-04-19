<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    v-slot="{ href, navigate }"
    v-bind="({
      ...$props,
      custom: true,
    } as any)"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
    >
      <slot />
    </a>
  </RouterLink>
</template>
