### Button group

You can easily align `<V-Button />` components and group them together
by wrapping them inside a `<div class="buttons"><div>` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <V-Button icon="feather:eye"> View </V-Button>
  <V-Button icon="feather:edit-2"> View </V-Button>
  <V-Button color="primary" icon="fas fa-check" elevated> Approve </V-Button>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <V-Button icon="feather:eye">
    View
  </V-Button>
  <V-Button icon="feather:edit-2">
    View
  </V-Button>
  <V-Button color="primary" icon="fas fa-check" elevated>
    Approve
  </V-Button>
</div>

<!--/example-->
