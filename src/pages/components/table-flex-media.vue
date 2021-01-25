<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'
import { flexRowsAdvanced } from '/@src/composition/state/documentation/components/table'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Table Flex Media - Vuero',
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
        <h1 class="title is-4">Media Table</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'components' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Media Table</span>
            </a>
          </li>
        </ul>
      </nav>

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
            <V-FlexPagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
