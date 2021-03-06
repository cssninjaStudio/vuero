<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarAlt />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
