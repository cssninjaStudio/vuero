<template>
  <div class="webapp-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbar />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
