<script lang="ts">
import { defineComponent } from 'vue'

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  inheritAttrs: false,
  setup() {
    // DefaultLayout - Composition API

    return {}
  },
})

export default DefaultLayout
</script>

<template>
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
</template>
