### Small icons

`<VSnack />` components than can be displayed in a smaller size.
Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
  <VSnack title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Shopping" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Support" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Warning" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Health" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Shopping" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Support" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Business" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Warning" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="Health" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
