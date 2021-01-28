### Avatar badge

Huro avatars can have badge images attached to them.
Simply add a 1:1 ratio image URL to the avatar component using the `badge` prop.

<!--code-->

```vue
<template>
  <V-Avatar
    picture="/images/avatars/photos/7.jpg"
    size="small"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    picture="/images/avatars/photos/8.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    picture="/images/avatars/photos/11.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
    size="medium"
  />
  <V-Avatar
    picture="/images/avatars/photos/21.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
    size="large"
  />
  <V-Avatar
    picture="/images/avatars/photos/13.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
    size="big"
  />
  <V-Avatar
    picture="/images/avatars/photos/5.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
    size="xl"
  />
</template>
```

<!--/code-->

<!--example-->

<V-Avatar picture="/images/avatars/photos/7.jpg" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar picture="/images/avatars/photos/8.jpg" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar picture="/images/avatars/photos/11.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="medium" />
<V-Avatar picture="/images/avatars/photos/21.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="large" />
<V-Avatar picture="/images/avatars/photos/13.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="big" />
<V-Avatar picture="/images/avatars/photos/5.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="xl" />

<!--/example-->
