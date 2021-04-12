### Media table

Vuero provides a custom table component called `<V-FlexTable />`.
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
    picture: '/demo/avatars/8.jpg',
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
      <V-FlexTableRowMedia :rows="data" />
    </template>
  </V-FlexTable>

  <!--Table Pagination-->
  <V-FlexPagination
    :item-per-page="10"
    :total-items="873"
    :current-page="42"
    :max-links-displayed="5"
  />
</template>
```

<!--/code-->
