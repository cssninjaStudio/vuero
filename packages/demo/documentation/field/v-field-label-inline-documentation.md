### Inline label

You can set the `horizontal` attribute of `VField` so the label will be inlined.

<!--code-->

```vue
<template>
  <VField label="Username" horizontal>
    <VControl fullwidth>
      <VInput type="text" placeholder="John" />
    </VControl>
  </VField>
  <VField label="Lastname" horizontal>
    <VControl fullwidth>
      <VInput type="text" placeholder="Doe" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField label="Username" horizontal>
  <VControl fullwidth>
    <VInput type="text" placeholder="John" />
  </VControl>
</VField>
<VField label="Lastname" horizontal>
  <VControl fullwidth>
    <VInput type="text" placeholder="Doe" />
  </VControl>
</VField>

<!--/example-->
