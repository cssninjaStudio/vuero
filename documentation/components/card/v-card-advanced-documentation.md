### V-Card Advanced

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
            picture="/images/avatars/photos/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
      </V-Block>
    </template>
    <template #header-right>
      <V-AvatarStack :avatars="userStack2" :limit="3" size="small" />
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
