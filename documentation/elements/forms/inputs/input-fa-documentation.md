### Font Awesome

Vuero inputs are fully compatible with Font Awesome 5 icons.
Use the `iconed` prop on the `<VControl />` component to show an icon.
You also have to provide an icon type using the `icon` or `iconify` props.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="fab fa-twitter">
      <input type="text" class="input is-rounded" placeholder="Username" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="fab fa-twitter">
    <input
        type="text"
        class="input is-rounded"
        placeholder="Username"
      />
  </VControl>
</VField>

<!--/example-->
