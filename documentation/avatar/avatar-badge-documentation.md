### Avatar badge

Vuero avatars can have badge images attached to them.
Simply add a 1:1 ratio image URL to the avatar component using the `badge` prop.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar
      picture="/demo/avatars/7.jpg"
      size="small"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      picture="/images/avatars/svg/vuero-1.svg"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      picture="/demo/avatars/11.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="medium"
    />
    <VAvatar
      picture="/demo/avatars/21.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="large"
    />
    <VAvatar
      picture="/demo/avatars/13.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="big"
    />
    <VAvatar
      picture="/demo/avatars/5.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="xl"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->
<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar picture="/demo/avatars/11.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="medium" />
  <VAvatar picture="/demo/avatars/21.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="large" />
  <VAvatar picture="/demo/avatars/13.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="big" />
  <VAvatar picture="/demo/avatars/5.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="xl" />
</VFlex>

<!--/example-->
