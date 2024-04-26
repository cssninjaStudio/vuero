### Small images

`<VSnack />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <VSnack
    title="Support"
    image="https://media.cssninja.io/content/photos/misc/buoy.jpg"
    size="small"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Metamovies"
    image="/images/icons/logos/metamovies.svg"
    size="small"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Corporate"
    image="https://media.cssninja.io/content/avatars/7.jpg"
    size="small"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="English"
    image="/images/icons/flags/united-states-of-america.svg"
    size="small"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
  <VSnack
    title="Slicer"
    image="/images/icons/logos/slicer.svg"
    size="small"
  >
    <VIcon icon="lucide:x" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <VSnack title="Support" image="https://media.cssninja.io/content/photos/misc/buoy.jpg" size="small">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Metamovies" image="/images/icons/logos/metamovies.svg" size="small">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Corporate" image="https://media.cssninja.io/content/avatars/7.jpg" size="small">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="English" image="/images/icons/flags/united-states-of-america.svg" size="small">
        <VIcon icon="lucide:x"/>
    </VSnack>
    <VSnack title="Slicer" image="/images/icons/logos/slicer.svg" size="small">
        <VIcon icon="lucide:x"/>
    </VSnack>
</div>

<!--/example-->
