### Image accordion

A nice experimental and playful CSS only image
accordion component: `<V-AccordionImage />`.
Images simply stack on mobile.
Pass an **Array** to the `items` props to render the accordion.
Check markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { accordionImagesData } from '/@src/composition/state/documentation/components/accordion'
</script>

<template>
  <div class="column is-12">
    <V-AccordionImage :items="accordionImagesData" />
  </div>
</template>
```

<!--/code-->
