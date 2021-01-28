### Switch Block

You might have to add a label to your switches in some cases.
If so, use the switch block markup, which provides a nice and clean
flexbox layout. See the code example for more details about usage.

<!--code-->

```vue
<template>
  <div class="switch-block">
    <label class="form-switch">
      <input type="checkbox" class="is-switch" checked />
      <i></i>
    </label>
    <div class="text">
      <span>Some option</span>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="switch-block">
    <label class="form-switch">
        <input type="checkbox" class="is-switch" checked>
        <i></i>
    </label>
    <div class="text">
        <span>Some option</span>
    </div>
</div>

<!--/example-->
