### Scrollable columns

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

const columns = {
  id: {
    label: 'Identifier',
    inverted: true,
    format: (value) => `N°${value}`,
  },
  company: {
    label: 'Company',
    bold: true,
    grow: true,
  },
  type: 'Type',
  status: {
    label: 'Contacts',
    align: 'center',
  },
  contacts: {
    label: 'Contacts',
    align: 'end',
    scrollX: true,
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" print-objects />
</template>
```

<!--/code-->
