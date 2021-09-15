---
state:
  textarea: ''
  disabled: true
---

### Disabled

A textarea can be shown in a disabled state. For that, you need to wrap it
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
      <textarea
        v-model="textarea"
        class="textarea"
        rows="4"
        placeholder="A longer message..."
        :disabled="disabled"
      ></textarea>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <textarea
      v-model="frontmatter.state.textarea"
      class="textarea"
      rows="4"
      placeholder="A longer message..."
      :disabled="frontmatter.state.disabled"
    ></textarea>
  </VControl>
</VField>

<!--/example-->
