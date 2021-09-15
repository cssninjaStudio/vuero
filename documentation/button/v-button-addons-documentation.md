### Addons

You can easily create `<VButton />` addons and group them together
by wrapping them inside a `<div class="field is-grouped"><div>` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl>
      <VButton icon="fas fa-align-left"> Left </VButton>
    </VControl>
    <VControl>
      <VButton icon="fas fa-align-center"> Center </VButton>
    </VControl>
    <VControl>
      <VButton icon="fas fa-align-right"> Right </VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl>
    <VButton icon="fas fa-align-left"> Left </VButton>
  </VControl>
  <VControl>
    <VButton icon="fas fa-align-center"> Center </VButton>
  </VControl>
  <VControl>
    <VButton icon="fas fa-align-right"> Right </VButton>
  </VControl>
</VField>

<!--/example-->
