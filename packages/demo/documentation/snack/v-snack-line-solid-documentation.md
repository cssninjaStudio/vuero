### Line Icons solid

Vuero provides a `<VSnack />` component than can be used to show
a pill with an icon. Use the available `slots` prop to insert your content.
Add the `solid` prop to the component if you want to show a solid icon.
Check the markup for more details.

<!--code-->

```vue
<template>
  <VSnack
    title="Shopping"
    color="primary"
    solid
    icon="lnil lnil-sleep"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Business"
    color="info"
    solid
    icon="lnil lnil-apartment"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="lnil lnil-warning"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <VIcon icon="lucide:plus" />
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="Shopping" color="primary" solid icon="lnil lnil-sleep">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Support"
    color="success"
    white
    solid
    icon="lnil lnil-life-ring"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack title="Business" color="info" solid icon="lnil lnil-apartment">
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Warning"
    color="warning"
    white
    solid
    icon="lnil lnil-warning"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
  <VSnack
    title="Health"
    color="danger"
    white
    solid
    icon="lnil lnil-thermometer"
  >
    <VIcon icon="lucide:plus"/>
  </VSnack>
</div>

<!--/example-->
