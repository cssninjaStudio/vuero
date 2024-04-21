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
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Shopping"
    color="primary"
    icon="lnil lnil-sleep"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    icon="lnil lnil-life-ring"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    icon="lnil lnil-apartment"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    icon="lnil lnil-warning"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    icon="lnil lnil-thermometer"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" white icon="lnil lnil-cart">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Shopping" color="primary" icon="lnil lnil-sleep">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Support" color="success" white icon="lnil lnil-life-ring">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" icon="lnil lnil-apartment">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Warning" color="warning" white icon="lnil lnil-warning">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Health" color="danger" white icon="lnil lnil-thermometer">
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
