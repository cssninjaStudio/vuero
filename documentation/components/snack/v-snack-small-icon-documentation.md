### Small icons

`<V-SnackIcon />` components than can be displayed in a smaller size. Use the `size="small"` prop on the component to show a smaller version of it.

<!--code-->

```vue
<template>
    <V-SnackIcon title="Shopping" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:shopping-cart">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Shopping" color="primary" size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:smile">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:life-buoy">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info" size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:briefcase">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:alert-octagon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:thermometer">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <V-SnackIcon title="Shopping" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:shopping-cart">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Shopping" color="primary" size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:smile">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:life-buoy">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info" size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:briefcase">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:alert-octagon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white size="small">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:thermometer">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
</div>

<!--/example-->
