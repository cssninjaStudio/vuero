### VAccordion

Vuero provides 2 accordion components with enough styling to be able to use
them out of the box: `<VAccordion />` and `<VCollapse />`.
In the simple accordion, each item can be openened separately, whereas in the
exclusive accordion, only one item can be expanded at a time.
Pass an **Array** to the `items` props to render the accordion.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    title: 'Accordion Item 1',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'Accordion Item 2',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'Accordion Item 3',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
]
</script>

<template>
  <div class="column is-6">
    <VAccordion :items="data" />
  </div>

  <div class="column is-6">
    <VAccordion :items="data" exclusive />
  </div>
</template>
```

<!--/code-->
