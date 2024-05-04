---
state:
  value: true
---

### Label

You might have to add a label to your switches in some cases.
If so, use the `VSwitchSegment` component, which provides `labelTrue` and
`labelFalse` attributes. See the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <VField horizontal>
    <VControl>
      <VSwitchSegment
        v-model="value"
        label-true="ON"
        label-false="OFF"
        color="primary"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl>
    <VSwitchSegment
      v-model="frontmatter.state.value"
      label-true="ON"
      label-false="OFF"
      color="primary"
    />
  </VControl>
</VField>

<!--/example-->
