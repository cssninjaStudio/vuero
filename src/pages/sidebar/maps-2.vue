<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle, sidebarTheme } from '/@src/state/sidebarLayoutState'
import { activePanel } from '/@src/state/activePanelState'

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
    <MapsDashboard reversed>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">Maps 2</h2>

          <Toolbar class="desktop-toolbar">
            <ToolbarNotification />

            <a
              class="toolbar-link right-panel-trigger"
              aria-label="View activity"
              @click="activePanel = 'activity'"
            >
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:grid"
              ></i>
            </a>
          </Toolbar>
        </div>
      </template>
    </MapsDashboard>
  </SidebarLayout>
</template>
