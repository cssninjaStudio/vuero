### Start addons

Inputs can have addons if you need to show contextual information.
You can attach an addon at the start of a `<VField />` with the `addons`
prop. See markup for more details about usage.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl>
      <VButton static>+1</VButton>
    </VControl>
    <VControl expanded>
      <VInput type="text" class="input" placeholder="Username" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl>
    <VButton static>+1</VButton>
  </VControl>
  <VControl expanded>
    <VInput type="text" class="input" placeholder="Username" />
  </VControl>
</VField>

<!--/example-->
