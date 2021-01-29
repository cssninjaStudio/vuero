---
value: 36
---

### Squared tooltip

Use the `has-squared-tooltip` class on the `<V-Field />` component to show a
square shaped tooltip. Supports bigger values than the rounded tooltip.

<!--code-->

```vue
<script setup lang="ts">
const value = 0
</script>

<template>
  <V-Field class="has-squared-tooltip">
    <V-Control>
      <Slider v-model="value" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <V-Field class="pt-5 px-4 has-squared-tooltip">
        <V-Control>
            <Slider id="slider-example-squared" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
