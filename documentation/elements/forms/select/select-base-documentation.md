---
state:
  input: ''
---

### Select

Vuero provides default styles for the native Html select element.
There's an additional wrapper for the styles to apply properly.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <V-Field>
    <V-Control>
      <div class="select">
        <select v-model="input">
          <option value="">Select a Hero</option>
          <option value="Superman">Superman</option>
          <option value="Batman">Batman</option>
          <option value="Spiderman">Spiderman</option>
          <option value="Deadpool">Deadpool</option>
          <option value="Spawn">Spawn</option>
          <option value="Galactus">Galactus</option>
        </select>
      </div>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <div class="select">
      <select v-model="frontmatter.state.input">
        <option value="">Select a Hero</option>
        <option value="Superman">Superman</option>
        <option value="Batman">Batman</option>
        <option value="Spiderman">Spiderman</option>
        <option value="Deadpool">Deadpool</option>
        <option value="Spawn">Spawn</option>
        <option value="Galactus">Galactus</option>
      </select>
    </div>
  </V-Control>
</V-Field>

<!--/example-->
