<script lang="ts">
import { defineComponent } from 'vue'

const SidebarColorCurved = defineComponent({
  name: 'SidebarColorCurved',
  components: {},
  setup() {
    // SidebarColorCurved - Composition API

    return {}
  },
})

export default SidebarColorCurved
</script>

<template>
  <div class="main-sidebar is-colored is-curved">
    <div class="sidebar-brand">
      <a href="/">
        <img src="assets/img/logos/logo/logo-light.svg" alt="" />
      </a>
    </div>
    <div class="sidebar-inner">
      <div class="naver"></div>

      <ul class="icon-menu">
        <!-- Activity -->
        {{> sidebar-item-home}}
        <!-- Layouts -->
        {{> sidebar-item-layouts}}
        <!-- Bounties -->
        {{> sidebar-item-elements}}
        <!-- Bugs -->
        {{> sidebar-item-components}}
        <!-- Messaging -->
        {{> sidebar-item-messaging}}
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <!-- Notifications -->
        {{> sidebar-item-search}}
        <!-- Wallet -->
        {{> sidebar-item-settings}}
        <!-- Profile -->
        {{> sidebar-item-profile}}
      </ul>
    </div>
  </div>
</template>