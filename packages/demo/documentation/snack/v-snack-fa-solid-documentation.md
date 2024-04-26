### Font Awesome solid

Vuero provides a `<VSnack />` component than can be used to show
a pill with an icon. Use the available `slots` prop to insert your content.
Add the `solid` prop to the component if you want to show
a solid icon. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    color="primary"
    solid
    icon="fas fa-smile"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="fas fa-life-ring"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    solid
    icon="fas fa-building"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="fas fa-radiation"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="fas fa-thermometer-half"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" color="primary" solid icon="fas fa-smile">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white solid icon="fas fa-life-ring">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="fas fa-building">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Warning" color="warning" white solid icon="fas fa-radiation">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Health" color="danger" white solid icon="fas fa-thermometer-half">
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
