---
state:
  value: 54
---

### Tooltip format

The `<Slider />` component allows to pass a formatting function to its `format`
property. You can return the tooltip value with the format that you want.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(54)
const format = (value) => {
  return `${value}%`
}
</script>

<template>
  <VField class="has-curved-tooltip">
    <VControl>
      <Slider v-model="value" :format="(value) => `${value}%`" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <VField class="pt-5 px-4 has-curved-tooltip">
      <VControl>
        <Slider 
          v-model="frontmatter.state.value" 
          :format="(value) => value + '%'" 
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
