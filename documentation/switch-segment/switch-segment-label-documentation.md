---
state:
  value: true
---

### Label

You might have to add a label to your switches in some cases.
If so, use the `VSwitchSegment` component, which provides `labelTrue` and
`labelFalse` attributes. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <VField grouped>
    <VControl>
      <VSwitchSegment v-model="value" label-true="ON" label-false="OFF" color="primary" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
  <VControl>
    <VSwitchSegment
      v-model="frontmatter.state.value"
      label-true="ON"
      label-false="OFF"
      color="primary"
    />
  </VControl>
</VField>

<!--/example-->
