<template inherit-attrs="false">
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarFade />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
