---
state:
  value: true
---

### Switch Block

You might have to add a label to your switches in some cases.
If so, use the switch block markup, which provides a nice and clean
flexbox layout. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <div class="switch-block">
    <label class="form-switch">
      <input
        id="block-switch-input"
        v-model="value"
        type="checkbox"
        class="is-switch"
      />
      <i></i>
    </label>
    <div class="text">
      <label for="block-switch-input">
        <span>Some option</span>
      </label>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="switch-block">
    <label class="form-switch">
      <input
        id="block-switch-input"
        v-model="frontmatter.state.value"
        type="checkbox"
        class="is-switch"
      />
      <i></i>
    </label>
    <div class="text">
      <label for="block-switch-input">
        <span>Some option</span>
      </label>
    </div>
  </div>

<!--/example-->
