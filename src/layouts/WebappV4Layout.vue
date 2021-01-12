<template inherit-attrs="false">
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarAlt />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
