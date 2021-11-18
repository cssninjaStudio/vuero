### Small images

`<VSnack />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <VSnack title="Support" image="/demo/photos/misc/buoy.jpg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Corporate" image="/demo/avatars/7.jpg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack
    title="English"
    image="/images/icons/flags/united-states-of-america.svg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <VSnack title="Support" image="/demo/photos/misc/buoy.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="Corporate" image="/demo/avatars/7.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="Slicer" image="/images/icons/logos/slicer.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
</div>

<!--/example-->
