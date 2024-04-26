### Icon centered

You can adjust the `<VBlock />` component flex alignment using
the `center` prop. This will apply the `flex` property
`align-items: center;` to the component.

<!--code-->

```vue
<template>
  <VBlock
    title="Team Tasks"
    subtitle="View all tasks"
    center
  >
    <template #icon>
      <VIconBox
        color="info"
        size="medium"
        rounded
      >
        <VIcon icon="lucide:chrome" />
      </VIconBox>
    </template>
    <template #action>
      <VButton color="primary" elevated>
        View
      </VButton>
    </template>
  </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <VBlock title="Team Tasks" subtitle="View all tasks" center>
        <template #icon>
          <VIconBox color="info" size="medium" rounded>
            <VIcon icon="lucide:chrome"/>
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
