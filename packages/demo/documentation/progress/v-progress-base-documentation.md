### VProgress

Vuero provides a nice and clean `<VProgress />` component that
can be used almost anywhere, across a wide variety of layouts.
Use the `size` prop to change the progress bar thickness.
3 size modifiers are available: `tiny`, `smaller` and `small`.

<!--code-->

```vue
<template>
  <VProgress size="tiny" :value="65" />
  <VProgress size="smaller" :value="90" />
  <VProgress size="small" :value="31" />
  <VProgress :value="15" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" :value="65" />
        <VProgress size="smaller" :value="90" />
        <VProgress size="small" :value="31" />
        <VProgress :value="15" />
    </div>
</div>

<!--/example-->
