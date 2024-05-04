---
state:
  input: 2
---

### VRangeRating

Vuero provides number rating component with minimum styling.
`VRangeRating` act like a radio button group, with a custom style, this means
that you can use keyboard navigation to select the rating.
Always wrap your inputs inside a `<VField />` and a `<VControl />`
to build forms quickly and efficiently.

<!--code-->

```vue
<script setup lang="ts">

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VRangeRating
      v-model="frontmatter.state.input"
    />
  </VControl>
</VField>

<!--/example-->
