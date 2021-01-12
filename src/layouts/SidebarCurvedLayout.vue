<template>
  <div>
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
  </div>
</template>
