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
    <VIconButton icon="lucide:mail" />
    <VIconButton color="success" icon="lucide:phone" />
    <VIconButton
      color="info"
      light
      icon="fab fa-twitter"
    />
    <VIconButton
      color="primary"
      circle
      icon="lucide:message-circle"
    />
    <VIconButton
      color="warning"
      outlined
      circle
      icon="lucide:triangle"
    />
    <VIconButton
      color="danger"
      light
      raised
      circle
      icon="lucide:x"
    />
    <VIconButton
      color="primary"
      outlined
      loading
      circle
      icon="lucide:plus"
    />
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VIconButton icon="lucide:mail" />
  <VIconButton color="success" icon="lucide:phone" />
  <VIconButton color="info" light icon="fab fa-twitter" />
  <VIconButton color="primary" circle icon="lucide:message-circle" />
  <VIconButton color="warning" outlined circle icon="lucide:triangle" />
  <VIconButton color="danger" light circle icon="lucide:x"  />
  <VIconButton color="primary" outlined loading circle icon="lucide:plus"  />
</VButtons>

<!--/example-->
