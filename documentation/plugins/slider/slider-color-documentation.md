---
state:
  value1: 78
  value2: 24
  value3: 52
  value4: 61
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
  <VField v-slot="{ id }" class="has-rounded-tooltip is-slider-info">
    <VControl>
      <Slider :id="id" v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-info">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value1" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-success">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value2" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-warning">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value3" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-danger">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value4" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
