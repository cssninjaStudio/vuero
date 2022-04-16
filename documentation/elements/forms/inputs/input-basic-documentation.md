---
state:
  input: ''
---

### VInput

Vuero provides elegant form controls with minimum styling.
`VInput` accept all attributes that `<input>` accepts.
Always wrap your inputs inside a `<VField />` and a `<VControl />`
to build forms quickly and efficiently.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VInput v-model="input" type="text" placeholder="Your username" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VInput
      v-model="frontmatter.state.input"
      type="text"
      placeholder="Your username"
    />
  </VControl>
</VField>

<!--/example-->
