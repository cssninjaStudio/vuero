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
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    size="small"
    icon="lucide:smile"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    size="small"
    icon="lucide:life-buoy"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    size="small"
    icon="lucide:briefcase"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    size="small"
    icon="lucide:alert-octagon"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    size="small"
    icon="lucide:thermometer"
  >
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white size="small" icon="lucide:shopping-cart">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Shopping" color="primary" size="small" icon="lucide:smile">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Support" color="success" white size="small" icon="lucide:life-buoy">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Business" color="info" size="small" icon="lucide:briefcase">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Warning" color="warning" white size="small" icon="lucide:alert-octagon">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
  <VSnack title="Health" color="danger" white size="small" icon="lucide:thermometer">
    <iconify-icon class="iconify" icon="lucide:plus"></iconify-icon>
  </VSnack>
</div>

<!--/example-->
