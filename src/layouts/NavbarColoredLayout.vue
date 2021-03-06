<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarColored />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
