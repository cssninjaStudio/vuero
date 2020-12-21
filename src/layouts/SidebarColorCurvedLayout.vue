<script lang="ts">
import { defineComponent } from 'vue'

const SidebarColorCurvedLayout = defineComponent({
  name: 'SidebarColorCurvedLayout',
  inheritAttrs: false,
  setup() {
    // SidebarColorCurvedLayout - Composition API

    return {}
  },
})

export default SidebarColorCurvedLayout
</script>

<template>
  <div class="app-overlay"></div>

  <Pageloader />

  <MobileNavbar />
  <MobileSidebarMain />

  <CircularMenu />

  <SidebarColorCurved />
  <LanguagesPanel />
  <ActivityPanel />
  <SearchPanel />

  <slot></slot>
</template>