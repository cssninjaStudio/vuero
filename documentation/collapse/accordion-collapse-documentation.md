### V-Collapse

Vuero provides 2 collapse component variations:
`<V-Collapse />` and `<V-Collapse with-chevron />`.  
There are 2 available variations that you can use to change the
collapse header icon. Pass an **Array** to the `items` props to render
the chosen collapse component. Check markup for more details.

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
    <V-Collapse :items="data" />
  </div>

  <div class="column is-6">
    <V-Collapse :items="data" with-chevron />
  </div>
</template>
```

<!--/code-->
