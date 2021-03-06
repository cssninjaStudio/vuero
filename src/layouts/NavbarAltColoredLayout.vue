<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarAltColored />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
