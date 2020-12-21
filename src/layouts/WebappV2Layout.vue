<script lang="ts">
import { defineComponent } from 'vue'

const WebappV2Layout = defineComponent({
  name: 'WebappV2Layout',
  inheritAttrs: false,
  setup() {
    // WebappV2Layout - Composition API

    return {}
  },
})

export default WebappV2Layout
</script>

<template>
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarFade />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>