---
state:
  input: ''
---

### VSelect

Vuero provides elegant form controls with minimum styling.
`VSelect` accept all attributes that `<select>` accepts.
Always wrap your inputs inside a `<VField />` and a `<VControl />`
to build forms quickly and efficiently.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
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
  <VControl>
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
