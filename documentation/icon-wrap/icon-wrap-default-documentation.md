### VIconWrap

The Vuero `<VIconWrap />` component let you display icons
in a fancy and colored way.
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap icon="lucide:star" />
    <VIconWrap
      icon="lucide:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap icon="lucide:x" color="danger" />
    <VIconWrap icon="lucide:code" />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="https://media.cssninja.io/content/avatars/13.jpg" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap icon="lucide:star" color="warning" />
    <VIconWrap icon="lucide:code" />
    <VIconWrap icon="lucide:x" color="danger" has-large-icon />
    <VIconWrap
      icon="lucide:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="https://media.cssninja.io/content/avatars/13.jpg" />
  </VFlex>
</div>

<!--/example-->
