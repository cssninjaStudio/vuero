---
state:
  input: 7
---

### Change max values

You can change the max value of the rating component by using the `max` prop
which defaults to `5`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" :max="10" />
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
      :max="10"
    />
  </VControl>
</VField>

<!--/example-->
