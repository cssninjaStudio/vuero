### Addon List

`<VTag />` components with addons can be organized in a
list with optimal spacing. Wrap your components inside a
`<VField grouped multiline />` element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped multiline>
    <VControl>
      <VTags addons>
        <VTag label="Bulma CSS" color="primary" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="React JS" color="info" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Javascript" color="warning" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Vue JS" color="primary" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Angular" color="danger" />
        <VTag remove />
      </VTags>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->
<VField grouped multiline>
  <VControl>
    <VTags addons>
      <VTag label="Bulma CSS" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="React JS" color="info" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Javascript" color="warning" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Vue JS" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Angular" color="danger" />
      <VTag remove />
    </VTags>
  </VControl>
</VField>

<!--/example-->
