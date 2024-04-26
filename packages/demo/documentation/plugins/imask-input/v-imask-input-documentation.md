---
state:
  value: ''
---

### VIMaskInput

Vuero ships with the `<VIMaskInput />` component, a wrapper arround the great
[imask javascript library](https://imask.js.org/).
Check the code for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <VIMaskInput
        :id="id"
        v-model="value"
        autocomplete="cc-csc"
        class="input"
        :options="{
          mask: '000',
        }"
        placeholder="3 digits code"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField v-slot="{ id }">
  <VControl>
    <v-i-mask-input
      :id="id"
      v-model="frontmatter.state.value"
      autocomplete="cc-csc"
      class="input"
      :options="{
        mask: '000',
      }"
      placeholder="3 digits code"
    />
  </VControl>
</VField>

<!--/example-->
