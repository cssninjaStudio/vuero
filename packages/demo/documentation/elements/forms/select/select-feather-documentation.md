---
state:
  input: ''
---

### Lucide Icons

Vuero `VSelect` can have icons attached to them. They work pretty well with
Lucide Icons. You can add an icon element inside the select.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">

const input = ref('')
</script>

<template>
  <VField>
    <VControl class="has-icons-left" icon="lucide:globe">
      <VSelect v-model="input">
        <VOption value="">
          Select a Hero
        </VOption>
        <VOption value="Superman">
          Superman
        </VOption>
        <VOption value="Batman">
          Batman
        </VOption>
        <VOption value="Spiderman">
          Spiderman
        </VOption>
        <VOption value="Deadpool">
          Deadpool
        </VOption>
        <VOption value="Spawn">
          Spawn
        </VOption>
        <VOption value="Galactus">
          Galactus
        </VOption>
      </VSelect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl class="has-icons-left" icon="lucide:globe">
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
