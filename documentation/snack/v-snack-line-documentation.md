### Line Icons

Vuero provides a `<V-Snack />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-Snack title="Shopping" white icon="lnil lnil-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Shopping" color="primary" icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Support" color="success" white icon="lnil lnil-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Warning" color="warning" white icon="lnil lnil-warning">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Health" color="danger" white icon="lnil lnil-thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-Snack title="Shopping" white icon="lnil lnil-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Shopping" color="primary" icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Support" color="success" white icon="lnil lnil-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Warning" color="warning" white icon="lnil lnil-warning">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Health" color="danger" white icon="lnil lnil-thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</div>

<!--/example-->
