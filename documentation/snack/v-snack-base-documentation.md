### VSnack

Vuero provides a `<VSnack />` component than can be used to show a
pill with an image. Use the `image` prop to insert
an image inside the component.

<!--code-->

```vue
<template>
  <VSnack title="Support" image="https://media.cssninja.io/content/photos/misc/buoy.jpg">
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack title="Corporate" image="https://media.cssninja.io/content/avatars/7.jpg">
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <VIcon icon="lucide:x" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Support" image="https://media.cssninja.io/content/photos/misc/buoy.jpg">
    <VIcon icon="lucide:x"/>
  </VSnack>
  <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg">
    <VIcon icon="lucide:x"/>
  </VSnack>
  <VSnack title="Corporate" image="https://media.cssninja.io/content/avatars/7.jpg">
    <VIcon icon="lucide:x"/>
  </VSnack>
  <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg">
    <VIcon icon="lucide:x"/>
  </VSnack>
  <VSnack title="Slicer" image="/images/icons/logos/slicer.svg">
    <VIcon icon="lucide:x"/>
  </VSnack>
</div>

<!--/example-->
