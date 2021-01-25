<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'
import { flexRowsBasic } from '/@src/composition/state/documentation/components/table'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - V-FlexTable Compact - Vuero',
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
        <h1 class="title is-4">V-FlexTable</h1>
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
              <span>V-FlexTable</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Flex Table Compact-->
          <VFlexTableCompactDocumentation />

          <div class="mt-4">
            <!--V-FlexTabe-->
            <V-FlexTable compact>
              <template #header>
                <div class="flex-table-header">
                  <span>Company</span>
                  <span>Type</span>
                  <span>Industry</span>
                  <span>Status</span>
                  <span>Contacts</span>
                  <span class="cell-end">Actions</span>
                </div>
              </template>
              <template #body>
                <V-FlexTableRowBase :rows="flexRowsBasic" />
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
