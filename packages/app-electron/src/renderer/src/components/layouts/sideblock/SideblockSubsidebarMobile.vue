<script setup lang="ts">
import type { SideblockItem } from './sideblock.types'

const props = defineProps<{
  label?: string
  items: SideblockItem[]
}>()
</script>

<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div v-if="props.label" class="sidebar-title">
        <slot>
          <h3>{{ props.label }}</h3>
        </slot>
      </div>

      <ul
        class="submenu has-slimscroll"
      >
        <slot name="links" />
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
