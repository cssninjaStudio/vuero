<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import type { VFlexTableWrapperDataResolver } from '/@src/components/base/table/VFlexTableWrapper.vue'
import sleep from '/@src/utils/sleep'
const isMobileScreen = useMediaQuery('(max-width: 767px)')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Async data (advanced)')
useHead({
  title: 'Async data (advanced) - VFlexTableWrapper - Vuero',
})

// the total data will be set by the fetchData function
const total = ref(0)

// we don't have to set "searchable" parameter
// this will be handled by the fetchData function
const columns = {
  name: {
    label: 'Username',
    media: true,
    grow: true,
    sortable: true,
  },
  location: {
    label: 'Location',
    sortable: true,
  },
  position: {
    label: 'Positions',
    sortable: true,
  },
  actions: {
    label: '',
    align: 'end',
  },
} as const

// this is an example of useXxx function that we can reuse across components.
// it will return writable computeds that works like ref values
// but the values will be sync with the route query params
function useQueryParam() {
  const router = useRouter()
  const route = useRoute()

  // when the params match those value,
  // we don't set their value to the query params
  const defaultSearch = ''
  const defaultSort = ''
  const defaultLimit = 10
  const defaultPage = 1

  const searchTerm = computed({
    get: () => {
      let searchTermQuery: string

      // read "search" from the query params
      if (Array.isArray(route?.query?.search)) {
        searchTermQuery = route.query.search?.[0] ?? defaultSearch
      } else {
        searchTermQuery = route.query.search ?? defaultSearch
      }

      return searchTermQuery
    },
    set(value) {
      // update the route query params with our new "search" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: value === defaultSearch ? undefined : value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const sort = computed({
    get: () => {
      let sortQuery: string

      // read "sort" from the query params
      if (Array.isArray(route?.query?.sort)) {
        sortQuery = route.query.sort?.[0] ?? defaultSort
      } else {
        sortQuery = route.query.sort ?? defaultSort
      }

      return sortQuery
    },
    set(value) {
      // update the route query params with our new "sort" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: value === defaultSort ? undefined : value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const limit = computed({
    get: () => {
      let limitQuery: number

      // read "limit" from the query params
      if (Array.isArray(route?.query?.limit)) {
        limitQuery = parseInt(route.query.limit[0] ?? `${defaultLimit}`)
      } else {
        limitQuery = parseInt(route.query.limit ?? `${defaultLimit}`)
      }

      if (Object.is(limitQuery, NaN)) {
        limitQuery = defaultLimit
      }

      return limitQuery
    },
    set(value) {
      // update the route query params with our new "limit" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: value === defaultLimit ? undefined : value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const page = computed({
    get: () => {
      let pageQuery: number

      if (Array.isArray(route?.query?.page)) {
        pageQuery = parseInt(route.query.page[0] ?? `${defaultPage}`)
      } else {
        pageQuery = parseInt(route.query.page ?? `${defaultPage}`)
      }

      // read "page" from the query params
      if (Object.is(pageQuery, NaN)) {
        pageQuery = defaultPage
      }

      return pageQuery
    },
    set(value) {
      // update the route query params with our new "page" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: value === defaultPage ? undefined : value,
        },
      })
    },
  })

  return reactive({
    searchTerm,
    sort,
    limit,
    page,
  })
}
const queryParam = useQueryParam()

// the fetchData function will be called each time one of the parameter changes
const api = useApi()
const fetchData: VFlexTableWrapperDataResolver = async ({
  searchTerm,
  start,
  limit,
  sort,
  controller,
}) => {
  // searchTerm will contains the value of the wrapperState.searchInput
  // the update will be debounced to avoid to much requests
  const searchQuery = searchTerm ? `&q=${searchTerm}` : ''
  let sortQuery = ''

  // sort will be a string like "name:asc"
  if (sort && sort.includes(':')) {
    let [sortField, sortOrder] = sort.split(':')
    sortQuery = `&_sort=${sortField}&_order=${sortOrder}`
  }

  // async fetch data to our server
  const { data: users, headers } = await api.get(
    `/api/users?_start=${start}&_limit=${limit}${searchQuery}${sortQuery}`,
    {
      // controller is an instance of AbortController,
      // this allow to abort the request when the state
      // is invalidated (before fetchData will be retriggered)
      signal: controller?.signal,
    }
  )

  // wait more time
  await sleep(1000)

  // our backend send us the count in the headers,
  // but we can also get it from another request
  if ('x-total-count' in headers) {
    total.value = parseInt(headers['x-total-count'] ?? '0')
  }

  // the return of the function must be an array
  return users
}

// those data are for the interaction example
const openedRowId = ref<number>()
function onRowClick(row: any) {
  if (openedRowId.value === row.id) {
    openedRowId.value = undefined
  } else {
    openedRowId.value = row.id
  }
}

