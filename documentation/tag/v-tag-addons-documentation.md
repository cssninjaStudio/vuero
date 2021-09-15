### VTags Addons

`<VTag />` components can be wrapped together into a single tag addon element.
In order to do so, wrap 2 tag components
inside a `<VTags addons />` element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <VTags addons>
    <VTag label="Package" />
    <VTag label="Bulma" color="primary" />
  </VTags>
  <VTags addons>
    <VTag label="John Doe" color="primary" />
    <VTag remove />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VTags addons>
      <VTag label="Package" />
      <VTag label="Bulma" color="primary" />
    </VTags>
    <VTags addons>
      <VTag label="John Doe" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
</VField>

<!--/example-->
