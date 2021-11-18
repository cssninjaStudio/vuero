### Colors

Customize `<VIconWrap />` with the `color` and `hasBackground` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VIconWrap icon="feather:star" color="primary" />
    <VIconWrap icon="feather:star" color="secondary" />
    <VIconWrap icon="feather:star" color="success" />
    <VIconWrap icon="feather:star" color="link" />
    <VIconWrap icon="feather:star" color="info" />
    <VIconWrap icon="feather:star" color="warning" />
    <VIconWrap icon="feather:star" color="danger" />
    <VIconWrap icon="feather:star" color="black" />
    <VIconWrap icon="feather:star" color="white" />
  </VFlex>
  <VFlex class="mt-4" align-items="flex-end" column-gap=".25rem">
    <VIconWrap icon="feather:star" has-background color="primary" />
    <VIconWrap icon="feather:star" has-background color="secondary" />
    <VIconWrap icon="feather:star" has-background color="success" />
    <VIconWrap icon="feather:star" has-background color="link" />
    <VIconWrap icon="feather:star" has-background color="info" />
    <VIconWrap icon="feather:star" has-background color="warning" />
    <VIconWrap icon="feather:star" has-background color="danger" />
    <VIconWrap icon="feather:star" has-background color="black" />
    <VIconWrap icon="feather:star" has-background color="white" />
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
    <VIconWrap icon="feather:star" color="primary" />
    <VIconWrap icon="feather:star" color="secondary" />
    <VIconWrap icon="feather:star" color="success" />
    <VIconWrap icon="feather:star" color="link" />
    <VIconWrap icon="feather:star" color="info" />
    <VIconWrap icon="feather:star" color="warning" />
    <VIconWrap icon="feather:star" color="danger" />
    <VIconWrap icon="feather:star" color="black" />
    <VIconWrap icon="feather:star" color="white" />
  </VFlex>
  <VFlex class="mt-4" align-items="flex-end" column-gap=".25rem">
    <VIconWrap icon="feather:star" has-background color="primary" />
    <VIconWrap icon="feather:star" has-background color="secondary" />
    <VIconWrap icon="feather:star" has-background color="success" />
    <VIconWrap icon="feather:star" has-background color="link" />
    <VIconWrap icon="feather:star" has-background color="info" />
    <VIconWrap icon="feather:star" has-background color="warning" />
    <VIconWrap icon="feather:star" has-background color="danger" />
    <VIconWrap icon="feather:star" has-background color="black" />
    <VIconWrap icon="feather:star" has-background color="white" />
  </VFlex>
</div>

<!--/example-->
