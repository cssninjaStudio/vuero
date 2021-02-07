### Font Awesome

Vuero inputs are fully compatible with Font Awesome 5 icons.
Use the `iconed` prop on the `<V-Control />` component to show an icon.
You also have to provide an icon type using the `icon` or `iconify` props.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control icon="fab fa-twitter">
      <input type="text" class="input is-rounded" placeholder="Username" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control icon="fab fa-twitter">
    <input
        type="text"
        class="input is-rounded"
        placeholder="Username"
      />
  </V-Control>
</V-Field>

<!--/example-->
