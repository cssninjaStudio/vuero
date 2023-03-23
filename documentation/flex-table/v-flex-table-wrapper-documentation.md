### VFlexTableWrapper

You can wrap `<VFlexTable />` using `<VFlexTableWrapper />` to render large
amount of data.
This will also **enable sorting, searching and paginating** through the data.
Instead of providing `data` and `columns` properties to `<VFlexTable />`,
you just have to declare them to `<VFlexTableWrapper />`.

In addition to the base `columns` settings, `searchable`, `sortable` attributes
can be used to enable search and sorting. Of course, custom `sort` and `filter`
function can be used. To easily customize your table, `<VFlexPagination />`, `<VFlexTableToolbar>`
and `<VFlexTableSortColumn>` components can be used
to display controls for pagination and search.

Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/data/layouts/card-grid-v1'

type User = (typeof users)[0]

// duplicate user data to grow the array
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
  <VFlexTableWrapper :columns="columns" :data="data">
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
              <span class="dark-text" :title="row.name">
                {{ row?.shortname }}
              </span>
              <VTextEllipsis width="280px" class="light-text" :title="row.bio">
                <small>{{ row?.bio }}</small>
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
</template>
```

<!--/code-->
