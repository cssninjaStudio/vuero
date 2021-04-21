---
state:
  value: ''
---

### V-IMaskInput

Vuero ships with the `<V-IMaskInput />` component, a wrapper arround the great
[imask javascript library](https://imask.js.org/).
Check the code for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const value = ref('')
</script>

<template>
  <V-Field>
    <V-Control>
      <V-IMaskInput
        v-model="value"
        autocomplete="cc-csc"
        class="input"
        :options="{
          mask: '000',
        }"
        placeholder="3 digits code"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
  <V-IMaskInput
    v-model="frontmatter.state.value"
    autocomplete="cc-csc"
    class="input"
    :options="{
      mask: '000',
    }"
    placeholder="3 digits code"
  />
  </V-Control>
</V-Field>

<!--/example-->
