### Size

Customize `<VIconWrap />` with the `size` and `hasLargeIcon` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VIconWrap icon="feather:star" size="small" />
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:star" size="medium" />
    <VIconWrap icon="feather:star" size="large" />
  </VFlex>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VIconWrap icon="feather:star" has-large-icon size="small" />
    <VIconWrap icon="feather:star" has-large-icon />
    <VIconWrap icon="feather:star" has-large-icon size="medium" />
    <VIconWrap icon="feather:star" has-large-icon size="large" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VIconWrap icon="feather:star" size="small" />
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:star" size="medium" />
    <VIconWrap icon="feather:star" size="large" />
  </VFlex>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VIconWrap icon="feather:star" has-large-icon size="small" />
    <VIconWrap icon="feather:star" has-large-icon />
    <VIconWrap icon="feather:star" has-large-icon size="medium" />
    <VIconWrap icon="feather:star" has-large-icon size="large" />
  </VFlex>
</div>

<!--/example-->
