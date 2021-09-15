### Elevation

`<VButton />` components can be elevated using box shadows.
Use the `raised` prop to show a box shadow on hover or
use the `elevated` prop to set a permanent box shadow.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" raised> Button </VButton>
    <VButton color="info" raised> Button </VButton>
    <VButton color="success" raised> Button </VButton>
    <VButton color="warning" raised> Button </VButton>
    <VButton color="danger" elevated> Button </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
    <VButton color="primary" raised>
        Button
    </VButton>
    <VButton color="info" raised>
        Button
    </VButton>
    <VButton color="success" raised>
        Button
    </VButton>
    <VButton color="warning" raised>
        Button
    </VButton>
    <VButton color="danger" elevated>
        Button
    </VButton>
</VButtons>

<!--/example-->
