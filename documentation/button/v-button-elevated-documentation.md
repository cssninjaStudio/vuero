### Elevation

`<V-Button />` components can be elevated using box shadows.
Use the `raised` prop to show a box shadow on hover or
use the `elevated` prop to set a permanent box shadow.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button color="primary" raised> Button </V-Button>
    <V-Button color="info" raised> Button </V-Button>
    <V-Button color="success" raised> Button </V-Button>
    <V-Button color="warning" raised> Button </V-Button>
    <V-Button color="danger" elevated> Button </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
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
</V-Buttons>

<!--/example-->
