<script setup lang="ts">
import type { NavbarDropdown, NavbarMegamenu } from './navbar.types'

const props = defineProps<{
  label?: string
  items: (NavbarDropdown | NavbarMegamenu)[]
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
        class="submenu has-slimscroll"
      >
        <template v-for="item of props.items">
          <VCollapseLinks v-if="'children' in item" :key="item.id">
            <template #header>
              {{ item.label }}
              <VIcon
                class="rtl-hidden"
                icon="lucide:chevron-right"
              />
              <VIcon
                class="ltr-hidden"
                icon="lucide:chevron-left"
              />
            </template>

            <VLink
              v-for="child of item.children"
              :key="child.to"
              :to="child.to"
              class="is-submenu"
            >
              <span>{{ child.label }}</span>
              <VTag
                v-if="child.tag"
                :label="child.tag"
                color="primary"
                size="tiny"
                outlined
              />
            </VLink>
          </VCollapseLinks>
          <li v-else-if="'to' in item" :key="item.to">
            <VLink :to="item.to">
              {{ item.label }}
            </VLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/mobile-subsidebar';
</style>
