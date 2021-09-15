### Placeload

`<VButton />` components can have a placeloading status.
Use the `placeload` prop on the component to change its state.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton placeload="40px"> Button </VButton>
    <VButton placeload="40px" color="primary"> Button </VButton>
    <VButton placeload="40px" color="info"> Button </VButton>
    <VButton placeload="40px" color="success"> Button </VButton>
    <VButton placeload="40px" color="warning"> Button </VButton>
    <VButton placeload="40px" color="danger"> Button </VButton>
    <VButton placeload="40px" color="white"> Button </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons class="placeload-wrap">
    <VButton placeload="40px"> Button </VButton>
    <VButton placeload="40px" color="primary"> Button </VButton>
    <VButton placeload="40px" color="info"> Button </VButton>
    <VButton placeload="40px" color="success"> Button </VButton>
    <VButton placeload="40px" color="warning"> Button </VButton>
    <VButton placeload="40px" color="danger"> Button </VButton>
    <VButton placeload="40px" color="white"> Button </VButton>
</VButtons>

<!--/example-->
