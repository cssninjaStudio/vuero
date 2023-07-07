---
state:
  input: 2
---

### Readonly and disabled

To make the rating component readonly or disabled, use the `readonly` and `disabled` props.
The `readonly` prop will make the rating component readonly by disabling
the user interaction, while the `disabled` prop will make the rating component
disabled by disabling value changes.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <div
    class="is-flex is-justify-content-space-between is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="Readonly" readonly />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="Disabled" disabled />
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div>
  <div
    class="is-flex is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-model="frontmatter.state.input" label="Readonly" readonly />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="frontmatter.state.input" label="Disabled" disabled />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
