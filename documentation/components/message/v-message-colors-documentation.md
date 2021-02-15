### V-Message colors

Vuero provides a `<V-Message />` component for messages that
you can use in your forms, for instance. You can change the message
color by using the `color` prop. Available colors are `primary`,
`success`, `info`, `warning` and `danger`. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-Message color="primary">Lorem ipsum dolor sit amet</V-Message>
  <V-Message color="success">Lorem ipsum dolor sit amet</V-Message>
  <V-Message color="info">Lorem ipsum dolor sit amet</V-Message>
  <V-Message color="warning">Lorem ipsum dolor sit amet</V-Message>
  <V-Message color="danger">Lorem ipsum dolor sit amet</V-Message>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <V-Message color="primary">Lorem ipsum dolor sit amet</V-Message>
    <V-Message color="success">Lorem ipsum dolor sit amet</V-Message>
    <V-Message color="info">Lorem ipsum dolor sit amet</V-Message>
    <V-Message color="warning">Lorem ipsum dolor sit amet</V-Message>
    <V-Message color="danger">Lorem ipsum dolor sit amet</V-Message>
  </div>
</div>

<!--/example-->
