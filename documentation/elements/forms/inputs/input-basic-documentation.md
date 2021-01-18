---
state:
  input: ''
---

### Input

Huro provides elegant form controls with minimum styling. You can use regular inputs by adding the `input` class to a html `input` element.  
It's better to wrap inputs inside a `field` and a `control` for consistency.

<!--code-->

```vue {4,11}
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div class="field">
    <div class="control">
      <input
        v-model="input"
        type="text"
        class="input"
        placeholder="Username"
      />
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <input
      type="text"
      class="input"
      placeholder="Username"
      v-model="frontmatter.state.input"
    />
  </div>
</div>

<!--/example-->
