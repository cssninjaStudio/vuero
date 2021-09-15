### VGrid

Vuero come with `VGrid` and `VGridItem` which are utility components to compose
**CSS grid layout** with ease. The component `VGrid` will represent
the grid container and can contains anything in its slot.
The component `VGridItem` allow to have finest control how the item is
positioned inside the `VGrid` parent.

> You can find a [complete guide on css-tricks.com](https://css-tricks.com/snippets/css/complete-guide-grid/)

<!--code-->

```vue
<template>
  <VGrid>
    <!-- use any components inside --->
    <VCard></VCard>

    <!-- use VGridItem to have more control --->
    <VGridItem>
      <VAvatar initials="J.">
    </VGridItem>
  </VGrid>
</template>
```

<!--/code-->
