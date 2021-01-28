### Line Icons

Vuero provides a `<V-SnackIcon />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-SnackIcon title="Shopping" white>
    <template #icon>
      <i class="lnil lnil-cart snack-icon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Shopping" color="primary">
    <template #icon>
      <i class="lnil lnil-sleep snack-icon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Support" color="success" white>
    <template #icon>
      <i class="lnil lnil-life-ring snack-icon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Business" color="info">
    <template #icon>
      <i class="lnil lnil-apartment snack-icon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Warning" color="warning" white>
    <template #icon>
      <i class="lnil lnil-warning snack-icon"></i>
    </template>
    <template #action>
      <i class="iconify" data-icon="feather:plus"></i>
    </template>
  </V-SnackIcon>
  <V-SnackIcon title="Health" color="danger" white>
    <template #icon>
      <i class="lnil lnil-thermometer snack-icon"></i>
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
    <V-SnackIcon title="Shopping" white>
        <template #icon>
            <i class="lnil lnil-cart snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Shopping" color="primary">
        <template #icon>
            <i class="lnil lnil-sleep snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white>
        <template #icon>
            <i class="lnil lnil-life-ring snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info">
        <template #icon>
            <i class="lnil lnil-apartment snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white>
        <template #icon>
            <i class="lnil lnil-warning snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white>
        <template #icon>
            <i class="lnil lnil-thermometer snack-icon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
</div>

<!--/example-->
