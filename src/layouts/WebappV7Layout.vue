<template>
  <div class="webapp-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarCleanCenter />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
