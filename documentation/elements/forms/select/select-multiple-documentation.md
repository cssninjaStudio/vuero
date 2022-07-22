---
state:
  input: []
---

### Multiple selection

The Vuero `VSelect` can have `multiple` attribute.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string[]>([])
</script>

<template>
  <VField>
    <VControl>
      <VSelect v-model="input" multiple size="8">
        <VOptgroup label="Marvel">
          <VOption value="Spider-Man">Spider-Man</VOption>
          <VOption value="Professor X" disabled>Professor X</VOption>
          <VOption value="Deadpool">Deadpool</VOption>
        </VOptgroup>
        <VOptgroup label="DC">
          <VOption value="Batman">Batman</VOption>
          <VOption value="Superman">Superman</VOption>
          <VOption value="Green Lantern">Green Lantern</VOption>
        </VOptgroup>
        <VOptgroup label="Looney Tunes" disabled>
          <VOption value="Bugs Bunny">Bugs Bunny</VOption>
          <VOption value="Daffy Duck">Daffy Duck</VOption>
          <VOption value="Marvin the Martian">Marvin the Martian</VOption>
        </VOptgroup>
      </VSelect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VSelect v-model="frontmatter.state.input" multiple size="8">
      <VOptgroup label="Marvel">
        <VOption value="Spider-Man">Spider-Man</VOption>
        <VOption value="Professor X" disabled>Professor X</VOption>
        <VOption value="Deadpool">Deadpool</VOption>
      </VOptgroup>
      <VOptgroup label="DC">
        <VOption value="Batman">Batman</VOption>
        <VOption value="Superman">Superman</VOption>
        <VOption value="Green Lantern">Green Lantern</VOption>
      </VOptgroup>
      <VOptgroup label="Looney Tunes" disabled>
        <VOption value="Bugs Bunny">Bugs Bunny</VOption>
        <VOption value="Daffy Duck">Daffy Duck</VOption>
        <VOption value="Marvin the Martian">Marvin the Martian</VOption>
      </VOptgroup>
    </VSelect>
    <p class="help">Hold down the <kbd>Ctrl</kbd> (windows) / <kbd>Command</kbd> (Mac) button to select multiple options.</p>
  </VControl>
</VField>

<!--/example-->
