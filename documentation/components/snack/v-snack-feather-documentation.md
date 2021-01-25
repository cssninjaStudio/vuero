### Feather icons

Vuero provides a `<V-SnackIcon />` component than can be used to show a pill with an icon. Use the available `slots` prop to insert your content. Check the markup for more details.

<!--code-->

```vue
<template>
    <V-SnackIcon title="Shopping" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:shopping-cart">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Shopping" color="primary">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:smile">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:life-buoy">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:briefcase">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:alert-octagon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white>
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
    <V-SnackIcon title="Shopping" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:shopping-cart">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Shopping" color="primary">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:smile">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Support" color="success" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:life-buoy">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Business" color="info">
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:briefcase">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Warning" color="warning" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:alert-octagon">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
    <V-SnackIcon title="Health" color="danger" white>
        <template #icon>
            <i class="iconify snack-icon" data-icon="feather:thermometer">
        </template>
        <template #action>
            <i class="iconify" data-icon="feather:plus">
        </template>
    </V-SnackIcon>
</div>

<!--/example-->
