### Use render functions with VFlexTable (advanced)

Sometimes render functions is the best way to make perfomant interfaces,
especially when working with large amount of data.
`<VFlexTable />` is designed to give you control over rows (with `renderRow`)
and columns (with `renderHeader`),
but be carefull when using render functions.  
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

// this is the how rows and columns are rendered
const columns = {
  company: {
    label: 'Company',
    bold: true,
  },
  type: 'Type',
  industry: 'Industry',
  status: {
    label: 'Status',
    // we can use custom render function for each rows
    renderRow: (row: any) =>
      h(
        VTag,
        {
          rounded: true,
          color:
            row.status === 'Active'
              ? 'success'
              : row.status === 'New'
              ? 'info'
              : row.status === 'Suspended'
              ? 'orange'
              : undefined,
        },
        // this notation is to render content in the default slot
        {
          default() {
            return `${row.status}`
          },
        }
      ),
  },
  contacts: {
    // we can use custom render function for each columns too
    renderHeader: () =>
      h('span', {}, [
        h(
          RouterLink,
          { to: '/' },
          {
            default() {
              const icon = h('span', {
                class: 'iconify is-inline ml-2',
                'data-icon': 'prime:sort-alt',
              })

              return ['Contacts', icon]
            },
          }
        ),
      ]),
    renderRow: (row: any) =>
      // We can render custom components and set props
      h(VAvatarStack, {
        class: 'is-pushed-mobile',
        size: 'small',
        avatars: row.contacts,
        limit: 3,
      }),
  },
  actions: {
    label: 'Actions',
    align: 'end',
    renderRow: (row: any) =>
      h(FlexTableDropdown, {
        // We can catch all events from vue
        onView: () => {
          console.log('viewing', row)
        },
        onProjects: () => {
          console.log('projects', row)
        },
        onSchedule: () => {
          console.log('schedule', row)
        },
        onRemove: () => {
          console.log('remove', row)
        },
      }),
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" />
</template>
```

<!--/code-->
