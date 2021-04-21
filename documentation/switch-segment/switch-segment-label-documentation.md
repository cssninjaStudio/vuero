---
state:
  value: true
---

### Label

You might have to add a label to your switches in some cases.
If so, use the `V-SwitchSegment` component, which provides `labelTrue` and
`labelFalse` attributes. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <V-Field grouped>
    <V-Control>
      <V-SwitchSegment
        v-model="value"
        label-true="ON"
        label-false="OFF"
        color="primary"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-SwitchSegment
      v-model="frontmatter.state.value"
      label-true="ON"
      label-false="OFF"
      color="primary"
    />
  </V-Control>
</V-Field>

<!--/example-->
