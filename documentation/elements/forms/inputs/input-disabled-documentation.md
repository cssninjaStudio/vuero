### Disabled input

An `VInput` can be shown in a disabled state. To apply that style,
simply add the `disabled` atribute to the target input element.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" placeholder="Username" disabled />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VInput
      type="text"
      placeholder="Username"
      disabled
    />
  </VControl>
</VField>

<!--/example-->
