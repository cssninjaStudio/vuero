<script setup lang="ts">
import { useHead } from '@vueuse/head'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/data/layouts/card-grid-v1'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VFlexTableWrapper')
useHead({
  title: 'VFlexTableWrapper - VFlexTable - Vuero',
})

type User = (typeof users)[0]

// duplicate user data to grow data array
const data: User[] = []
for (let i = 0; i < 1000; i++) {
  data.push(...users)
}

// this is a sample for custom sort function
const locationSorter: VFlexTableWrapperSortFunction<User> = ({ order, a, b }) => {
  if (order === 'asc') {
    return a.location.localeCompare(b.location)
  } else if (order === 'desc') {
    return b.location.localeCompare(a.location)
  }

  return 0
}

// this is a sample for custom filter function
const userFilter: VFlexTableWrapperFilterFunction<User> = ({ searchTerm, row }) => {
  if (!searchTerm) {
    return true
  }

  // search either in the name or the bio
  return (
    row.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    row.bio.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
}

const columns = {
  name: {
    label: 'Username',
    media: true,
    grow: true,
    searchable: true,
    sortable: true,
    filter: userFilter,
  },
  location: {
    label: 'Location',
    sortable: true,
    searchable: true,
    sort: locationSorter,
  },
  role: 'Role',
} as const
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
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VFlexTable',
          to: '/components/flextable/',
        },
        {
          label: 'VFlexTableWrapper',
          to: '/components/flextable/wrapper/',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Flex Table Wrapper base documentation-->
        <VFlexTableWrapperDocumentation />

        <VFlexTableWrapper :columns="columns" :data="data" class="mt-4">
          <!-- 
            Here we retrieve the internal wrapperState. 
            Note that we can not destructure it 
          -->
          <template #default="wrapperState">
            <!-- We can place any content inside the default slot-->
            <VFlexTableToolbar>
              <template #left>
                <!-- We can bind wrapperState.searchInput to any input -->
                <VField>
                  <VControl icon="feather:search">
                    <input
                      v-model="wrapperState.searchInput"
                      type="text"
                      class="input is-rounded"
                      placeholder="Filter..."
                    />
                  </VControl>
                </VField>
              </template>

              <template #right>
                <!-- We can also bind wrapperState.limit -->
                <VField>
                  <VControl>
                    <div class="select is-rounded">
                      <select v-model="wrapperState.limit">
                        <option :value="1">1 results per page</option>
                        <option :value="10">10 results per page</option>
                        <option :value="15">15 results per page</option>
                        <option :value="25">25 results per page</option>
                        <option :value="50">50 results per page</option>
                      </select>
                    </div>
                  </VControl>
                </VField>
              </template>
            </VFlexTableToolbar>

            <!-- 
              The VFlexTable "data" and "columns" props 
              will be inherited from parent VFlexTableWrapper 
            -->
            <VFlexTable rounded>
              <!-- Custom "name" cell content -->
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <VAvatar
                    size="medium"
                    :picture="row.medias.avatar"
                    :badge="row.medias.badge"
                    :initials="row.initials"
                  />
                  <div>
                    <span class="dark-text" :title="row.name">{{ row.shortname }}</span>
                    <VTextEllipsis width="240px" class="light-text" :title="row.bio">
                      <small>{{ row.bio }}</small>
                    </VTextEllipsis>
                  </div>
                </template>
              </template>
            </VFlexTable>

            <!-- Table Pagination with wrapperState.page binded-->
            <VFlexPagination
              v-model:current-page="wrapperState.page"
              class="mt-6"
              :item-per-page="wrapperState.limit"
              :total-items="wrapperState.total"
              :max-links-displayed="5"
              no-router
            />
          </template>
        </VFlexTableWrapper>

        <!--Flex Table Wrapper props documentation-->
        <VFlexTableWrapperPropsDocumentation class="mt-6" />

        <!--Flex Table Wrapper emits documentation-->
        <VFlexTableWrapperEventsDocumentation class="mt-6" />

        <!--Flex Table Wrapper slots documentation-->
        <VFlexTableWrapperSlotsDocumentation class="mt-6" />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
