### Elevation

`<V-Button />` components can be elevated using box shadows.
Use the `raised` prop to show a box shadow on hover or
use the `elevated` prop to set a permanent box shadow.

<!--code-->

```vue
<template>
  <V-Button color="primary" raised> Button </V-Button>
  <V-Button color="info" raised> Button </V-Button>
  <V-Button color="success" raised> Button </V-Button>
  <V-Button color="warning" raised> Button </V-Button>
  <V-Button color="danger" elevated> Button </V-Button>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
    <V-Button color="primary" raised>
        Button
    </V-Button>
    <V-Button color="info" raised>
        Button
    </V-Button>
    <V-Button color="success" raised>
        Button
    </V-Button>
    <V-Button color="warning" raised>
        Button
    </V-Button>
    <V-Button color="danger" elevated>
        Button
    </V-Button>
</div>

<!--/example-->
