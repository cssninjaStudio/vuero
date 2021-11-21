### VFlexTable

Vuero provides a custom table component called `<VFlexTable />`.
It looks like a table but is not an Html5 table.
Instead, it uses the flexbox technology and is fully responsive.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
// this is our data
const data = [
  {
    emoji: '🚴‍♂️',
    color: 'yellow',
    name: 'Biking',
    category: 'Sports',
  },
  // and more data ...
]
</script>

<template>
  <VFlexTable :data="data" />
</template>
```

<!--/code-->
