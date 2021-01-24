### Tablet responsive

`<V-Block />` can be made responsive for the tablet portrait viewport by adding the `tResponsive` prop to the component. When set to responsive mode, the flex block elements stack to fit in the available space. Resize your screen to see it in action.

<!--code-->

```vue
<template>
    <V-Block title="Team Tasks" subtitle="View all tasks" center mResponsive tResponsive>
        <template #icon>
            <VIconBox color="info" size="medium" rounded>
                <i class="iconify" data-icon="feather:chrome">
            </VIconBox>
        </template>
        <template #action>
            <V-Button color="primary" elevated>View</V-button>
        </template>
    </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <div class="l-card">
            <V-Block title="Team Tasks" subtitle="View all tasks" center center mResponsive tResponsive>
                <template #icon>
                    <VIconBox color="info" size="medium" rounded>
                        <i class="iconify" data-icon="feather:chrome">
                    </VIconBox>
                </template>
                <template #action>
                    <V-Button color="primary" elevated>View</V-button>
                </template>
            </VBlock>
        </div>
    </div>
</div>

<!--/example-->
