<template>
  <div class="webapp-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarCleanFade />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.webapp-layout {
  ::v-deep(.view-wrapper.has-top-nav .is-stuck) {
    top: 100px;
  }
}
</style>
