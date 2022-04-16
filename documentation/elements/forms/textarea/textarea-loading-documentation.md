### Loading

A `VTextarea` can be shown in a loading state. For that, you need to wrap
it inside a control element. Then, simply add the `loading` prop to the
wrapping `<VControl />` component.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const loading = ref(true)
</script>

<template>
  <VField>
    <VControl :loading="loading">
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
  <VControl loading>
    <VTextarea
      rows="4" 
      placeholder="A longer message..."
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
