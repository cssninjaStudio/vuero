### V-CardAdvanced

Vuero ships with a `<V-CardAdvanced />` component that features a card header,
body, and footer, to display any type of content.
Card header and footer have both a left and right `slots` where you
can insert your UI elements/components. You can also control the card radius
using the `radius` prop.

<!--code-->

```vue
<template>
  <V-CardAdvanced>
    <template #header-left>
      <V-Block title="Anna B." subtitle="UX Designer" center>
        <template #icon>
          <V-Avatar
            picture="/demo/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
      </V-Block>
    </template>
    <template #header-right>
      <V-AvatarStack
        :avatars="[
          {
            id: 5,
            picture: '/demo/avatars/12.jpg',
            initials: 'JS',
            color: 'info',
          },
          {
            id: 22,
            picture: '/demo/avatars/22.jpg',
            initials: 'JH',
            color: 'info',
          },
          {
            id: 40,
            picture: '/demo/avatars/40.jpg',
            initials: 'SM',
            color: 'h-purple',
          },
          {
            id: 3,
            picture: '/demo/avatars/5.jpg',
            initials: 'ML',
            color: 'danger',
          },
        ]"
        :limit="3"
        size="small"
      />
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
        praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
        loqui discimus. Et ille ridens.
      </p>
    </template>
    <template #footer-left>
      <div class="tags">
        <V-Tag label="Sales" color="solid" rounded />
        <V-Tag label="Business" color="solid" rounded />
      </div>
    </template>
    <template #footer-right>
      <V-Button color="primary" raised>Action</V-Button>
    </template>
  </V-CardAdvanced>
</template>
```

<!--/code-->
