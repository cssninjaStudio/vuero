### Addons

You can easily create `<V-Button />` addons and group them together
by wrapping them inside a `<div class="field is-grouped"><div>` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <div class="field has-addons">
    <p class="control">
      <V-Button icon="fas fa-align-left"> Left </V-Button>
    </p>
    <p class="control">
      <V-Button icon="fas fa-align-center"> Center </V-Button>
    </p>
    <p class="control">
      <V-Button icon="fas fa-align-right"> Right </V-Button>
    </p>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="field has-addons">
    <p class="control">
        <V-Button icon="fas fa-align-left">
            Left
        </V-Button>
    </p>
    <p class="control">
        <V-Button icon="fas fa-align-center">
            Center
        </V-Button>
    </p>
    <p class="control">
        <V-Button icon="fas fa-align-right">
            Right
        </V-Button>
    </p>
</div>

<!--/example-->
