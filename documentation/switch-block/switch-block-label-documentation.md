---
state:
  value: true
---

### Block label

You might have to add a label to your switches in some cases.
If so, use the `VSwitchBlock` component, which provides a nice and clean
flexbox layout. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <VSwitchBlock v-model="value" label="Some option" />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VSwitchBlock
    v-model="frontmatter.state.value"
    label="Some option"
  />
</div>

<!--/example-->
