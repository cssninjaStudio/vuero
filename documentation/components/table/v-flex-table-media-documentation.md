### Media table

Vuero provides a custom table component called `<V-FlexTable />`. It looks like a table but is not an Html5 table. Instead, it uses the flexbox technology and is fully responsive. Check the markup for more details about usage.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import { flexRowsMedia } from '/@src/composition/state/documentation/components/table'
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
      <V-FlexTableRowMedia :rows="flexRowsMedia" />
    </template>
  </V-FlexTable>

  <!--Table Pagination-->
  <V-FlexPagination />
</template>
```

<!--/code-->
