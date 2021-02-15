### V-Tag Addons

`<V-Tag />` components can be wrapped together into a single tag addon element.
In order to do so, wrap 2 tag components
inside a `<div class="tags has-addons">` Html element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <div class="tags has-addons">
    <V-Tag label="Package" />
    <V-Tag label="Bulma" color="primary" />
  </div>
  <div class="tags has-addons">
    <V-Tag label="John Doe" color="primary" />
    <V-Tag remove />
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="tags has-addons">
      <V-Tag label="Package" />
      <V-Tag label="Bulma" color="primary" />
    </div>
    <div class="tags has-addons">
      <V-Tag label="John Doe" color="primary" />
      <V-Tag remove />
    </div>
  </div>
</div>

<!--/example-->
