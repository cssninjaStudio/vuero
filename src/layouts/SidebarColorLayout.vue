<template inherit-attrs="false">
  <div class="app-overlay"></div>
  <!-- <Pageloader /> -->

  <MobileNavbar />
  <MobileSidebarMain />

  <CircularMenu />

  <SidebarColor />
  <LanguagesPanel />
  <ActivityPanel />
  <SearchPanel />

  <slot></slot>
</template>
