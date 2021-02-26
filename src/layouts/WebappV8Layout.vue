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
