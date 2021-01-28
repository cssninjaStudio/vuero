### V-Snack white

Vuero provides a `<V-SnackImage />` component than can be used to show
a pill with an image. Use the `image` prop to insert an image
inside the component. You cna also use the `white` prop to make
the component background white.

<!--code-->

```vue
<template>
  <V-SnackImage title="Support" white image="/images/photo/demo/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="Metamovies"
    white
    image="/images/icons/logos/metamovies.svg"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage title="Corporate" white image="/images/avatars/photos/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="English"
    white
    image="/images/icons/flags/united-states-of-america.svg"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage title="Slicer" white image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-SnackImage title="Support" white  image="/images/photo/demo/misc/buoy.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Metamovies" white  image="/images/icons/logos/metamovies.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Corporate" white  image="/images/avatars/photos/7.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="English" white  image="/images/icons/flags/united-states-of-america.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Slicer" white  image="/images/icons/logos/slicer.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
</div>

<!--/example-->
