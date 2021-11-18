### VAvatar

Vuero `<VAvatar />` components are rounded images used for media
and personal pages. Avatar sizes can be controled with 'size' prop.
Available size prop values `small`, `medium`, `large`, `big` and `xl`.
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" />
    <VAvatar picture="/demo/avatars/21.jpg" size="large" />
    <VAvatar picture="/demo/avatars/13.jpg" size="big" />
    <VAvatar picture="/demo/avatars/5.jpg" size="xl" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" />
  <VAvatar picture="/demo/avatars/21.jpg" size="large" />
  <VAvatar picture="/demo/avatars/13.jpg" size="big" />
  <VAvatar picture="/demo/avatars/5.jpg" size="xl" />
</VFlex>

<!--/example-->
