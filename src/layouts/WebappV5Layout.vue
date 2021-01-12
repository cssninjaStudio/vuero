<template>
  <div>
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarAltColored />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
