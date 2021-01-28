### Thin Block

You might have to add a label to your switches in some cases.
If so, use the switch block markup, which provides a nice and
clean flexbox layout. See the code example for more details about usage.

<!--code-->

```vue
<template>
  <div class="thin-switch-block">
    <div class="thin-switch">
      <input id="thin-switch-7" class="input" type="checkbox" checked />
      <label for="thin-switch-7" class="slider"></label>
    </div>
    <div class="text">
      <span>Some option</span>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="thin-switch-block">
    <div class="thin-switch">
        <input class="input" type="checkbox" checked />
        <label class="slider"></label>
    </div>
    <div class="text">
        <span>Some option</span>
    </div>
</div>

<!--/example-->
