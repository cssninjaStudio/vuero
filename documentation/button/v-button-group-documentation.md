### Button group

You can easily align `<V-Button />` components and group them together
by wrapping them inside a `<V-Buttons />` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button icon="feather:eye"> View </V-Button>
    <V-Button icon="feather:edit-2"> View </V-Button>
    <V-Button color="primary" icon="fas fa-check" elevated> Approve </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-Button icon="feather:eye">
    View
  </V-Button>
  <V-Button icon="feather:edit-2">
    View
  </V-Button>
  <V-Button color="primary" icon="fas fa-check" elevated>
    Approve
  </V-Button>
</V-Buttons>

<!--/example-->
