<script setup lang="ts">
import type { SubsidebarItem } from './sidebar.types'

const props = defineProps<{
  label?: string
  items: SubsidebarItem[]
}>()
</script>

<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <slot>
          <h3>{{ props.label }}</h3>
        </slot>
      </div>

      <ul
        class="submenu"
        data-simplebar
      >
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
          >
            <template #header>
              {{ item.label }}
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

            <VLink
              v-for="child of item.children"
              :key="child.to"
              :to="child.to"
              class="is-submenu"
            >
              <i
                v-if="child.icon"
                aria-hidden="true"
                :class="child.icon"
              />
              <span>{{ child.label }}</span>
              <VTag
                v-if="child.tag"
                :label="child.tag"
                color="primary"
                outlined
                curved
              />
            </VLink>
          </VCollapseLinks>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/mobile-subsidebar';
</style>
