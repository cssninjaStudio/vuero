### Feather solid

Vuero provides a `<V-SnackIcon />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Add the `solid` prop to the component
if you want to show a solid icon. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" color="primary" solid>
    <template #icon>
      <i class="iconify snack-icon" data-icon="feather:smile"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white solid>
    <template #icon>
      <i class="iconify snack-icon" data-icon="feather:life-buoy"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info" solid>
    <template #icon>
      <i class="iconify snack-icon" data-icon="feather:briefcase"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Warning" color="warning" white solid>
    <template #icon>
      <i class="iconify snack-icon" data-icon="feather:alert-octagon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Health" color="danger" white solid>
    <template #icon>
      <i class="iconify snack-icon" data-icon="feather:thermometer"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-SnackIcon title="Shopping" color="primary" solid>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:smile"></i>
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus"></i>
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white solid>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:life-buoy"></i>
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus"></i>
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info" solid>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:briefcase"></i>
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus"></i>
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white solid>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:alert-octagon"></i>
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus"></i>
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white solid>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:thermometer"></i>
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus"></i>
        </template>
    </V-SnackIcon>
</div>

<!--/example-->
