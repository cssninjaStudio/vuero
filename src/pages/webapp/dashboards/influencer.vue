<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'overview' | 'content' | 'brands'>('overview')

useHead({
  title: 'Dashboards Lifestyle 1 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <!-- <div class="lifestyle-dashboard-bg"></div> -->
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Dashboard</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <LifestyleDashboardV1
        :active-tab="activeTab"
        class="has-webapp-spacing"
      />
    </div>
  </div>
</template>
