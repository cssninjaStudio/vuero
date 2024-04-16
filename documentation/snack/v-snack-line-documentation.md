### Line Icons

Vuero provides a `<VSnack />` component than can be used
to show a pill with an icon. Use the available `slots` prop
to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    white
    icon="lnil lnil-cart"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    icon="lnil lnil-sleep"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    icon="lnil lnil-life-ring"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    icon="lnil lnil-apartment"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    icon="lnil lnil-warning"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="lnil lnil-thermometer"
  >
    <iconify-icon class="iconify" icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white icon="lnil lnil-cart">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="lnil lnil-sleep">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white icon="lnil lnil-life-ring">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" icon="lnil lnil-apartment">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Warning" color="warning" white icon="lnil lnil-warning">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Health" color="danger" white icon="lnil lnil-thermometer">
    <iconify-icon class="iconify" icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
