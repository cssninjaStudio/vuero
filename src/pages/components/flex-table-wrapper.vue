<script setup lang="ts">
import { h, ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute, useRouter } from 'vue-router'

import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import VFlexTableSortColumn from '/@src/components/base/table/VFlexTableSortColumn.vue'
import sleep from '/@src/utils/sleep'

const router = useRouter()
const route = useRoute()
const viewWrapper = useViewWrapper()
const api = useApi()

const openRow = ref<number>()
const pendingInvitationId = ref<number>()
const total = ref(0)
viewWrapper.setPageTitle('VFlexTableWrapper')

const defaultLimit = 10
const defaultPage = 1

const columns = {
  name: {
    label: 'Username',
    media: true,
    grow: true,
    renderHeader() {
      return h(
        'span',
        {},
        h(VFlexTableSortColumn, {
          label: 'Name',
          id: 'name',
        })
      )
    },
  },
  location: {
    renderHeader() {
      return h(
        'span',
        {},
        h(VFlexTableSortColumn, {
          label: 'Location',
          id: 'location',
        })
      )
    },
  },
  position: {
    renderHeader() {
      return h(
        'span',
        {},
        h(VFlexTableSortColumn, {
          label: 'Positions',
          id: 'positions',
        })
      )
    },
  },
  actions: {
    label: '',
    align: 'end',
  },
} as const

const limit = computed({
  get: () => {
    let limitQuery: number

    if (Array.isArray(route?.query?.limit)) {
      limitQuery = parseInt(route.query.limit[0] ?? `${defaultLimit}`)
    } else {
      limitQuery = parseInt(route.query.limit ?? `${defaultLimit}`)
    }

    if (limitQuery === NaN) {
      limitQuery = defaultLimit
    }

    return limitQuery
  },
  set(value) {
    router.push({
      query: {
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

    if (pageQuery === NaN) {
      pageQuery = defaultPage
    }

    return pageQuery
  },
  set(value) {
    router.push({
      query: {
        limit: limit.value === defaultLimit ? undefined : limit.value,
        page: value === defaultPage ? undefined : value,
      },
    })
  },
})

async function fetchData({ searchTerm, start, limit, controller }: any) {
  await sleep(1000)
  const searchQuery = searchTerm ? `&q=${searchTerm}` : ''

  const { data: users, headers } = await api.get(
    `/api/users?_start=${start}&_limit=${limit}${searchQuery}`,
    {
      signal: controller.signal,
    }
  )

  if ('x-total-count' in headers) {
    total.value = parseInt(headers['x-total-count'])
  }

  return users
}

function onRowClick(row: any) {
  if (openRow.value === row.id) {
    openRow.value = undefined
  } else {
    openRow.value = row.id
  }
}

function onInvitationClick(row: any) {
  if (pendingInvitationId.value === row.id) {
    pendingInvitationId.value = undefined
  } else {
    pendingInvitationId.value = row.id
  }
}

useHead({
  title: 'VFlexTableWrapper - Components - Vuero',
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
          to: { name: 'components-flex-table-wrapper' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table Advanced-->
        <VFlexTableAdvancedDocumentation />

        <VFlexTableWrapper
          :page="page"
          :columns="columns"
          :data="fetchData"
          :total="total"
          :limit="limit"
          class="mt-4"
        >
          <template #default="{ loading, searchInput }">
            <div class="flex-table-toolbar">
              <div class="left">
                <VField>
                  <VControl icon="feather:search">
                    <input
                      v-model="searchInput.value"
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
                      <select v-model="limit">
                        <option :value="1">1 results per page</option>
                        <option :value="10">10 results per page</option>
                        <option :value="15">15 results per page</option>
                        <option :value="25">25 results per page</option>
                        <option :value="50">50 results per page</option>
                      </select>
                    </div>
                  </VControl>
                </VField>
              </div>
            </div>

            <VFlexTable rounded clickable @row-click="onRowClick">
              <template #body>
                <div v-if="loading.value" class="flex-list-inner">
                  <!--Table item placeload-->
                  <div v-for="key in limit" :key="key" class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
                      <VPlaceloadAvatar size="medium" />

                      <VPlaceloadText
                        :lines="2"
                        width="60%"
                        last-line-width="20%"
                        class="mx-2"
                      />
                    </div>
                    <div class="flex-table-cell">
                      <VPlaceload width="60%" class="mx-1" />
                    </div>
                    <div class="flex-table-cell">
                      <VPlaceload width="60%" class="mx-1" />
                    </div>
                    <div class="flex-table-cell cell-end">
                      <VPlaceload width="45%" class="mx-1" />
                    </div>
                  </div>
                </div>
              </template>
              <template #body-row-pre="{ row }">
                <template v-if="row.id === pendingInvitationId">
                  <VProgress size="tiny" class="m-0 mb-1" />
                </template>
              </template>
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
                    <VTextEllipsis width="280px" class="light-text">
                      {{ row.bio }}
                    </VTextEllipsis>
                  </div>
                </template>
                <template v-if="column.key === 'actions'">
                  <VAction>
                    {{ row.id === openRow ? 'Hide details' : 'View details' }}
                  </VAction>
                </template>
              </template>
              <template #body-row-post="{ row }">
                <template v-if="row.id === openRow && row.id === pendingInvitationId">
                  <VTags class="mt-2 mb-0">
                    <VTag color="primary" outlined>
                      <i class="iconify is-inline mr-2" data-icon="feather:send"></i>
                      Invitation sent
                    </VTag>
                  </VTags>
                </template>
                <template v-if="row.id === openRow">
                  <div
                    class="is-block p-4 my-2 is-rounded"
                    style="background-color: var(--background-grey)"
                  >
                    <div class="dark-text mb-4 is-size-4">{{ row.name }}'s details</div>
                    <VFlex justify-content="space-between">
                      <VFlexItem>
                        <pre><code>{{ row }}</code></pre>
                      </VFlexItem>
                      <VFlexItem align-self="flex-end">
                        <VFlex flex-direction="column">
                          <VButton
                            v-if="row.id === pendingInvitationId"
                            class="mb-2"
                            outlined
                            @click="() => onInvitationClick(row)"
                          >
                            <i class="iconify is-inline mr-2" data-icon="feather:x"></i>
                            Cancel request
                          </VButton>
                          <VButton
                            color="primary"
                            outlined
                            :disabled="row.id === pendingInvitationId"
                            :loading="row.id === pendingInvitationId"
                            @click="() => onInvitationClick(row)"
                          >
                            <i
                              class="iconify is-inline mr-2"
                              data-icon="feather:send"
                            ></i>
                            Send invitation
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
              class="mt-6"
              :item-per-page="limit"
              :total-items="total"
              :current-page="page"
              :max-links-displayed="2"
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
  </div>
</template>
