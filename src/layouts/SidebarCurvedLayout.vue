<template inherit-attrs="false">
  <div class="app-overlay"></div>
  <!-- <Pageloader /> -->

  <MobileNavbar />
  <MobileSidebarMain />

  <CircularMenu />

  <SidebarCurved />
  <LanguagesPanel />
  <ActivityPanel />
  <SearchPanel />

  <slot></slot>
</template>
