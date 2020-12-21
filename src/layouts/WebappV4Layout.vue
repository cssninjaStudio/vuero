<script lang="ts">
import { defineComponent } from 'vue'

const WebappV4Layout = defineComponent({
  name: 'WebappV4Layout',
  inheritAttrs: false,
  setup() {
    // WebappV4Layout - Composition API

    return {}
  },
})

export default WebappV4Layout
</script>

<template>
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbarAlt />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>