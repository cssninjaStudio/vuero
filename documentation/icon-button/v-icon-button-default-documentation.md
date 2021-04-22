### V-IconButton

`<V-IconButton />` components work well with Font Awesome Icons.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
You can also create square and circle buttons with a single icon
using the `<V-IconButton />` component.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-IconButton icon="feather:mail" />
    <V-IconButton color="success" icon="feather:phone" />
    <V-IconButton color="info" light icon="fab fa-twitter" />
    <V-IconButton color="primary" circle icon="feather:message-circle" />
    <V-IconButton color="warning" outlined circle icon="feather:triangle" />
    <V-IconButton color="danger" light raised circle icon="feather:x" />
    <V-IconButton color="primary" outlined loading circle icon="feather:plus" />
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-IconButton icon="feather:mail" />
  <V-IconButton color="success" icon="feather:phone" />
  <V-IconButton color="info" light icon="fab fa-twitter" />
  <V-IconButton color="primary" circle icon="feather:message-circle" />
  <V-IconButton color="warning" outlined circle icon="feather:triangle" />
  <V-IconButton color="danger" light circle icon="feather:x"  />
  <V-IconButton color="primary" outlined loading circle icon="feather:plus"  />
</V-Buttons>

<!--/example-->
