### Undeterminate progress

In some particular use cases, you might want to show an undetermined progress.
If you want your progress bars to show an undetermined state,
you just need to omit the `value` prop. The CSS will take care of the rest.

<!--code-->

```vue
<template>
  <V-Progress size="tiny" />
  <V-Progress size="tiny" color="success" />
  <V-Progress size="tiny" color="info" />
  <V-Progress size="tiny" color="warning" />
  <V-Progress size="tiny" color="danger" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <V-Progress size="tiny" />
        <V-Progress size="tiny" color="success" />
        <V-Progress size="tiny" color="info" />
        <V-Progress size="tiny" color="warning" />
        <V-Progress size="tiny" color="danger" />
    </div>
</div>

<!--/example-->
