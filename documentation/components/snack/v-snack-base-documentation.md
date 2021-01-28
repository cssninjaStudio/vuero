### V-Snack

Vuero provides a `<V-SnackImage />` component than can be used to show a
pill with an image. Use the `image` prop to insert
an image inside the component.

<!--code-->

```vue
<template>
  <V-SnackImage title="Support" image="/images/photo/demo/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage title="Corporate" image="/images/avatars/photos/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="English"
    image="/images/icons/flags/united-states-of-america.svg"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage title="Slicer" image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-SnackImage title="Support" image="/images/photo/demo/misc/buoy.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Metamovies" image="/images/icons/logos/metamovies.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Corporate" image="/images/avatars/photos/7.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="English" image="/images/icons/flags/united-states-of-america.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Slicer" image="/images/icons/logos/slicer.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
</div>

<!--/example-->
