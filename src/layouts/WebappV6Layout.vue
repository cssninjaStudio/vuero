<template>
  <div class="webapp-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarClean />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
