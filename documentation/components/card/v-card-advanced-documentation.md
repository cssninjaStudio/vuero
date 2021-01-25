### V-Card Advanced

All Vuero basic cards have an advanced version that features a card header, body, and footer, to display any type of content. Card header and footer have both left and right subsection where you can insert your UI elements.

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
    <V-CollapsePlus :items="collapsePlusData" />
  </div>

  <div class="column is-6">
    <V-CollapseChevron :items="collapseChevronData" />
  </div>
</template>
```

<!--/code-->
