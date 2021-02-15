### Feather icons

Vuero provides a `<V-SnackIcon />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" white icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Warning"
    color="warning"
    white
    icon="feather:alert-octagon"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Health" color="danger" white icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-SnackIcon title="Shopping" white icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Warning"
    color="warning"
    white
    icon="feather:alert-octagon"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Health" color="danger" white icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</div>

<!--/example-->
