### Fallback avatar

Vuero Avatars automatically fall back to a placeholder
when no valid URL is provided for the `picture` prop.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar
      placeholder="https://via.placeholder.com/64?text=32x32"
      picture="no-file.jpg"
      size="small"
    />
    <VAvatar
      placeholder="https://via.placeholder.com/80?text=40x40"
      picture="no-file.jpg"
    />
    <VAvatar
      placeholder="https://via.placeholder.com/100?text=50x50"
      picture="no-file.jpg"
      size="medium"
    />
    <VAvatar
      placeholder="https://via.placeholder.com/136?text=68x68"
      picture="no-file.jpg"
      size="large"
    />
    <VAvatar
      placeholder="https://via.placeholder.com/160?text=80x80"
      picture="no-file.jpg"
      size="big"
    />
    <VAvatar
      placeholder="https://via.placeholder.com/200?text=100x100"
      picture="no-file.jpg"
      size="xl"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar placeholder="https://via.placeholder.com/64?text=32x32" picture="no-file.jpg" size="small" />
  <VAvatar placeholder="https://via.placeholder.com/80?text=40x40" picture="no-file.jpg" />
  <VAvatar placeholder="https://via.placeholder.com/100?text=50x50" picture="no-file.jpg" size="medium" />
  <VAvatar placeholder="https://via.placeholder.com/136?text=68x68" picture="no-file.jpg" size="large" />
  <VAvatar placeholder="https://via.placeholder.com/160?text=80x80" picture="no-file.jpg" size="big" />
  <VAvatar placeholder="https://via.placeholder.com/200?text=100x100" picture="no-file.jpg" size="xl" />
</VFlex>

<!--/example-->
