### Font Awesome

Vuero provides a `<V-SnackIcon />` component than can be used
to show a pill with an icon. Use the available `slots` prop to insert
your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Warning" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Health"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-SnackIcon title="Shopping" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Warning" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Health"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</div>

<!--/example-->
