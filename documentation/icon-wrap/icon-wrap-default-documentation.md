### VIconWrap

The Vuero `<VIconWrap />` component let you display icons
in a fancy and colored way.
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:help-circle" color="info" has-background has-large-icon />
    <VIconWrap icon="feather:x" color="danger" />
    <VIconWrap icon="feather:code" />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="/demo/avatars/13.jpg" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" color="warning" />
    <VIconWrap icon="feather:code" />
    <VIconWrap icon="feather:x" color="danger" has-large-icon />
    <VIconWrap
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="/demo/avatars/13.jpg" />
  </VFlex>
</div>

<!--/example-->