const incomingCallerId = ref<number>()
function onCallClick(row: any) {
  if (incomingCallerId.value === row.id) {
    incomingCallerId.value = undefined
  } else {
    incomingCallerId.value = row.id
  }
}
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
        {
          label: 'Async data (advanced)',
          to: '/components/flextable/wrapper/async',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table Advanced-->
        <VFlexTableWrapperAdvancedDocumentation />

        <!-- 
          We use v-model to let VFlexTableWrapper update queryParam
        -->
        <VFlexTableWrapper
          v-model:page="queryParam.page"
          v-model:limit="queryParam.limit"
          v-model:searchTerm="queryParam.searchTerm"
          v-model:sort="queryParam.sort"
          :columns="columns"
          :data="fetchData"
          :total="total"
          class="mt-4"
        >
          <!-- 
            Here we retrieve the internal wrapperState. 
            Note that we can not destructure it 
          -->
          <template #default="wrapperState">
            <!--Table Pagination-->
            <VFlexPagination
              v-if="!isMobileScreen"
              v-model:current-page="wrapperState.page"
              :item-per-page="wrapperState.limit"
              :total-items="wrapperState.total"
              :max-links-displayed="2"
              no-router
            >
              <!-- The controls can be updated anywhere in the slot -->
              <template #before-pagination>
                <VFlex class="mr-4">
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
                </VFlex>
              </template>
              <template #before-navigation>
                <VFlex class="mr-4" column-gap="1rem">
                  <VButton
                    :loading="wrapperState.loading"
                    size="medium"
                    rounded
                    @click="wrapperState.fetchData"
                  >
                    Refresh
                  </VButton>
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
                </VFlex>
              </template>
            </VFlexPagination>

            <VFlexTable
              rounded
              clickable
              :no-header="!wrapperState.loading && wrapperState.data.length === 0"
              @row-click="onRowClick"
            >
              <template #body>
                <!--
                  The wrapperState.loading will be update 
                  when the fetchData function is running 
                -->
                <div v-if="wrapperState.loading" class="flex-list-inner">
                  <div
                    v-for="key in wrapperState.limit"
                    :key="key"
                    class="flex-table-item"
                  >
                    <VFlexTableCell :column="{ grow: true, media: true }">
                      <VPlaceloadAvatar size="medium" />

                      <VPlaceloadText
                        :lines="2"
                        width="60%"
                        last-line-width="20%"
                        class="mx-2"
                      />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload width="60%" class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload width="60%" class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ align: 'end' }">
                      <VPlaceload width="45%" class="mx-1" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
                <div v-else-if="wrapperState.data.length === 0" class="flex-list-inner">
                  <VPlaceholderSection
                    title="No matches"
                    subtitle="There is no data that match your query."
                    class="my-6"
                  >
                    <template #image>
                      <img
                        class="light-image"
                        src="/@src/assets/illustrations/placeholders/search-4.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                        alt=""
                      />
                    </template>
                  </VPlaceholderSection>
                </div>
              </template>

              <!-- We can inject content before any rows -->
              <template #body-row-pre="{ row }">
                <template v-if="row.id === incomingCallerId">
                  <VProgress size="tiny" class="m-0 mb-1" />
                </template>
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <VAvatar
                    size="medium"
                    :picture="row.pic"
                    :badge="row.badge"
                    :initials="row.initials"
                  />
                  <div>
                    <span class="dark-text">{{ row.name }}</span>
                    <VTextEllipsis width="280px" mobile-width="180px" class="light-text">
                      {{ row.bio }}
                    </VTextEllipsis>
                  </div>
                </template>
                <template v-if="column.key === 'actions'">
                  <VAction>
                    {{ row.id === openedRowId ? 'Hide details' : 'View details' }}
                  </VAction>
                </template>
              </template>

              <!-- We can also inject content after rows -->
              <template #body-row-post="{ row }">
                <template v-if="row.id === incomingCallerId">
                  <VTags class="mt-2 mb-0">
                    <VTag color="primary" outlined>
                      <i class="iconify is-inline mr-2" data-icon="feather:send"></i>
                      Calling...
                    </VTag>
                  </VTags>
                </template>
                <template v-if="row.id === openedRowId">
                  <div class="is-block p-4 my-2 is-rounded">
                    <div class="dark-text mb-4 is-size-4">{{ row.name }}'s details</div>
                    <VFlex justify-content="space-between">
                      <VFlexItem>
                        <VCard>
                          <pre><code>{{ row }}</code></pre>
                        </VCard>
                      </VFlexItem>
                      <VFlexItem align-self="flex-end">
                        <VFlex flex-direction="column">
                          <VButton
                            v-if="row.id === incomingCallerId"
                            class="mb-2"
                            color="danger"
                            @click="() => onCallClick(row)"
                          >
                            <i
                              class="iconify is-inline mr-2"
                              data-icon="feather:phone-off"
                            ></i>
                            Cancel call
                          </VButton>
                          <VButton
                            color="primary"
                            outlined
                            :disabled="row.id === incomingCallerId"
                            :loading="row.id === incomingCallerId"
                            @click="() => onCallClick(row)"
                          >
                            <i
                              class="iconify is-inline mr-2"
                              data-icon="feather:phone"
                            ></i>
                            Call {{ row.name }}
                          </VButton>
                        </VFlex>
                      </VFlexItem>
                    </VFlex>
                  </div>
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-model:current-page="wrapperState.page"
              class="mt-5"
              :item-per-page="wrapperState.limit"
              :total-items="wrapperState.total"
              :max-links-displayed="2"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
  </div>
</template>
