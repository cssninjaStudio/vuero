### Addon Color

Since input addons are button elements, usual modifier classes apply to them.
You can use the `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<template>
  <V-Field addons>
    <V-Control expanded>
      <input type="text" class="input" placeholder="Find a repository" />
    </V-Control>
    <V-Control>
      <a class="button is-primary">Search</a>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field addons>
  <V-Control expanded>
    <input
        type="text"
        class="input"
        placeholder="Find a repository"
      />
  </V-Control>
  <V-Control>
    <a class="button is-primary">Search</a>
  </V-Control>
</V-Field>

<!--/example-->
