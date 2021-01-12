<template>
  <div>
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarFade />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
