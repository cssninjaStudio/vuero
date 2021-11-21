### Customize columns and rows

Columns can be configured whith the `columns` property.
You will be able to hide columns, set virtual ones
(for actions, selections, ...).  
In addition, some behaviors can be set for the cells, like for content overflow,
values formating and cell sizing.  
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

// columns properties allow to customize the entire table
const columns = {
  id: {
    label: 'Identifier',
    inverted: true,
    // we can format the value using simple function
    format: (value) => `N°${value}`,
  },
  company: {
    label: 'Company',
    bold: true,
    grow: true,
  },
  type: 'Type',
  // industry: 'Industry', <- this column is not visible
  status: {
    label: 'Contacts',
    align: 'center',
  },
  contacts: {
    label: 'Contacts',
    align: 'end',
    grow: true,
    // we can format the value using more complete function
    format: (value) => value.map((r) => r.initials).join(', '),
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" />
</template>
```

<!--/code-->
