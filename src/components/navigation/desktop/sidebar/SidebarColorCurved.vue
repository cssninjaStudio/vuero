<template>
  <div class="main-sidebar is-colored is-curved">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <img src="/@images/logos/logo/logo-light.svg" alt="" />
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
