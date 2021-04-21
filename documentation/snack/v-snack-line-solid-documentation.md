### Line Icons solid

Vuero provides a `<V-Snack />` component than can be used to show
a pill with an icon. Use the available `slots` prop to insert your content.
Add the `solid` prop to the component if you want to show a solid icon.
Check the markup for more details.

<!--code-->

```vue
<template>
  <V-Snack title="Shopping" color="primary" solid icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" solid icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Warning" color="warning" white solid icon="lnil lnil-warning">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-Snack title="Shopping" color="primary" solid icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack title="Business" color="info" solid icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Warning"
    color="warning"
    white
    solid
    icon="lnil lnil-warning"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
  <V-Snack
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-Snack>
</div>

<!--/example-->
