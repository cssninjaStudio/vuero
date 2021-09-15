### Users datatable

Because Vue 3 is still the new thing, there are a very few datatable plugins
available. Therefore, we wrote a custom Vue wrapper for the [Simple Datatables](https://github.com/fiduswriter/Simple-DataTables)
plugin. The example below shows a users datatable. Check the code for more
details.

<!--code-->

```vue
<script setup lang="ts">
import { optionsUsers } from '/@src/data/v-datatable/users-datatable'
</script>

<template>
  <VSimpleDatatables :options="optionsUsers" />
</template>
```

<!--/code-->
