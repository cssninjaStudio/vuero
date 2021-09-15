### Rounded input

You can easily change the shape of the input inside the field.
Simply add the `is-rounded` class to the Html `input` element.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <input type="text" class="input is-rounded" placeholder="Username" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <input
        type="text"
        class="input is-rounded"
        placeholder="Username"
      />
  </VControl>
</VField>

<!--/example-->
