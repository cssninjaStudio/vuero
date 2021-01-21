<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { activePanel } from '/@src/composition/state/ui/activePanelState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Projects Project - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Project</h1>
      </div>

      <Toolbar />
    </div>

    <ProjectViewV1 class="page-content-inner is-webapp" />
    <!-- <TaskPanel /> -->
  </div>
</template>
