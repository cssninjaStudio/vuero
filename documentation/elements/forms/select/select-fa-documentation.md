---
state:
  input: ''
---

### Font Awesome

Vuero `VSelect` can have icons attached to them.
They work pretty well with Font Awesome icons. You can add an
icon element inside the select. Please refer to the code example
for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl class="has-icons-left" icon="fas fa-globe">
      <VSelect v-model="input">
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
  <VControl class="has-icons-left" icon="fas fa-globe">
    <VSelect v-model="frontmatter.state.input">
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
