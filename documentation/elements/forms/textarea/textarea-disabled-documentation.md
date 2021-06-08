---
state:
  textarea: ''
  disabled: true
---

### Disabled

A textarea can be shown in a disabled state. For that, you need to wrap it
inside a `<V-Control />` component. Simply add the `disabled` attribute
to the target textarea element.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const disabled = ref(true)
</script>

<template>
  <V-Field>
    <V-Control>
      <textarea
        v-model="textarea"
        class="textarea"
        rows="4"
        placeholder="A longer message..."
        :disabled="disabled"
      ></textarea>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <textarea
      v-model="frontmatter.state.textarea"
      class="textarea"
      rows="4"
      placeholder="A longer message..."
      :disabled="frontmatter.state.disabled"
    ></textarea>
  </V-Control>
</V-Field>

<!--/example-->
