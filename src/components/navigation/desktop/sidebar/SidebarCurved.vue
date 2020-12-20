<script lang="ts">
import { defineComponent } from 'vue'

const SidebarCurved = defineComponent({
  name: 'SidebarCurved',
  components: {},
  setup() {
    // SidebarCurved - Composition API

    return {}
  },
})

export default SidebarCurved
</script>

<template>
  <div class="main-sidebar is-curved">
    <div class="sidebar-brand">
      <a href="/">
        <img
          class="light-image"
          src="/src/assets/images/logos/logo/logo.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/src/assets/images/logos/logo/logo-light.svg"
          alt=""
        />
      </a>
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