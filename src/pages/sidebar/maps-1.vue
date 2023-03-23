<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { usePanels } from '/@src/stores/panels'

const panels = usePanels()
const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Maps 1')

useHead({
  title: 'Maps 1 - Sidebar - Vuero',
})
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    close-on-change
    default-sidebar="dashboard"
    nowrap
  >
    <MapsDashboard>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">Maps 1</h2>

          <Toolbar class="desktop-toolbar">
            <ToolbarNotification />

            <a
              class="toolbar-link right-panel-trigger"
              aria-label="View activity"
              tabindex="0"
              role="button"
              @keydown.space.prevent="panels.setActive('activity')"
              @click="panels.setActive('activity')"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
            </a>
          </Toolbar>
        </div>
      </template>
    </MapsDashboard>
  </component>
</template>
