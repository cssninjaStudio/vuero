---
state:
  value: 78
---

### Slider colors

The `<Slider />` component supports multiple colors. The default color is the
theme `$primary` color. Available color classes modifiers are: `is-slider-info`,
`is-slider-success`, `is-slider-warning`, `is-slider-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField class="has-rounded-tooltip is-slider-info">
    <VControl>
      <Slider v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-6">
    <VField class="pt-6 px-4 has-rounded-tooltip is-slider-info">
      <VControl>
        <Slider v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField class="pt-6 px-4 has-rounded-tooltip is-slider-success">
      <VControl>
        <Slider v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField class="pt-6 px-4 has-rounded-tooltip is-slider-warning">
      <VControl>
        <Slider v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField class="pt-6 px-4 has-rounded-tooltip is-slider-danger">
      <VControl>
        <Slider v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
