<template>
  <div>
    <div class="app-overlay"></div>
    <!-- <Pageloader /> -->

    <MobileNavbar />
    <MobileSidebarMain />

    <CircularMenu />

    <Sidebar />
    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
