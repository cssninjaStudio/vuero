### V-Button link

`<V-Button />` provides a `to` property that can be used like
on `<RouterLink />`. You can also use a `href` property to render
a standard `<a>` tag. If none is used a `<button>` is rendered insted.

<!--code-->

```vue
<template>
  <V-Button :to="{ name: 'index' }"> Home </V-Button>
  <V-Button bold :to="{ name: 'index' }"> Home </V-Button>
  <V-Button rounded href="https://vuero.cssninja.io"> Home </V-Button>
  <V-Button bold rounded href="https://vuero.cssninja.io"> Home </V-Button>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <V-Button :to="{ name: 'index' }">
    Home
  </V-Button>
  <V-Button bold :to="{ name: 'index' }">
    Home
  </V-Button>
  <V-Button rounded href="https://vuero.cssninja.io">
    Home
  </V-Button>
  <V-Button bold rounded href="https://vuero.cssninja.io">
    Home
  </V-Button>
</div>

<!--/example-->
