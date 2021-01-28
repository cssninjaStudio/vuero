### V-Message colors

Vuero provides a `<V-Message />` component for messages that
you can use in your forms, for instance. You can change the message
color by using the `color` prop. Available colors are `primary`,
`success`, `info`, `warning` and `danger`. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-Message color="primary" />
  <V-Message color="success" />
  <V-Message color="info" />
  <V-Message color="warning" />
  <V-Message color="danger" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <V-Message color="primary" />
        <V-Message color="success" />
        <V-Message color="info" />
        <V-Message color="warning" />
        <V-Message color="danger" />
    </div>
</div>

<!--/example-->
