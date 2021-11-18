### Fallback avatar

Vuero Avatars automatically fall back to a placeholder
when no valid URL is provided for the `picture` prop.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="no-file.jpg" size="small" />
    <VAvatar picture="no-file.jpg" />
    <VAvatar picture="no-file.jpg" size="medium" />
    <VAvatar picture="no-file.jpg" size="large" />
    <VAvatar picture="no-file.jpg" size="big" />
    <VAvatar picture="no-file.jpg" size="xl" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="no-file.jpg" size="small" />
  <VAvatar picture="no-file.jpg" />
  <VAvatar picture="no-file.jpg" size="medium" />
  <VAvatar picture="no-file.jpg" size="large" />
  <VAvatar picture="no-file.jpg" size="big" />
  <VAvatar picture="no-file.jpg" size="xl" />
</VFlex>

<!--/example-->
