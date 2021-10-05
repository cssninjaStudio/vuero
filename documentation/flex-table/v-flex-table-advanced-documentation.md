### Advanced table

Vuero provides a custom table component called `<VFlexTable />`.
It looks like a table but is not an Html5 table.
Instead, it uses the flexbox technology and is fully responsive.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    id: 0,
    username: 'Erik K.',
    position: 'Product Manager',
    picture: '/images/avatars/svg/vuero-1.svg',
    badge: '/images/icons/flags/united-states-of-america.svg',
    location: 'Las Vegas, NV',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ...
    ],
  },
  // and more data ...
]
</script>

<template>
  <div class="flex-table-wrapper mt-4">
    <!--Custom table toolbar-->
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
        <VFlexTableRowMedia :rows="data" />
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
</template>
```

<!--/code-->
