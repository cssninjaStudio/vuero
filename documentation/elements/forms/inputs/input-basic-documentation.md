---
state:
  input: ''
---

### Input

Vuero provides elegant form controls with minimum styling.
You can use regular Html inputs by adding the `input` class
to a html `input` element. Always wrap your inputs inside a `<VField />`
and a `<VControl />` to build forms quickly and efficiently.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
      <input
        v-model="input"
        type="text"
        class="input"
        placeholder="Your username"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <input
      v-model="frontmatter.state.input"
      type="text"
      class="input"
      placeholder="Your username"
    />
  </VControl>
</VField>

<!--/example-->
