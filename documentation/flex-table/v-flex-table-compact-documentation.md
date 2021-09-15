### VFlexTable Compact

Vuero provides a custom table component called `<VFlexTable />`.
It looks like a table but is not an Html5 table.
Instead, it uses the flexbox technology and is fully responsive.
Make the table compact by using the `compact` prop.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    id: 0,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]
</script>

<template>
  <!--VFlexTable-->
  <VFlexTable compact>
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
      <VFlexTableRowBase :rows="flexRowsBasic" />
    </template>
  </VFlexTable>

  <!--Table Pagination-->
  <VFlexPagination
    :item-per-page="10"
    :total-items="873"
    :current-page="42"
    :max-links-displayed="5"
  />
</template>
```

<!--/code-->
