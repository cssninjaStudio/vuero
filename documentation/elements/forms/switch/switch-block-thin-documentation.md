---
state:
  value: true
---

### Thin Block

You might have to add a label to your switches in some cases.
If so, use the switch block markup, which provides a nice and
clean flexbox layout. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <div class="thin-switch-block">
    <div class="thin-switch">
      <input
        id="thin-switch-input"
        v-model="value"
        class="input"
        type="checkbox"
      />
      <label for="thin-switch-input" class="slider"></label>
    </div>
    <div class="text">
      <label for="thin-switch-input" class="slider">
        <span>Some option</span>
      </label>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="thin-switch-block">
    <div class="thin-switch">
      <input
        id="thin-switch-input"
        v-model="frontmatter.state.value"
        class="input"
        type="checkbox"
      />
      <label for="thin-switch-input" class="slider"></label>
    </div>
    <div class="text">
      <label for="thin-switch-input">
        <span>Some option</span>
      </label>
    </div>
  </div>

<!--/example-->
