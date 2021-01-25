### V-FlexTable

Vuero provides a custom table component called `<V-FlexTable />`. It looks like a table but is not an Html5 table. Instead, it uses the flexbox technology and is fully responsive. Check the markup for more details about usage.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import { flexRowsBasic } from '/@src/composition/state/documentation/components/table'
</script>

<template>
  <!--V-FlexTable-->
  <V-FlexTable>
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
      <V-FlexTableRowBase :rows="flexRowsBasic" />
    </template>
  </V-FlexTable>

  <!--Table Pagination-->
  <V-FlexPagination />
</template>
```

<!--/code-->
