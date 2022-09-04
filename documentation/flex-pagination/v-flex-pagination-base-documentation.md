### VFlexPagination

Vuero provides a custom pagination component called `<VFlexPagination />`.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch {}
  return 1
})
</script>

<template>
  <VFlexPagination
    :item-per-page="8"
    :total-items="512"
    :current-page="currentPage"
    :max-links-displayed="5"
  />
</template>
```

<!--/code-->
