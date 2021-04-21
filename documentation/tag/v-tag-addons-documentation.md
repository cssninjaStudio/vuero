### V-Tags Addons

`<V-Tag />` components can be wrapped together into a single tag addon element.
In order to do so, wrap 2 tag components
inside a `<V-Tags addons />` element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Tags addons>
    <V-Tag label="Package" />
    <V-Tag label="Bulma" color="primary" />
  </V-Tags>
  <V-Tags addons>
    <V-Tag label="John Doe" color="primary" />
    <V-Tag remove />
  </V-Tags>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="Package" />
      <V-Tag label="Bulma" color="primary" />
    </V-Tags>
    <V-Tags addons>
      <V-Tag label="John Doe" color="primary" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
</V-Field>

<!--/example-->
