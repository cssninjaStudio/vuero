### Feather solid

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Add the `solid` prop to the component
if you want to show a solid icon. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack title="Shopping" color="primary" solid icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Support" color="success" white solid icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Warning" color="warning" white solid icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Health" color="danger" white solid icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" color="primary" solid icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="feather:life-buoy"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="feather:alert-octagon"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="feather:thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
