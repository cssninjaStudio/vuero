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
          <VCollapseLinks
            v-if="'children' in item"
            :key="item.id"
            :links="item.children"
          >
            {{ item.label }}
          </VCollapseLinks>
          <li v-else-if="'to' in item" :key="item.label">
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
