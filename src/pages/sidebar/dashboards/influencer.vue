<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

type TabId = 'overview' | 'content' | 'brands'
const activeTab = ref<TabId>('overview')

useHead({
  title: 'Dashboard Lifestyle 1 - Sidebar - Vuero',
})
</script>

<template>
  <div>
    <teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg"></div>
    </teleport>

    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('home')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Dashboard</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <LifestyleDashboardV1 :active-tab="activeTab" />
    </div>
  </div>
</template>
