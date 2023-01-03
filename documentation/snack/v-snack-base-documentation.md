### VSnack

Vuero provides a `<VSnack />` component than can be used to show a
pill with an image. Use the `image` prop to insert
an image inside the component.

<!--code-->

```vue
<template>
  <VSnack title="Support" image="/demo/photos/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Corporate" image="/demo/avatars/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Support" image="/demo/photos/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Corporate" image="/demo/avatars/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
</div>

<!--/example-->
