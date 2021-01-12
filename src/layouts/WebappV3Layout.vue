<template>
  <div>
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarColored />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
