### VFlex

Vuero come with `VFlex` and `VFlexItem` which are utility components to compose
**CSS flexbox layout** with ease. The component `VFlex` will represent
the flex container and can contains anything in its slot.
The component `VFlexItem` allow to have finest control how the item is
positioned inside the `VFlex` parent.

> You can find a [complete guide on css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<!--code-->

```vue
<template>
  <VFlex>
    <!-- use any components inside --->
    <VCard></VCard>

    <!-- use VFlexItem to have more control --->
    <VFlexItem>
      <VAvatar initials="J." />
    </VFlexItem>
  </VFlex>
</template>
```

<!--/code-->
