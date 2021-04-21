### V-Progress colors

Vuero provides a nice and clean `<V-Progress />` component that
can be used almost anywhere, across a wide variety of layouts.
Use the `color` prop to change the progress bar color.
5 color modifiers are available: `primary`, `success`, `info`,
`warning` and `danger`.

<!--code-->

```vue
<template>
  <V-Progress size="tiny" :value="70" />
  <V-Progress size="tiny" color="success" :value="55" />
  <V-Progress size="tiny" color="info" :value="45" />
  <V-Progress size="tiny" color="warning" :value="60" />
  <V-Progress size="tiny" color="danger" :value="38" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <V-Progress size="tiny" :value="70" />
        <V-Progress size="tiny" color="success" :value="55" />
        <V-Progress size="tiny" color="info" :value="45" />
        <V-Progress size="tiny" color="warning" :value="60" />
        <V-Progress size="tiny" color="danger" :value="38" />
    </div>
</div>

<!--/example-->
