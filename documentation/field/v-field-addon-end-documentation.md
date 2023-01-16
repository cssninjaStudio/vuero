### VField addons

Inputs can have addons if you need to show contextual information.
You can attach an addon at the end of a `<VField />` with the `addons` prop.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <VField label="Gmail account" addons>
    <VControl expanded>
      <VInput type="text" class="input" placeholder="Username" />
    </VControl>
    <VControl>
      <VButton static>@gmail.com</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField label="Gmail account" addons>
  <VControl expanded>
    <VInput
      type="text"
      class="input"
      placeholder="Username"
    />
  </VControl>
  <VControl>
    <VButton static>@gmail.com</VButton>
  </VControl>
</VField>

<!--/example-->
