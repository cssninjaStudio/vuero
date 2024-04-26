### VSnack white

Vuero provides a `<VSnack />` component than can be used to show
a pill with an image. Use the `image` prop to insert an image
inside the component. You cna also use the `white` prop to make
the component background white.

<!--code-->

```vue
<template>
  <VSnack
    title="Support"
    white
    image="https://media.cssninja.io/content/photos/misc/buoy.jpg"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Metamovies"
    white
    image="/images/icons/logos/metamovies.svg"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Corporate"
    white
    image="https://media.cssninja.io/content/avatars/7.jpg"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="English"
    white
    image="/images/icons/flags/united-states-of-america.svg"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Slicer"
    white
    image="/images/icons/logos/slicer.svg"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <VSnack title="Support" white  image="https://media.cssninja.io/content/photos/misc/buoy.jpg">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Metamovies" white  image="/images/icons/logos/metamovies.svg">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Corporate" white  image="https://media.cssninja.io/content/avatars/7.jpg">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="English" white  image="/images/icons/flags/united-states-of-america.svg">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Slicer" white  image="/images/icons/logos/slicer.svg">
        <VIcon icon="lucide:x"/>
    </VSnack>
</div>

<!--/example-->
