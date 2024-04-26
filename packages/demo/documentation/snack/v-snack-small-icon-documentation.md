### Small icons

`<VSnack />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    white
    size="small"
    icon="lucide:shopping-cart"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    size="small"
    icon="lucide:smile"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    size="small"
    icon="lucide:life-buoy"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    size="small"
    icon="lucide:briefcase"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    size="small"
    icon="lucide:alert-octagon"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    size="small"
    icon="lucide:thermometer"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white size="small" icon="lucide:shopping-cart">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Shopping" color="primary" size="small" icon="lucide:smile">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white size="small" icon="lucide:life-buoy">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" size="small" icon="lucide:briefcase">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Warning" color="warning" white size="small" icon="lucide:alert-octagon">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Health" color="danger" white size="small" icon="lucide:thermometer">
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
