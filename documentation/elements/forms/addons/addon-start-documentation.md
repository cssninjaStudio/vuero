### Start Addon

Inputs can have addons if you need to show contextual information.
You can attach an addon at the start of a `<VField />` with the `addons`
prop. See markup for more details about usage.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl>
      <a class="button is-static">+1</a>
    </VControl>
    <VControl expanded>
      <input type="text" class="input" placeholder="Username" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
    <VControl>
        <a class="button is-static">+1</a>
    </VControl>
    <VControl expanded>
        <input
            type="text"
            class="input"
            placeholder="Username"
        />
    </VControl>
</VField>

<!--/example-->
