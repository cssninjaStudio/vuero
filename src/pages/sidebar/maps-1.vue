<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle, sidebarTheme } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Maps 1'
useHead({
  title: 'Maps 1 - Sidebar - Vuero',
})
</script>

<template>
  <SidebarLayout
    :theme="sidebarTheme"
    close-on-change
    default-sidebar="dashboard"
    nowrap
  >
    <MapsDashboard>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">Maps 1</h2>

          <Toolbar class="desktop-toolbar" />
        </div>
      </template>
    </MapsDashboard>
  </SidebarLayout>
</template>
