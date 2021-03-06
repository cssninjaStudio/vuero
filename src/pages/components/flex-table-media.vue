<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'
import { flexRowsAdvanced } from '/@src/data/documentation/table'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-FlexTable Media - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
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
        <h1 class="title is-4">V-FlexTable Media</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'V-FlexTable',
            to: { name: 'components-flex-table' },
          },
          {
            label: 'Media',
            to: { name: 'components-flex-table-media' },
          },
        ]"
      />

      <div class="columns">
        <div class="column is-12">
          <!--Flex Table-->
          <VFlexTableMediaDocumentation />

          <div class="mt-4">
            <!--V-FlexTable-->
            <V-FlexTable>
              <template #header>
                <div class="flex-table-header">
                  <span class="is-grow">User</span>
                  <span>Location</span>
                  <span>Industry</span>
                  <span>Status</span>
                  <span>Relations</span>
                  <span class="cell-end">Actions</span>
                </div>
              </template>
              <template #body>
                <V-FlexTableRowMedia :rows="flexRowsAdvanced" />
              </template>
            </V-FlexTable>

            <!--Table Pagination-->
            <V-FlexPagination
              :item-per-page="10"
              :total-items="873"
              :current-page="42"
              :max-links-displayed="5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
