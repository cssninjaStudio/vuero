### Feather Icons

Vuero inputs are fully compatible with Feather Icons.
Use the `icon` or `iconify` propson the `<VControl />`
component to show an icon.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="feather:github">
      <input type="text" class="input is-rounded" placeholder="GitHub URL" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="feather:github">
    <input
        type="text"
        class="input is-rounded"
        placeholder="GitHub URL"
      />
  </VControl>
</VField>

<!--/example-->
