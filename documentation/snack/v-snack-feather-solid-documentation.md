### Feather solid

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Add the `solid` prop to the component
if you want to show a solid icon. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    color="primary"
    solid
    icon="lucide:smile"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="lucide:life-buoy"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    solid
    icon="lucide:briefcase"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="lucide:alert-octagon"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="lucide:thermometer"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" color="primary" solid icon="lucide:smile">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="lucide:life-buoy"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="lucide:briefcase">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="lucide:alert-octagon"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="lucide:thermometer"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
