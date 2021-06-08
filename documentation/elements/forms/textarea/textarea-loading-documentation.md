### Loading

A textarea can be shown in a loading state. For that, you need to wrap
it inside a control element. Then, simply add the `loading` prop to the
wrapping `<V-Control />` component.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const loading = ref(true)
</script>

<template>
  <V-Field>
    <V-Control :loading="loading">
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
  <V-Control loading>
    <textarea class="textarea" 
        rows="4" 
        placeholder="A longer message..."></textarea>
  </V-Control>
</V-Field>

<!--/example-->
