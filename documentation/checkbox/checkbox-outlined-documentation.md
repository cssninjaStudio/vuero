---
state:
  option1: true
  option2: false
  option3: false
  option4: true
  option5: false
  option6: false
---

### VCheckbox

Vuero provides default styled checkboxes in 2 main styles, `outlined` (default)
and `solid`. Those checkboxes also support all main colors.
The available colors are `primary`, `success`, `info`,
`warning`, `danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const option1 = ref(true)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(true)
const option5 = ref(false)
const option6 = ref(false)
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="option1" label="Option 1" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option2" label="Option 2" color="primary" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option3" label="Option 3" color="info" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option4" label="Option 4" color="success" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option5" label="Option 5" color="warning" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option6" label="Option 6" color="danger" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option1" label="Option 1" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option2" label="Option 2" color="primary" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option3" label="Option 3" color="info" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option4" label="Option 4" color="success" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option5" label="Option 5" color="warning" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option6" label="Option 6" color="danger" />
    </VControl>
  </VField>

<!--/example-->
