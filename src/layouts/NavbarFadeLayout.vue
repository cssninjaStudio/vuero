<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarFade />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
