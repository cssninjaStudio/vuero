### Tablet responsive

`<VBlock />` can be made responsive for the tablet portrait viewport
by adding the `tResponsive` prop to the component. When set to responsive mode,
the flex block elements stack to fit in the available space.
Resize your screen to see it in action.

<!--code-->

```vue
<template>
  <VBlock title="Team Tasks" subtitle="View all tasks" center m-responsive t-responsive>
    <template #icon>
      <VIconBox color="info" size="medium" rounded>
        <i class="iconify" data-icon="feather:chrome"></i>
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
      <VBlock 
        title="Team Tasks" 
        subtitle="View all tasks" 
        center 
        m-responsive
        t-responsive
      >
        <template #icon>
          <VIconBox color="info" size="medium" rounded>
            <i class="iconify" data-icon="feather:chrome"></i>
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
