<script lang="ts">
import { defineComponent } from 'vue'

const SidebarColorLayout = defineComponent({
  name: 'SidebarColorLayout',
  inheritAttrs: false,
  setup() {
    // SidebarColorLayout - Composition API

    return {}
  },
})

export default SidebarColorLayout
</script>

<template>
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
