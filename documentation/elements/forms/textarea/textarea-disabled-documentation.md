---
state:
  textarea: ''
  disabled: true
---

### Disabled

A `VTextarea` can be shown in a disabled state. For that, you need to wrap it
inside a `<VControl />` component. Simply add the `disabled` attribute
to the target textarea element.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const disabled = ref(true)
</script>

<template>
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="A longer message..."
        :disabled="disabled"
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
      v-model="frontmatter.state.textarea"
      rows="4"
      placeholder="A longer message..."
      :disabled="frontmatter.state.disabled"
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
