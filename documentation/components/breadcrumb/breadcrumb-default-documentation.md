### Default Separator

Vuero provides a `<V-Breadcrumb />` component.
Default breadcrumb items are separated by a slash sign.
To show icons, use the `icons` prop. You can also change the alignment
by using the `align` prop (possible values are `center` and `right`).
Pass an **Array** to the `items` prop to render the component.
See markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { breadcrumbData } from '/@src/composition/state/documentation/components/breadcrumb'
</script>

<template>
  <V-Breadcrumb :items="breadcrumbData" />
</template>

<template>
  <V-Breadcrumb :items="breadcrumbData" icons />
</template>
```

<!--/code-->

<!--example-->

<nav class="breadcrumb"
    aria-label="breadcrumbs"
    >
    <ul>
        <li>
        <a href="#">
            <span>Catalogue</span>
        </a>
        </li>
        <li>
        <a href="#">
            <span>Computers</span>
        </a>
        </li>
        <li>
        <a href="#">
            <span>Monitors</span>
        </a>
        </li>
    </ul>
</nav>

<nav class="breadcrumb"
    aria-label="breadcrumbs"
    >
    <ul>
        <li>
        <a href="#">
            <span class="icon is-small">
            <i
                class="iconify"
                data-icon="feather:shopping-cart"
            ></i>
            </span>
            <span>Catalogue</span>
        </a>
        </li>
        <li>
        <a href="#">
            <span class="icon is-small">
            <i class="iconify" data-icon="feather:cpu"></i>
            </span>
            <span>Computers</span>
        </a>
        </li>
        <li>
        <a href="#">
            <span class="icon is-small">
            <i class="iconify" data-icon="feather:monitor"></i>
            </span>
            <span>Monitors</span>
        </a>
        </li>
    </ul>
</nav>

<!--/example-->
