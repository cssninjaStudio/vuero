<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
useHead({
  title: 'Dashboards Charts Apex - WebApp - Vuero',
})
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-apex-charts"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Apex Charts"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Apex Charts</h1>
            </div>

            <Toolbar />
          </div>

          <ApexDashboard class="page-content-inner p-t-30" />
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
