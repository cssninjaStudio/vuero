### Succeeds Separator

Breadcrumb items can be separated by alternative separators. To display succeeds breadcrumb separators, set the `separator` prop to `succeeds`. See markup for more details.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import { breadcrumbData } from '/@src/composition/state/documentation/components/breadcrumb'
</script>

<template>
  <V-Breadcrumb :items="breadcrumbData" separator="succeeds" />
</template>

<template>
  <V-Breadcrumb :items="breadcrumbData" separator="succeeds" icons />
</template>
```

<!--/code-->

<!--example-->

<nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
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

<nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
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
