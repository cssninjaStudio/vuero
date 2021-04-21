### Addons

You can easily create `<V-Button />` addons and group them together
by wrapping them inside a `<div class="field is-grouped"><div>` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <V-Field addons>
    <V-Control>
      <V-Button icon="fas fa-align-left"> Left </V-Button>
    </V-Control>
    <V-Control>
      <V-Button icon="fas fa-align-center"> Center </V-Button>
    </V-Control>
    <V-Control>
      <V-Button icon="fas fa-align-right"> Right </V-Button>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field addons>
  <V-Control>
    <V-Button icon="fas fa-align-left"> Left </V-Button>
  </V-Control>
  <V-Control>
    <V-Button icon="fas fa-align-center"> Center </V-Button>
  </V-Control>
  <V-Control>
    <V-Button icon="fas fa-align-right"> Right </V-Button>
  </V-Control>
</V-Field>

<!--/example-->
