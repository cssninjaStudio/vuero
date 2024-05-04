---
state:
  input: ''
---

### VField

Vuero come with `VField`, `VControl` and `VLabel` which are utility components
to compose **Accessible Forms** with ease.
The component `VField` will keep track of an unique input.

<!--code-->

```vue
<script setup lang="ts">

const input = ref('')
</script>

<template>
  <VField>
    <VLabel>Username</VLabel>
    <VControl>
      <VInput
        v-model="input"
        type="text"
        placeholder="john.doe"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VLabel>Username</VLabel>
  <VControl>
    <VInput v-model="frontmatter.state.input" type="text" placeholder="john.doe" />
  </VControl>
</VField>

<!--/example-->
