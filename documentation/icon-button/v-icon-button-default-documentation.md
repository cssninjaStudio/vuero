### VIconButton

`<VIconButton />` components work well with Font Awesome Icons.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
You can also create square and circle buttons with a single icon
using the `<VIconButton />` component.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <VButtons>
    <VIconButton icon="feather:mail" />
    <VIconButton color="success" icon="feather:phone" />
    <VIconButton color="info" light icon="fab fa-twitter" />
    <VIconButton color="primary" circle icon="feather:message-circle" />
    <VIconButton color="warning" outlined circle icon="feather:triangle" />
    <VIconButton color="danger" light raised circle icon="feather:x" />
    <VIconButton color="primary" outlined loading circle icon="feather:plus" />
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VIconButton icon="feather:mail" />
  <VIconButton color="success" icon="feather:phone" />
  <VIconButton color="info" light icon="fab fa-twitter" />
  <VIconButton color="primary" circle icon="feather:message-circle" />
  <VIconButton color="warning" outlined circle icon="feather:triangle" />
  <VIconButton color="danger" light circle icon="feather:x"  />
  <VIconButton color="primary" outlined loading circle icon="feather:plus"  />
</VButtons>

<!--/example-->
