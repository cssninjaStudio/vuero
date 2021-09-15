### Squared avatar

Avatars can have a square shape instead of a circle shape
by adding the `squared` prop to the avatar component.
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" squared />
    <VAvatar picture="/demo/avatars/8.jpg" squared />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" squared />
    <VAvatar picture="/demo/avatars/21.jpg" size="large" squared />
    <VAvatar picture="/demo/avatars/13.jpg" size="big" squared />
    <VAvatar picture="/demo/avatars/5.jpg" size="xl" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex alignItems="flex-end" columnGap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" squared />
  <VAvatar picture="/demo/avatars/8.jpg" squared />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" squared />
  <VAvatar picture="/demo/avatars/21.jpg" size="large" squared />
  <VAvatar picture="/demo/avatars/13.jpg" size="big" squared />
  <VAvatar picture="/demo/avatars/5.jpg" size="xl" squared />
</VFlex>

<!--/example-->
