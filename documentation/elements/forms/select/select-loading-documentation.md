---
state:
  input: 'Batman'
---

### Loading and Disabled select

vuero `VSelect` can be shown in a loading state. To apply that style,
simply add the `loading` property to the `VControl` wrapping element.
The `disabled` property should be set on `VSelect`, like the default behavior.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl loading class="has-icons-left" icon="lnil lnil-basketball">
      <VSelect v-model="input" disabled>
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
  <VControl loading class="has-icons-left" icon="lnil lnil-basketball">
    <VSelect v-model="frontmatter.state.input" disabled>
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
