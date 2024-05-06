<script setup lang="ts">
import type { SubsidebarItem } from './sidebar.types'

const props = defineProps<{
  label?: string
  items: SubsidebarItem[]
}>()
const emits = defineEmits<{
  close: []
}>()
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <slot>
        <h3>{{ props.label }}</h3>
      </slot>
      <div
        class="panel-close"
        tabindex="0"
        role="button"
        @keydown.enter.prevent="emits('close')"
        @click="emits('close')"
      >
        <VIcon
          icon="lucide:x"
        />
      </div>
    </div>
    <div
      class="inner has-slimscroll"
    >
      <ul>
        <template v-for="(item, idx) of props.items">
          <li
            v-if="item.type === 'divider'"
            :key="`divider-${idx}`"
            class="divider"
            :class="[item.label ? 'with-label' : '']"
          >
            <span v-if="item.label" class="divider-label">{{ item.label }}</span>
          </li>
          <li v-else-if="item.type === 'link'" :key="`link-${idx}`">
            <VLink :to="item.to">
              {{ item.label }}
            </VLink>
          </li>
          <VCollapseLinks
            v-else-if="item.type === 'collapse'"
            :key="`collapse-${item.id}`"
            :links="item.children"
          >
            {{ item.label }}
          </VCollapseLinks>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/scss/layout/sidebar-panel';
</style>
