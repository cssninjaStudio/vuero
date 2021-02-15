### Feather icons

`<V-Button />` components work well with Font Awesome Icons.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
You can also create square and circle buttons with a single icon
using the `<V-IconButton />` component.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <V-Button color="info" icon="feather:twitter" elevated> Tweet Now </V-Button>
  <V-Button color="danger" icon="feather:gitlab" raised rounded>
    Commit Code
  </V-Button>
  <V-IconButton icon="feather:mail" />
  <V-IconButton color="info" raised circle icon="feather:message-circle" />
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
    <V-Button color="info" icon="feather:twitter" elevated>
        Tweet Now
    </V-Button>
    <V-Button color="danger" icon="feather:gitlab" raised rounded>
        Commit Code
    </V-Button>
    <V-IconButton icon="feather:mail" />
    <V-IconButton color="info" raised circle icon="feather:message-circle" />
</div>

<!--/example-->
