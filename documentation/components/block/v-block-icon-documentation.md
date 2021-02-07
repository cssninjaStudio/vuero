### V-Block icon

Vuero provides a versatile flex block media component named
`<V-Block />`. V-Block has 2 named slots. One for the `icon` element,
which can be whatever you want, and one for the `action`.

<!--code-->

```vue
<template>
  <V-Block title="Team Tasks" subtitle="View all tasks">
    <template #icon>
      <VIconBox color="success" rounded>
        <i class="iconify" data-icon="feather:clock"></i>
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
      <V-Block title="Team Tasks" subtitle="View all tasks">
        <template #icon>
          <VIconBox color="success" rounded>
            <i class="iconify" data-icon="feather:clock"></i>
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
