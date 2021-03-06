<script setup lang="ts">
import { activeSidebar } from '/@src/state/activeSidebarState'
</script>

<template>
  <div
    class="main-sidebar is-colored"
    :class="[activeSidebar === 'none' && 'is-curved']"
  >
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <AnimatedLogo light width="38px" height="38px" />
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
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/layout/_sidebar.scss';
</style>
