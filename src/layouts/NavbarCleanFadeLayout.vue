<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarCleanFade />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.navbar-layout {
  ::v-deep(.view-wrapper.has-top-nav .is-stuck) {
    top: 100px;
  }
}
</style>
