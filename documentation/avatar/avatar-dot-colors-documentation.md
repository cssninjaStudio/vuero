### Dot colors

Avatar dots can have different colors. Set the `dotColor` prop
to `primary`, `info`, `warning`, `danger` or `grey` to change the dot color.
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="medium" dot />
    <VAvatar
      picture="/images/avatars/svg/vuero-1.svg"
      size="medium"
      dot
      dot-color="primary"
    />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" dot dot-color="info" />
    <VAvatar picture="/demo/avatars/21.jpg" size="medium" dot dot-color="warning" />
    <VAvatar picture="/demo/avatars/13.jpg" size="medium" dot dot-color="danger" />
    <VAvatar picture="/demo/avatars/5.jpg" size="medium" dot dot-color="grey" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="medium" dot />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="medium" dot dotColor="primary" />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" dot dotColor="info" />
  <VAvatar picture="/demo/avatars/21.jpg" size="medium" dot dotColor="warning" />
  <VAvatar picture="/demo/avatars/13.jpg" size="medium" dot dotColor="danger" />
  <VAvatar picture="/demo/avatars/5.jpg" size="medium" dot dotColor="grey" />
</VFlex>

<!--/example-->
