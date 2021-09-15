### VProgress colors

Vuero provides a nice and clean `<VProgress />` component that
can be used almost anywhere, across a wide variety of layouts.
Use the `color` prop to change the progress bar color.
5 color modifiers are available: `primary`, `success`, `info`,
`warning` and `danger`.

<!--code-->

```vue
<template>
  <VProgress size="tiny" :value="70" />
  <VProgress size="tiny" color="success" :value="55" />
  <VProgress size="tiny" color="info" :value="45" />
  <VProgress size="tiny" color="warning" :value="60" />
  <VProgress size="tiny" color="danger" :value="38" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" :value="70" />
        <VProgress size="tiny" color="success" :value="55" />
        <VProgress size="tiny" color="info" :value="45" />
        <VProgress size="tiny" color="warning" :value="60" />
        <VProgress size="tiny" color="danger" :value="38" />
    </div>
</div>

<!--/example-->
