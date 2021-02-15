### Feather Icons

Vuero inputs are fully compatible with Feather Icons.
Use the `icon` or `iconify` propson the `<V-Control />`
component to show an icon.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control icon="feather:github">
      <input type="text" class="input is-rounded" placeholder="GitHub URL" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control icon="feather:github">
    <input
        type="text"
        class="input is-rounded"
        placeholder="GitHub URL"
      />
  </V-Control>
</V-Field>

<!--/example-->
