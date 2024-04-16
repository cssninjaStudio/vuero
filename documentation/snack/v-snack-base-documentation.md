### VSnack

Vuero provides a `<VSnack />` component than can be used to show a
pill with an image. Use the `image` prop to insert
an image inside the component.

<!--code-->

```vue
<template>
  <VSnack title="Support" image="/demo/photos/misc/buoy.jpg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Corporate" image="/demo/avatars/7.jpg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Support" image="/demo/photos/misc/buoy.jpg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Corporate" image="/demo/avatars/7.jpg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <iconify-icon class="iconify" icon="lucide:x"></iconify-icon>
  </VSnack>
</div>

<!--/example-->
