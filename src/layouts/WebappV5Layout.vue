<template inherit-attrs="false">
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarAltColored />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
