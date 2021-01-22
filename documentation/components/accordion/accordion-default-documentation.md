### Accordion

Vuero provides 2 accordion components with enough styling to be able to use them out of the box: `<AccordionSimple />` and `<AccordionExclusive />`. In the simple accordion, each item can be openened separately, whereas in the exclusive accordion, only one item can be expanded at a time. Pass an **Array** to the `items` props to render the accordion.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import {
    accordionSimpleData,
    accordionExclusiveData,
} from '/@src/composition/state/documentation/components/accordion'
</script>

<template>
<div class="column is-6">
    <AccordionSimple :items="accordionSimpleData" />
</div>

<div class="column is-6">
    <AccordionExclusive :items="accordionExclusiveData" />
</div>
</template>
```

<!--/code-->


