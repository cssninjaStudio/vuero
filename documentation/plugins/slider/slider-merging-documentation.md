---
value:
  - 20
  - 50
  - 70
merge: 10
---

### Tooltip merging

The `<Slider />` component can automatically merge multiple tooltips when they
reach a certain threshold. Specify a `merge` value and pass it to the
component's `:merge` prop.

<!--code-->

```vue
<script setup lang="ts">
const value = [20, 50, 70]
const merge = 10
</script>

<template>
  <V-Field>
    <V-Control>
      <Slider v-model="value" :merge="merge" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <V-Field class="pt-5 px-4 is-slider-info">
        <V-Control>
            <Slider id="slider-example-merging" v-model="frontmatter.value" 
                :merge="frontmatter.merge" />
        </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
