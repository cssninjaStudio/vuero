<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsBasic } from '/@src/data/documentation/table'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'V-FlexTable'
useHead({
  title: 'V-FlexTable - Components - Vuero',
})
</script>

<template>
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
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table-->
        <VFlexTableBaseDocumentation />

        <div class="mt-4">
          <!--V-FlexTabe-->
          <V-FlexTable>
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
</template>
