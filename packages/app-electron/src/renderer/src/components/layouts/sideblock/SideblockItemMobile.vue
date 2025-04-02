<script setup lang="ts">
import type { SideblockItem, SideblockItemAction } from './sideblock.types'

const props = defineProps<{
  link: SideblockItem
}>()
</script>

<template>
  <li
    v-if="props.link.type === 'divider'"
    class="divider"
    :class="[props.link.label ? 'with-label' : '']"
  >
    <span v-if="props.link.label" class="divider-label">{{ props.link.label }}</span>
  </li>
  <li v-else-if="props.link.type === 'link'">
    <VLink :to="props.link.to">
      {{ props.link.label }}
    </VLink>
  </li>
  <li v-else-if="props.link.type === 'action'">
    <a
      role="button"
      tabindex="0"
      @click="(props.link as SideblockItemAction).onClick"
      @keydown.enter.prevent="(props.link as SideblockItemAction).onClick"
    >
      {{ props.link.label }}
    </a>
  </li>
  <VCollapseLinks
    v-else-if="props.link.type === 'collapse'"
    :links="props.link.children"
  >
    {{ props.link.label }}
  </VCollapseLinks>
</template>
