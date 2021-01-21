<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/composition/state/ui/mobileSidebarState'
</script>

<template>
  <div
    :class="[isMobileSidebarOpen && 'is-active']"
    class="mobile-main-sidebar"
  >
    <div class="inner">
      <ul class="icon-side-menu">
        <li>
          <RouterLink
            id="home-sidebar-menu-mobile"
            :to="{ name: 'admin-dashboards' }"
          >
            <i class="iconify" data-icon="feather:activity"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink id="layouts-sidebar-menu-mobile" :to="{ name: 'webapp' }">
            <i class="iconify" data-icon="feather:grid"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="elements-sidebar-menu-mobile"
            :to="{ name: 'elements' }"
          >
            <i class="iconify" data-icon="feather:box"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="components-sidebar-menu-mobile"
            :to="{ name: 'components' }"
          >
            <i class="iconify" data-icon="feather:cpu"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink id="open-messages-mobile" :to="{ name: 'messaging-v2' }">
            <i class="iconify" data-icon="feather:message-circle"></i>
          </RouterLink>
        </li>
      </ul>

      <ul class="bottom-icon-side-menu">
        <li>
          <a href="#">
            <i class="iconify" data-icon="feather:search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/layout/_sidebar.scss';
@import '../../../../assets/scss/layout/_sidebar-mobile.scss';
</style>
