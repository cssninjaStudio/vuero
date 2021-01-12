<template>
  <div>
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <WebappNavbarAlt />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
