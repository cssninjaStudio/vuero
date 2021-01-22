### Collapse

Vuero provides 2 collapse component variations: `<CollapsePlus />` and `<CollapseChevron />`. There are 2 available variations that you can use to change the collapse header icon. Pass an **Array** to the `items` props to render the chosen collapse component. Check markup for more details.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import {
    collapsePlusData,
    collapseChevronData,
} from '/@src/composition/state/documentation/components/accordion'
</script>

<template>
<div class="column is-6">
    <CollapsePlus :items="collapsePlusData" />
</div>

<div class="column is-6">
    <CollapseChevron :items="collapseChevronData" />
</div>
</template>
```

<!--/code-->


