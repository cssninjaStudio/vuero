### Size

Customize `<VIconWrap />` with the `size` and `hasLargeIcon` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex
    flex-wrap="wrap"
    align-items="flex-end"
    row-gap=".5rem"
    column-gap=".25rem"
  >
    <VIconWrap icon="lucide:star" size="small" />
    <VIconWrap icon="lucide:star" />
    <VIconWrap icon="lucide:star" size="medium" />
    <VIconWrap icon="lucide:star" size="large" />
  </VFlex>
  <VFlex
    flex-wrap="wrap"
    align-items="flex-end"
    row-gap=".5rem"
    column-gap=".25rem"
  >
    <VIconWrap
      icon="lucide:star"
      has-large-icon
      size="small"
    />
    <VIconWrap icon="lucide:star" has-large-icon />
    <VIconWrap
      icon="lucide:star"
      has-large-icon
      size="medium"
    />
    <VIconWrap
      icon="lucide:star"
      has-large-icon
      size="large"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex
  flex-wrap="wrap"
  align-items="flex-end"
  row-gap=".5rem"
  column-gap=".25rem"
>
    <VIconWrap icon="lucide:star" size="small" />
    <VIconWrap icon="lucide:star" />
    <VIconWrap icon="lucide:star" size="medium" />
    <VIconWrap icon="lucide:star" size="large" />
  </VFlex>
  <VFlex
  flex-wrap="wrap"
  align-items="flex-end"
  row-gap=".5rem"
  column-gap=".25rem"
>
    <VIconWrap icon="lucide:star" has-large-icon size="small" />
    <VIconWrap icon="lucide:star" has-large-icon />
    <VIconWrap icon="lucide:star" has-large-icon size="medium" />
    <VIconWrap icon="lucide:star" has-large-icon size="large" />
  </VFlex>
</div>

<!--/example-->
