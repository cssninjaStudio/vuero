<script setup lang="ts">
const panels = usePanels()
const layoutSwitcher = useLayoutSwitcher()
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Maps 1'
})

useHead({
  title: 'Maps 1 - Sidebar - Vuero',
})
</script>

<template>
  <component
    :is="(layoutSwitcher.dynamicLayoutComponent as any)"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    open-on-mounted
    default-sidebar="dashboard"
    size="full"
  >
    <template #page-heading>
      <span />
    </template>

    <MapsDashboard>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">
            Maps 1
          </h2>

          <div class="toolbar desktop-toolbar">
            <ToolbarNotification />

            <a
              class="toolbar-link right-panel-trigger"
              aria-label="View activity"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="panels.setActive('activity')"
              @click="panels.setActive('activity')"
            >
              <VIcon
                icon="lucide:grid"
              />
            </a>
          </div>
        </div>
      </template>
    </MapsDashboard>
  </component>
</template>
