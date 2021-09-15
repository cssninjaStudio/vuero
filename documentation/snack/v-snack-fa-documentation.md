### Font Awesome

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop to insert
your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack title="Shopping" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Support" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Warning" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Health" color="danger" white icon="fas fa-thermometer-half">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Support" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Warning" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
