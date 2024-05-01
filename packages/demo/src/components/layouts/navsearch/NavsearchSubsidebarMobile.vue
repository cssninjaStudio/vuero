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
        class="submenu has-slimscroll"
      >
        <slot name="links">
          <li v-for="item of props.items" :key="item.to">
            <VLink :to="item.to">
              {{ item.label }}
            </VLink>
          </li>
        </slot>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-subsidebar .inner {
  margin-inline-start: 0;
  width: 100%;
}
</style>

<style lang="scss">
@import '/@src/scss/layout/mobile-subsidebar';
</style>
