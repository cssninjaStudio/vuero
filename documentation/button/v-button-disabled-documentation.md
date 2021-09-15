### Disabled

`<VButton />` components can be disabled and not responsive to pointer events.
Use the `disabled` prop to set a button in a disabled state.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" disabled> Button </VButton>
    <VButton color="info" disabled> Button </VButton>
    <VButton color="success" disabled> Button </VButton>
    <VButton color="warning" disabled> Button </VButton>
    <VButton color="danger" disabled> Button </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" disabled>
      Button
  </VButton>
  <VButton color="info" disabled>
      Button
  </VButton>
  <VButton color="success" disabled>
      Button
  </VButton>
  <VButton color="warning" disabled>
      Button
  </VButton>
  <VButton color="danger" disabled>
      Button
  </VButton>
</VButtons>

<!--/example-->
