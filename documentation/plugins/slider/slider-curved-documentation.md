---
value: 54
---

### Curved tooltip

Use the `has-curved-tooltip` class on the `<V-Field />` component to show a
curved shaped tooltip. Supports bigger values than the rounded tooltip.

<!--code-->

```vue
<script setup lang="ts">
const value = 0
</script>

<template>
  <V-Field class="has-curved-tooltip">
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
    <V-Field class="pt-5 px-4 has-curved-tooltip">
        <V-Control>
            <Slider id="slider-example-curved" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
