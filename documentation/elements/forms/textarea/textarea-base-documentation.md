---
state:
  textarea: ''
---

### Textarea

A standard Html5 text box to use in your applications. You can control
the box text length with the `rows="*"` attribute. Like other form controls,
textarea natively supports dark mode.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <V-Field>
    <V-Control>
      <textarea
        v-model="textarea"
        class="textarea"
        rows="4"
        placeholder="A longer message..."
      ></textarea>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <textarea class="textarea" 
        rows="4" 
        placeholder="A longer message..." 
        v-model="frontmatter.state.textarea"></textarea>
  </V-Control>
</V-Field>

<!--/example-->
