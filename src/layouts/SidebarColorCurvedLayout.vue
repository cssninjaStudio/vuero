<template>
  <div>
    <div class="app-overlay"></div>
    <!-- <Pageloader /> -->

    <MobileNavbar />
    <MobileSidebarMain />

    <CircularMenu />

    <SidebarColorCurved />
    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
