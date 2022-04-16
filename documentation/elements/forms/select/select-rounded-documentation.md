---
state:
  input: ''
---

### Select rounded

The Vuero `VSelect` can have rounded edges. Like other controls,
simply add the is-rounded class to the select wrapper element.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VSelect v-model="input" class="is-rounded">
        <VOption value="">Select a Hero</VOption>
        <VOption value="Superman">Superman</VOption>
        <VOption value="Batman">Batman</VOption>
        <VOption value="Spiderman">Spiderman</VOption>
        <VOption value="Deadpool">Deadpool</VOption>
        <VOption value="Spawn">Spawn</VOption>
        <VOption value="Galactus">Galactus</VOption>
      </VSelect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VSelect v-model="frontmatter.state.input" class="is-rounded">
      <VOption value="">Select a Hero</VOption>
      <VOption value="Superman">Superman</VOption>
      <VOption value="Batman">Batman</VOption>
      <VOption value="Spiderman">Spiderman</VOption>
      <VOption value="Deadpool">Deadpool</VOption>
      <VOption value="Spawn">Spawn</VOption>
      <VOption value="Galactus">Galactus</VOption>
    </VSelect>
  </VControl>
</VField>

<!--/example-->
