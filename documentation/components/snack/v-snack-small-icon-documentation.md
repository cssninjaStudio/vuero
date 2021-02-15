### Small icons

`<V-SnackIcon />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Shopping"
    color="primary"
    size="small"
    icon="feather:smile"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Support"
    color="success"
    white
    size="small"
    icon="feather:life-buoy"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Business"
    color="info"
    size="small"
    icon="feather:briefcase"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Warning"
    color="warning"
    white
    size="small"
    icon="feather:alert-octagon"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Health"
    color="danger"
    white
    size="small"
    icon="feather:thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-SnackIcon title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Warning" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Health" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</div>

<!--/example-->
