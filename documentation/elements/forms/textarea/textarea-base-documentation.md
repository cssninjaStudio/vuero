---
state:
  textarea: ''
---

### VTextarea

Vuero provides elegant form controls with minimum styling.
`VTextarea` accept all attributes that `<textarea>` accepts.
You can control the box text length with the `rows="*"` attribute.
Always wrap your inputs inside a `<VField />` and a `<VControl />`
to build forms quickly and efficiently.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="A longer message..."
      ></VTextarea>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VTextarea 
      rows="4" 
      placeholder="A longer message..." 
      v-model="frontmatter.state.textarea"
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
