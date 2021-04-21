### Icon centered

You can adjust the `<V-Block />` component flex alignment using
the `center` prop. This will apply the `flex` property
`align-items: center;` to the component.

<!--code-->

```vue
<template>
  <V-Block title="Team Tasks" subtitle="View all tasks" center>
    <template #icon>
      <VIconBox color="info" size="medium" rounded>
        <i class="iconify" data-icon="feather:chrome"></i>
      </VIconBox>
    </template>
    <template #action>
      <V-Button color="primary" elevated>View</V-Button>
    </template>
  </V-Block>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <V-Block title="Team Tasks" subtitle="View all tasks" center>
        <template #icon>
          <VIconBox color="info" size="medium" rounded>
            <i class="iconify" data-icon="feather:chrome"></i>
          </VIconBox>
        </template>
        <template #action>
          <V-Button color="primary" elevated>View</V-Button>
        </template>
      </V-Block>
    </div>
  </div>
</div>

<!--/example-->
