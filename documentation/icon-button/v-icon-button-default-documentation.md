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
    <V-IconButton color="info" raised circle icon="feather:message-circle" />
    <V-IconButton icon="fab fa-twitter" />
    <V-IconButton color="info" raised circle icon="fab fa-linkedin-in" />
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
    <V-IconButton icon="feather:mail" />
    <V-IconButton color="info" raised circle icon="feather:message-circle" />
    <V-IconButton icon="fab fa-twitter" />
    <V-IconButton color="info" raised circle icon="fab fa-linkedin-in" />
  </V-Buttons>

<!--/example-->
