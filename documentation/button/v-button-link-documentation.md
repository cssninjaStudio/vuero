### RouterLink

`<VButton />` provides a `to` property that can be used like
on `<RouterLink />`. You can also use a `href` property to render
a standard `<a>` tag. If none is used a `<button>` is rendered insted.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton to="/"> Home </VButton>
    <VButton bold to="/"> Home </VButton>
    <VButton rounded href="https://vuero.cssninja.io"> Home </VButton>
    <VButton bold rounded href="https://vuero.cssninja.io"> Home </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton to="/">
    Home
  </VButton>
  <VButton bold to="/">
    Home
  </VButton>
  <VButton rounded href="https://vuero.cssninja.io">
    Home
  </VButton>
  <VButton bold rounded href="https://vuero.cssninja.io">
    Home
  </VButton>
</VButtons>

<!--/example-->
