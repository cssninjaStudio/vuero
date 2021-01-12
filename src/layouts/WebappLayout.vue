<template inherit-attrs="false">
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbar />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
