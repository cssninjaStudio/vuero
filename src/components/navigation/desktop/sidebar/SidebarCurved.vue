<template>
  <div class="main-sidebar is-curved">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <img class="light-image" src="/images/logos/logo/logo.svg" alt="" />
        <img
          class="dark-image"
          src="/images/logos/logo/logo-light.svg"
          alt=""
        />
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
