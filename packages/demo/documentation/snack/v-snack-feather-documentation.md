### Lucide Icons

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    white
    icon="lucide:shopping-cart"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    icon="lucide:smile"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    icon="lucide:life-buoy"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    icon="lucide:briefcase"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    icon="lucide:alert-octagon"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="lucide:thermometer"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white icon="lucide:shopping-cart">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="lucide:smile">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white icon="lucide:life-buoy">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" icon="lucide:briefcase">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    icon="lucide:alert-octagon"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Health" color="danger" white icon="lucide:thermometer">
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
