### Undeterminate progress

In some particular use cases, you might want to show an undetermined progress.
If you want your progress bars to show an undetermined state,
you just need to omit the `value` prop. The CSS will take care of the rest.

<!--code-->

```vue
<template>
  <VProgress size="tiny" />
  <VProgress size="tiny" color="success" />
  <VProgress size="tiny" color="info" />
  <VProgress size="tiny" color="warning" />
  <VProgress size="tiny" color="danger" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" />
        <VProgress size="tiny" color="success" />
        <VProgress size="tiny" color="info" />
        <VProgress size="tiny" color="warning" />
        <VProgress size="tiny" color="danger" />
    </div>
</div>

<!--/example-->
