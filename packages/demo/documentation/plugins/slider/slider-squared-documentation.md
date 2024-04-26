---
state:
  value: 36
---

### Squared tooltip

Use the `has-squared-tooltip` class on the `<VField />` component to show a
square shaped tooltip. Supports bigger values than the rounded tooltip.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField v-slot="{ id }" class="has-squared-tooltip">
    <VControl>
      <Slider :id="id" v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-5 px-4 has-squared-tooltip">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
