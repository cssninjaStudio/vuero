### VMessage colors

Vuero provides a `<VMessage />` component for messages that
you can use in your forms, for instance. You can change the message
color by using the `color` prop. Available colors are `primary`,
`success`, `info`, `warning` and `danger`. Check the markup for more details.

<!--code-->

```vue
<template>
  <VMessage color="primary">Lorem ipsum dolor sit amet</VMessage>
  <VMessage color="success">Lorem ipsum dolor sit amet</VMessage>
  <VMessage color="info">Lorem ipsum dolor sit amet</VMessage>
  <VMessage color="warning">Lorem ipsum dolor sit amet</VMessage>
  <VMessage color="danger">Lorem ipsum dolor sit amet</VMessage>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <VMessage color="primary">Lorem ipsum dolor sit amet</VMessage>
    <VMessage color="success">Lorem ipsum dolor sit amet</VMessage>
    <VMessage color="info">Lorem ipsum dolor sit amet</VMessage>
    <VMessage color="warning">Lorem ipsum dolor sit amet</VMessage>
    <VMessage color="danger">Lorem ipsum dolor sit amet</VMessage>
  </div>
</div>

<!--/example-->
