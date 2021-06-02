<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'
import { activeSidebar } from '/@src/state/activeSidebarState'

type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

const props = defineProps({
  theme: {
    type: String as PropType<SidebarTheme>,
    default: 'default',
  },
})
const themeClasses = computed(() => {
  switch (props.theme) {
    case 'color':
      return 'is-colored'
    case 'labels':
      return 'has-labels'
    case 'labels-hover':
      return 'has-labels-hover'
    case 'float':
      return activeSidebar.value !== 'none' ? 'is-float is-curved' : 'is-float'
    case 'curved':
      return activeSidebar.value !== 'none' ? 'is-curved' : ''
    case 'color-curved':
      return activeSidebar.value !== 'none'
        ? 'is-colored is-curved'
        : 'is-colored'
    default:
      return ''
  }
})
</script>

<template>
  <div class="main-sidebar" :class="[themeClasses]">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <AnimatedLogo width="36px" />
      </RouterLink>
    </div>
    <div class="sidebar-inner">
      <div class="naver"></div>

      <ul class="icon-menu">
        <!-- Activity -->
        <SidebarItemHome />
        <!-- Layouts -->
        <SidebarItemLayouts />
        <!-- Bounties -->
        <SidebarItemElements />
        <!-- Bugs -->
        <SidebarItemComponents />
        <!-- Messaging -->
        <SidebarItemMessaging />
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <!--Switch Layouts-->
        <SidebarItemLayoutSwitcher />
        <!-- Notifications -->
        <SidebarItemSearch />
        <!-- Wallet -->
        <SidebarItemSettings />
        <!-- Profile -->
        <SidebarItemProfile />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/layout/_sidebar.scss';
</style>
