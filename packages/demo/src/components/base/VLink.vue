<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  // @ts-expect-error - props are defined in the template
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
    :href="props.to"
    target="_blank"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    v-slot="{ href, navigate, isActive, isExactActive }"
    v-bind="({
      ...$props,
      custom: true,
    } as any)"
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="[
        isActive && 'router-link-active',
        isExactActive && 'router-link-exact-active',
      ]"
      @click="navigate"
    >
      <slot />
    </a>
  </RouterLink>
</template>
