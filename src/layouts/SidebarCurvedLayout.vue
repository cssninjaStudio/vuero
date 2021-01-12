<script lang="ts">
import { defineComponent } from 'vue'

const SidebarCurvedLayout = defineComponent({
  name: 'SidebarCurvedLayout',
  inheritAttrs: false,
  setup() {
    // SidebarCurvedLayout - Composition API

    return {}
  },
})

export default SidebarCurvedLayout
</script>

<template>
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
