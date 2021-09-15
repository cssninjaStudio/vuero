### Light Colors

`<VButton />` solid color can have a very light tint of their original color.
Use the `color` prop to set a solid color and
use the `light` modifier prop to make a light colored button.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" light> Button </VButton>
    <VButton color="info" light> Button </VButton>
    <VButton color="success" light> Button </VButton>
    <VButton color="warning" light> Button </VButton>
    <VButton color="danger" light> Button </VButton>
    <VButton light> Button </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" light> Button </VButton>
  <VButton color="info" light> Button </VButton>
  <VButton color="success" light> Button </VButton>
  <VButton color="warning" light> Button </VButton>
  <VButton color="danger" light> Button </VButton>
  <VButton light> Button </VButton>
</VButtons>

<!--/example-->
