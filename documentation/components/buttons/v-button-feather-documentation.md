### Feather icons

`<V-Button />` components work well with Font Awesome Icons. Add an icon name inside the `fa` prop to set a Font Awesome icon. You can also create square and circle buttons with a single icon using the `<V-IconButton />` and `<V-IconButtonLink />` components. Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <V-Button color="info" feather="feather:twitter" elevated>
    Tweet Now
  </V-Button>
  <V-Button color="danger" feather="feather:gitlab" raised rounded>
    Commit Code
  </V-Button>
  <V-IconButton feather="feather:mail" />
  <V-IconButton color="info" raised circle feather="feather:message-circle" />
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
    <V-Button color="info" feather="feather:twitter" elevated>
        Tweet Now
    </V-Button>
    <V-Button color="danger" feather="feather:gitlab" raised rounded>
        Commit Code
    </V-Button>
    <V-IconButton feather="feather:mail" />
    <V-IconButton color="info" raised circle feather="feather:message-circle" />
</div>

<!--/example-->
