### Disabled

`<V-Button />` components can be disabled and not responsive to pointer events.
Use the `disabled` prop to set a button in a disabled state.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button color="primary" disabled> Button </V-Button>
    <V-Button color="info" disabled> Button </V-Button>
    <V-Button color="success" disabled> Button </V-Button>
    <V-Button color="warning" disabled> Button </V-Button>
    <V-Button color="danger" disabled> Button </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-Button color="primary" disabled>
      Button
  </V-Button>
  <V-Button color="info" disabled>
      Button
  </V-Button>
  <V-Button color="success" disabled>
      Button
  </V-Button>
  <V-Button color="warning" disabled>
      Button
  </V-Button>
  <V-Button color="danger" disabled>
      Button
  </V-Button>
</V-Buttons>

<!--/example-->
