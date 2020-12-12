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
        <img class="light-image" src="assets/img/logos/logo/logo.svg" alt="" />
        <img
          class="dark-image"
          src="assets/img/logos/logo/logo-light.svg"
          alt=""
        />
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