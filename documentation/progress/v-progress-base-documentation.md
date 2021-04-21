### V-Progress

Vuero provides a nice and clean `<V-Progress />` component that
can be used almost anywhere, across a wide variety of layouts.
Use the `size` prop to change the progress bar thickness.
3 size modifiers are available: `tiny`, `smaller` and `small`.

<!--code-->

```vue
<template>
  <V-Progress size="tiny" :value="65" />
  <V-Progress size="smaller" :value="90" />
  <V-Progress size="small" :value="31" />
  <V-Progress :value="15" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <V-Progress size="tiny" :value="65" />
        <V-Progress size="smaller" :value="90" />
        <V-Progress size="small" :value="31" />
        <V-Progress :value="15" />
    </div>
</div>

<!--/example-->
