<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsAdvanced } from '/@src/data/documentation/table'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'VFlexTable (Advanced)'
useHead({
  title: 'VFlexTable Advanced - Components - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
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
          label: 'VFlexTable',
          to: { name: 'components-flex-table' },
        },
        {
          label: 'Advanced',
          to: { name: 'components-flex-table-advanced' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table Advanced-->
        <VFlexTableAdvancedDocumentation />

        <div class="flex-table-wrapper mt-4">
          <div class="flex-table-toolbar">
            <div class="left">
              <VField>
                <VControl icon="feather:search">
                  <input
                    type="text"
                    class="input is-rounded"
                    placeholder="Filter..."
                  />
                </VControl>
              </VField>
            </div>

            <div class="right">
              <VField>
                <VControl>
                  <div class="select is-rounded">
                    <select>
                      <option selected>10 results per page</option>
                      <option>25 results per page</option>
                      <option>50 results per page</option>
                      <option>100 results per page</option>
                    </select>
                  </div>
                </VControl>
              </VField>
            </div>
          </div>

          <!--VFlexTable-->
          <VFlexTable>
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
              <VFlexTableRowMedia :rows="flexRowsAdvanced" />
            </template>
          </VFlexTable>
        </div>

        <!--Table Pagination-->
        <VFlexPagination
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>
    </div>
  </div>
</template>
