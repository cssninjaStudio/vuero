<template inherit-attrs="false">
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarColored />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
