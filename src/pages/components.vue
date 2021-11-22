<script setup lang="ts">
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
const layoutSwitcher = useLayoutSwitcher()
</script>

<template>
  <SidebarLayout
    :theme="layoutSwitcher.sidebarTheme"
    open-on-mounted
    default-sidebar="components"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <transition name="translate-page-y" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </SidebarLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/mixins';
@import '../scss/pages/demo/demo';
</style>
