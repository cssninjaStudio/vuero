### Text Datatable

Because Vue 3 is still the new thing, there are a very few datatable plugins
available. Therefore, we wrote a custom Vue wrapper for the [Simple Datatables](https://github.com/fiduswriter/Simple-DataTables)
plugin. The example below shows a text datatable. Check the code for more
details.

<!--code-->

```vue
<script setup lang="ts">
import {
  addItem,
  autoupdate,
  randUpdate,
  onSort,
  options,
} from '/@src/data/v-datatable/simple-datatable'
</script>

<template>
  <V-SimpleDatatables
    :options="options"
    :autoupdate="autoupdate"
    @sort="onSort"
  />
</template>
```

<!--/code-->
