### Line Icons solid

Vuero provides a `<V-SnackIcon />` component than can be used to show
a pill with an icon. Use the available `slots` prop to insert your content.
Add the `solid` prop to the component if you want to show a solid icon.
Check the markup for more details.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" color="primary" solid icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" solid icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Warning"
    color="warning"
    white
    solid
    icon="lnil lnil-warning"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <V-SnackIcon title="Shopping" color="primary" solid icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" solid icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Warning"
    color="warning"
    white
    solid
    icon="lnil lnil-warning"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
  <V-SnackIcon
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </V-SnackIcon>
</div>

<!--/example-->
