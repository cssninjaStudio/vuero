### Debugging objects

By default objects are not rendered. If you need to display they content for
debugging purpose, you can add `print-objects` attribute to the `<VFlexTable />`.

<!--code-->

```vue
<script setup lang="ts">
// this is our data
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
  <VFlexTable :data="data" rounded print-objects />
</template>
```

<!--/code-->
