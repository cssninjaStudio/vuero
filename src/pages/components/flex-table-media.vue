<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsAdvanced } from '/@src/data/documentation/table'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VFlexTable (Media)')

useHead({
  title: 'VFlexTable Media - Components - Vuero',
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
          <VFlexTable rounded>
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
              <div v-for="row in flexRowsAdvanced" :key="row.id" class="flex-table-item">
                <VFlexTableCell :column="{ media: true, grow: true }">
                  <VAvatar size="medium" :picture="row.picture" :badge="row.badge" />
                  <div>
                    <span class="item-name">{{ row.name }}</span>
                    <span class="item-meta">
                      <span>{{ row.position }}</span>
                    </span>
                  </div>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ row.location }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ row.industry }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span
                    class="tag is-rounded"
                    :class="[
                      row.status === 'Active' && 'is-success',
                      row.status === 'Disabled' && '',
                      row.status === 'New' && 'is-info',
                      row.status === 'Suspended' && 'is-orange',
                    ]"
                    >{{ row.status }}</span
                  >
                </VFlexTableCell>
                <VFlexTableCell>
                  <VAvatarStack
                    class="is-pushed-mobile"
                    size="small"
                    :avatars="row.contacts"
                    :limit="3"
                  />
                </VFlexTableCell>
                <VFlexTableCell :column="{ align: 'end' }">
                  <FlexTableDropdown />
                </VFlexTableCell>
              </div>
            </template>
          </VFlexTable>

          <!--Table Pagination-->
          <VFlexPagination
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
