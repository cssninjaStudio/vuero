### Feather Icons

Vuero inputs are fully compatible with Feather Icons. Use the `iconed` prop on the `<V-Control />` component to show an icon. You also have to provide an icon type using the `icon` or `iconify` props.

<!--code-->

```vue {3}
<template>
  <V-Field>
    <V-Control iconed iconify="feather:github">
      <input type="text" class="input is-rounded" placeholder="GitHub URL" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control iconed iconify="feather:github">
    <input
        type="text"
        class="input is-rounded"
        placeholder="GitHub URL"
      />
  </V-Control>
</V-Field>

<!--/example-->
