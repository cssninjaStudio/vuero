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
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="fas fa-life-ring"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    solid
    icon="fas fa-building"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="fas fa-radiation"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="fas fa-thermometer-half"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" color="primary" solid icon="fas fa-smile">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Support" color="success" white solid icon="fas fa-life-ring">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="fas fa-building">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Warning" color="warning" white solid icon="fas fa-radiation">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Health" color="danger" white solid icon="fas fa-thermometer-half">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
</div>

<!--/example-->
