---
state:
  value: 54
---

### Curved tooltip

Use the `has-curved-tooltip` class on the `<VField />` component to show a
curved shaped tooltip. Supports bigger values than the rounded tooltip.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField v-slot="{ id }" class="has-curved-tooltip">
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
    <VField v-slot="{ id }" class="pt-5 px-4 has-curved-tooltip">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
