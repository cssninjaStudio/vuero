### Light Colors

`<V-Button />` solid color can have a very light tint of their original color.
Use the `color` prop to set a solid color and
use the `light` modifier prop to make a light colored button.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button color="primary" light> Button </V-Button>
    <V-Button color="info" light> Button </V-Button>
    <V-Button color="success" light> Button </V-Button>
    <V-Button color="warning" light> Button </V-Button>
    <V-Button color="danger" light> Button </V-Button>
    <V-Button light> Button </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-Button color="primary" light> Button </V-Button>
  <V-Button color="info" light> Button </V-Button>
  <V-Button color="success" light> Button </V-Button>
  <V-Button color="warning" light> Button </V-Button>
  <V-Button color="danger" light> Button </V-Button>
  <V-Button light> Button </V-Button>
</V-Buttons>

<!--/example-->
