### Small images

`<V-SnackImage />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <V-SnackImage
    title="Support"
    image="/images/photo/demo/misc/buoy.jpg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="Metamovies"
    image="/images/icons/logos/metamovies.svg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="Corporate"
    image="/images/avatars/photos/7.jpg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="English"
    image="/images/icons/flags/united-states-of-america.svg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
  <V-SnackImage
    title="Slicer"
    image="/images/icons/logos/slicer.svg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </V-SnackImage>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-SnackImage title="Support" image="/images/photo/demo/misc/buoy.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Metamovies" image="/images/icons/logos/metamovies.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Corporate" image="/images/avatars/photos/7.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="English" image="/images/icons/flags/united-states-of-america.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
    <V-SnackImage title="Slicer" image="/images/icons/logos/slicer.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </V-SnackImage>
</div>

<!--/example-->
