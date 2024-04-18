<script setup lang="ts">
import type { SideblockItem, SideblockItemAction } from './sideblock.types'

const props = defineProps<{
  link: SideblockItem
}>()
</script>

<template>
  <li v-if="props.link.type === 'link'">
    <RouterLink
      :to="props.link.to"
      class="single-link"
    >
      <span class="icon">
        <iconify-icon
          class="iconify"
          :icon="props.link.icon"
        />
      </span>
      {{ props.link.label }}
      <span v-if="props.link.badge !== undefined" class="badge">{{ props.link.badge }}</span>
    </RouterLink>
  </li>
  <component
    :is="props.link.component"
    v-else-if="props.link.type === 'component'"
    :title="props.link.label"
  />
  <li v-else-if="props.link.type === 'action'">
    <a
      role="button"
      tabindex="0"
      class="single-link"
      @click="(props.link as SideblockItemAction).onClick"
      @keydown.enter.prevent="(props.link as SideblockItemAction).onClick"
    >
      <span class="icon">
        <iconify-icon
          class="iconify"
          :icon="props.link.icon"
        />
      </span>
      {{ props.link.label }}
      <span v-if="props.link.badge !== undefined" class="badge">{{ props.link.badge }}</span>
    </a>
  </li>
  <VCollapseLinks v-else-if="props.link.type === 'collapse'">
    <template #header>
      <div class="icon">
        <iconify-icon
          class="iconify"
          :icon="props.link.icon"
        />
      </div>
      {{ props.link.label }}
      <iconify-icon
        aria-hidden="true"
        class="iconify rtl-hidden"
        icon="lucide:chevron-right"
      />
      <iconify-icon
        aria-hidden="true"
        class="iconify ltr-hidden"
        icon="lucide:chevron-left"
      />
    </template>
    <RouterLink
      v-for="child in props.link.children"
      :key="child.to"
      :to="child.to"
      class="is-submenu"
    >
      <i :class="child.icon" />
      <span>{{ child.label }}</span>
    </RouterLink>
  </VCollapseLinks>
  <li
    v-else-if="props.link.type === 'divider'"
    class="divider"
  />
</template>
