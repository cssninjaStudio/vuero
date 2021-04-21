### V-Snack

Vuero provides a `<V-Snack />` component than can be used to show a
pill with an image. Use the `image` prop to insert
an image inside the component.

<!--code-->

```vue
<template>
  <V-Snack title="Support" image="/demo/photos/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-Snack>
  <V-Snack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-Snack>
  <V-Snack title="Corporate" image="/demo/avatars/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-Snack>
  <V-Snack
    title="English"
    image="/images/icons/flags/united-states-of-america.svg"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-Snack>
  <V-Snack title="Slicer" image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-Snack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-Snack title="Support" image="/demo/photos/misc/buoy.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-Snack>
    <V-Snack title="Metamovies" image="/images/icons/logos/metamovies.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-Snack>
    <V-Snack title="Corporate" image="/demo/avatars/7.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-Snack>
    <V-Snack title="English" image="/images/icons/flags/united-states-of-america.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-Snack>
    <V-Snack title="Slicer" image="/images/icons/logos/slicer.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-Snack>
</div>

<!--/example-->
