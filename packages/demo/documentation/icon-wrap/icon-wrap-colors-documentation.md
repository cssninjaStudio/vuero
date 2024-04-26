### Colors

Customize `<VIconWrap />` with the `color` and `hasBackground` props.  
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
    <VIconWrap icon="lucide:star" color="primary" />
    <VIconWrap icon="lucide:star" color="secondary" />
    <VIconWrap icon="lucide:star" color="success" />
    <VIconWrap icon="lucide:star" color="link" />
    <VIconWrap icon="lucide:star" color="info" />
    <VIconWrap icon="lucide:star" color="warning" />
    <VIconWrap icon="lucide:star" color="danger" />
    <VIconWrap icon="lucide:star" color="black" />
    <VIconWrap icon="lucide:star" color="white" />
  </VFlex>
  <VFlex
    class="mt-4"
    align-items="flex-end"
    column-gap=".25rem"
  >
    <VIconWrap
      icon="lucide:star"
      has-background
      color="primary"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="secondary"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="success"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="link"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="info"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="warning"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="danger"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="black"
    />
    <VIconWrap
      icon="lucide:star"
      has-background
      color="white"
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
    <VIconWrap icon="lucide:star" color="primary" />
    <VIconWrap icon="lucide:star" color="secondary" />
    <VIconWrap icon="lucide:star" color="success" />
    <VIconWrap icon="lucide:star" color="link" />
    <VIconWrap icon="lucide:star" color="info" />
    <VIconWrap icon="lucide:star" color="warning" />
    <VIconWrap icon="lucide:star" color="danger" />
    <VIconWrap icon="lucide:star" color="black" />
    <VIconWrap icon="lucide:star" color="white" />
  </VFlex>
  <VFlex class="mt-4" align-items="flex-end" column-gap=".25rem">
    <VIconWrap icon="lucide:star" has-background color="primary" />
    <VIconWrap icon="lucide:star" has-background color="secondary" />
    <VIconWrap icon="lucide:star" has-background color="success" />
    <VIconWrap icon="lucide:star" has-background color="link" />
    <VIconWrap icon="lucide:star" has-background color="info" />
    <VIconWrap icon="lucide:star" has-background color="warning" />
    <VIconWrap icon="lucide:star" has-background color="danger" />
    <VIconWrap icon="lucide:star" has-background color="black" />
    <VIconWrap icon="lucide:star" has-background color="white" />
  </VFlex>
</div>

<!--/example-->
