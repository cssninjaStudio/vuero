<script setup lang="ts">
import type { NavsearchItem } from './navsearch.types'

const props = defineProps<{
  items?: NavsearchItem[]
}>()
</script>

<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div v-if="'default' in $slots" class="sidebar-title">
        <slot />
      </div>

      <div v-if="'default' in $slots" class="navbar-divider" />

      <ul
        class="submenu"
        data-simplebar
      >
        <li v-for="item of props.items" :key="item.to">
          <RouterLink :to="item.to">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/mobile-subsidebar';
</style>
