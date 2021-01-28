### Rounded addons

Since input addons are button elements, usual modifier classes apply to them.
You can use the `is-rounded` on both the input and the button inside the addon
element to create a rounded field with addons.

<!--code-->

```vue
<template>
  <V-Field addons>
    <V-Control expanded>
      <input
        type="text"
        class="input is-rounded"
        placeholder="Find a repository"
      />
    </V-Control>
    <V-Control>
      <a class="button is-primary is-rounded">Search</a>
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
        class="input is-rounded"
        placeholder="Find a repository"
      />
  </V-Control>
  <V-Control>
    <a class="button is-primary is-rounded">Search</a>
  </V-Control>
</V-Field>

<!--/example-->
