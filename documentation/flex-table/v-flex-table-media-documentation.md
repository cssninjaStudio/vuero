### Media columns

Displaying medias in cells can be improved with `media` in addition to `grow`
property on columns.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    id: 0,
    username: 'Erik K.',
    position: 'Product Manager',
    picture: '/images/avatars/svg/vuero-1.svg',
    badge: '/images/icons/flags/united-states-of-america.svg',
    location: 'Las Vegas, NV',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ...
    ],
  },
  // and more data ...
]

const columns = {
  username: {
    label: 'User (media)',
    grow: true,
    media: true,
  },
  position: 'Position',
  status: {
    label: 'Status',
  },
  contacts: {
    label: 'Contacts',
    align: 'end',
    format: (value) => value.map((r: any) => r.initials).join(', '),
  },
}
</script>

<template>
  <VFlexTable rounded :data="data" :columns="columns">
    <template #body-cell="{ row, column, value }">
      <template v-if="column.key === 'username'">
        <VAvatar size="medium" :picture="row.picture" :badge="row.badge" />
        <div>
          <span class="item-name">{{ row?.name }}</span>
          <span class="item-meta">
            <strong>{{ value }}</strong>
          </span>
        </div>
      </template>

      <VAvatarStack
        v-else-if="column.key === 'contacts'"
        class="is-pushed-mobile"
        size="small"
        :avatars="row.contacts"
        :title="value"
        :limit="3"
      />
    </template>
  </VFlexTable>
</template>
```

<!--/code-->
