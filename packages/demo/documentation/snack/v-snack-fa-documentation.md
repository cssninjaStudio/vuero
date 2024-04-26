### Font Awesome

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop to insert
your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    white
    icon="fas fa-shopping-cart"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    icon="fas fa-smile"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    icon="fas fa-life-ring"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    icon="fas fa-building"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    icon="fas fa-radiation"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white icon="fas fa-shopping-cart">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="fas fa-smile">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white icon="fas fa-life-ring">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" icon="fas fa-building">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Warning" color="warning" white icon="fas fa-radiation">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
