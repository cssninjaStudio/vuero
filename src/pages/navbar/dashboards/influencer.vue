<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, onMounted } from 'vue'
import { setLayout } from '/@src/state/navbarLayoutState'

type TabId = 'overview' | 'content' | 'brands'
const activeTab = ref<TabId>('overview')

useHead({
  title: 'Dashboards Lifestyle 1 - Navbar - Vuero',
})
onMounted(() => {
  setLayout('navbar-fade')
})
</script>

<template>
  <div class="is-navbar-md">
    <teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg has-top-nav"></div>
    </teleport>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div class="huro-hamburger nav-trigger push-resize">
        <span class="menu-toggle has-chevron">
          <span class="icon-box-toggle">
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
      <LifestyleDashboardV1
        :active-tab="activeTab"
        class="has-navbar-spacing"
      />
    </div>
  </div>
</template>
