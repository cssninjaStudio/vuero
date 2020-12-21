<script lang="ts">
import { defineComponent } from 'vue'

const WebappLayout = defineComponent({
  name: 'WebappLayout',
  inheritAttrs: false,
  setup() {
    // WebappLayout - Composition API

    return {}
  },
})

export default WebappLayout
</script>

<template>
  <div class="app-overlay"></div>

  <MobileNavbar />
  <MobileSidebarMain />

  <WebappNavbar />
  <LanguagesPanel />
  <ActivityPanel />

  <slot></slot>
</template>