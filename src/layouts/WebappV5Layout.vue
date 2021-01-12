<script lang="ts">
import { defineComponent } from 'vue'

const WebappV5Layout = defineComponent({
  name: 'WebappV5Layout',
  inheritAttrs: false,
  setup() {
    // WebappV5Layout - Composition API

    return {}
  },
})

export default WebappV5Layout
</script>

<template>
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarAltColored />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>
