<template>
  <div>
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
  </div>
</template>
