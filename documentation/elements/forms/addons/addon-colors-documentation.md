### Addon Color

Since input addons are button elements, usual modifier classes apply to them.
You can use the `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl expanded>
      <input type="text" class="input" placeholder="Find a repository" />
    </VControl>
    <VControl>
      <a class="button is-primary">Search</a>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl expanded>
    <input
        type="text"
        class="input"
        placeholder="Find a repository"
      />
  </VControl>
  <VControl>
    <a class="button is-primary">Search</a>
  </VControl>
</VField>

<!--/example-->
