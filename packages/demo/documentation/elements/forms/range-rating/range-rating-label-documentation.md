---
state:
  input: 7
---

### Accessible label

To add a label to the rating component, use the `label` prop. You can also
use the `label` slot to customize the label.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" label="Rating" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VRangeRating
      v-model="frontmatter.state.input"
      label="Rating"
    />
  </VControl>
</VField>

<!--/example-->
