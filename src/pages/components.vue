<script setup lang="ts">
import { sidebarTheme } from '/@src/state/sidebarLayoutState'
</script>

<template>
  <SidebarLayout
    :theme="sidebarTheme"
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
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_demo.scss';
</style>
