<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <Navbar />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
