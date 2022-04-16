### Feather Icons

Vuero `VInput` are fully compatible with any icons from [icones.js](https://icones.js.org/).
Use the `icon` or `iconify` propson the `<VControl />`
component to show an icon.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="feather:github">
      <VInput type="text" class="is-rounded" placeholder="GitHub URL" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="feather:github">
    <VInput
      type="text"
      class="is-rounded"
      placeholder="GitHub URL"
    />
  </VControl>
</VField>

<!--/example-->
