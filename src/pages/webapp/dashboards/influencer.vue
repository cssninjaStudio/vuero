<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'overview' | 'content' | 'brands'
const activeTab = ref<TabId>('overview')

useHead({
  title: 'Dashboards Lifestyle 1 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg has-top-nav"></div>
    </teleport>

    <div class="page-content-inner">
      <LifestyleDashboardV1
        :active-tab="activeTab"
        class="has-webapp-spacing"
      />
    </div>
  </div>
</template>
