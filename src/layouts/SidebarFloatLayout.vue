<template>
  <div class="default-layout">
    <div class="app-overlay"></div>
    <!-- <Pageloader /> -->

    <MobileNavbar />
    <MobileSidebarMain />

    <CircularMenu />

    <SidebarFloat />
    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
