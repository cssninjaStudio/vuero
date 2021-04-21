### Small icons

`<V-Snack />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <V-Snack title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Shopping" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Support"
    color="success"
    white
    size="small"
    icon="feather:life-buoy"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Warning"
    color="warning"
    white
    size="small"
    icon="feather:alert-octagon"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Health"
    color="danger"
    white
    size="small"
    icon="feather:thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-Snack title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Shopping" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Support" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Warning" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Health" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</div>

<!--/example-->
