### Rounded addons

Since input addons are button elements, usual modifier classes apply to them.
You can use the `rounded` on both the input and the button inside the addon
element to create a rounded field with addons.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl expanded>
      <VInput type="text" class="input is-rounded" placeholder="Find a repository" />
    </VControl>
    <VControl>
      <VButton color="primary" rounded>Search</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl expanded>
    <VInput type="text" class="input is-rounded" placeholder="Find a repository" />
  </VControl>
  <VControl>
    <VButton color="primary" rounded>Search</VButton>
  </VControl>
</VField>

<!--/example-->
