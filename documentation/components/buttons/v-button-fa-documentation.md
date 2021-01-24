### Font Awesome

`<V-Button />` components work well with Font Awesome Icons. Add an icon name inside the `fa` prop to set a Font Awesome icon. You can also create square and circle buttons with a single icon using the `<V-IconButton />` and `<V-IconButtonLink />` components. Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <V-Button color="primary" fa="fab fa-twitter" elevated> Tweet Now </V-Button>
  <V-Button color="success" fa="fas fa-check" raised rounded>
    Save Changes
  </V-Button>
  <V-IconButton fa="fab fa-twitter" />
  <V-IconButton color="info" raised circle fa="fab fa-linkedin-in" />
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
    <V-Button color="primary" fa="fab fa-twitter" elevated>
        Tweet Now
    </V-Button>
    <V-Button color="success" fa="fas fa-check" raised rounded>
        Save Changes
    </V-Button>
    <V-IconButton fa="fab fa-twitter" />
    <V-IconButton color="info" raised circle fa="fab fa-linkedin-in" />
</div>

<!--/example-->
