### Line Icons

Vuero inputs are fully compatible with Line Icons.
Use the `iconed` prop on the `<V-Control />` component to show an icon.
You also have to provide an icon type using the `icon` or `iconify` props.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control iconed icon="lnil lnil-briefcase">
      <input type="text" class="input" placeholder="Company" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control iconed icon="lnil lnil-briefcase">
    <input
        type="text"
        class="input"
        placeholder="Company"
      />
  </V-Control>
</V-Field>

<!--/example-->
