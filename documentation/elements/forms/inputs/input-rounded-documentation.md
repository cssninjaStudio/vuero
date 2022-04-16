### Rounded input

You can easily change the shape of the `VInput` inside the field.
Simply add the `is-rounded` class to the Html `input` element.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" class="is-rounded" placeholder="Username" />
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
      class="is-rounded"
      placeholder="Username"
    />
  </VControl>
</VField>

<!--/example-->
