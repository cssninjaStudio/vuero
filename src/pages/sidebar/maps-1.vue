<script setup lang="ts">
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
    :is="(layoutSwitcher.dynamicLayoutComponent as any)"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    close-on-change
    default-sidebar="dashboard"
    no-view-wrapper
  >
    <MapsDashboard>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">
            Maps 1
          </h2>

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
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:grid"
              />
            </a>
          </Toolbar>
        </div>
      </template>
    </MapsDashboard>
  </component>
</template>
