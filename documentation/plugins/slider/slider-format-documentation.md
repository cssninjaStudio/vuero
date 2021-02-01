---
value: 54
---

### Tooltip format

The `<Slider />` component allows to pass a formatting function to its `format`
property. You can return the tooltip value with the format that you want.

<!--code-->

```vue
<script setup lang="ts">
const value = 54
const format = function (value) {
  return `${value}%`
}
</script>

<template>
  <V-Field class="has-curved-tooltip">
    <V-Control>
      <Slider v-model="value" :format="format" />
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
            <Slider id="slider-example-format" v-model="frontmatter.value" 
                :format="formatAsPercent" />
        </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
