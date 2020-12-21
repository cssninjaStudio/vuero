<script lang="ts">
import { defineComponent } from 'vue'

const WebappV3Layout = defineComponent({
  name: 'WebappV3Layout',
  inheritAttrs: false,
  setup() {
    // WebappV3Layout - Composition API

    return {}
  },
})

export default WebappV3Layout
</script>

<template>
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarColored />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>