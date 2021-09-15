### VBlock icon

Vuero provides a versatile flex block media component named
`<VBlock />`. VBlock has 2 named slots. One for the `icon` element,
which can be whatever you want, and one for the `action`.

<!--code-->

```vue
<template>
  <VBlock title="Team Tasks" subtitle="View all tasks">
    <template #icon>
      <VIconBox color="success" rounded>
        <i class="iconify" data-icon="feather:clock"></i>
      </VIconBox>
    </template>
    <template #action>
      <VButton color="primary" elevated>View</VButton>
    </template>
  </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <VBlock title="Team Tasks" subtitle="View all tasks">
        <template #icon>
          <VIconBox color="success" rounded>
            <i class="iconify" data-icon="feather:clock"></i>
          </VIconBox>
        </template>
        <template #action>
          <VButton color="primary" elevated>View</VButton>
        </template>
      </VBlock>
    </div>
  </div>
</div>

<!--/example-->
