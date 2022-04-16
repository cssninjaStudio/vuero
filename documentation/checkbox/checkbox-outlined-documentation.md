---
state:
  options: 'Option 2'
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

const options = ref('Option 2')
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="options" true-value="Option 1" label="Option 1" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 2"
        label="Option 2"
        color="primary"
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="options" true-value="Option 3" label="Option 3" color="info" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 4"
        label="Option 4"
        color="success"
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 5"
        label="Option 5"
        color="warning"
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 6"
        label="Option 6"
        color="danger"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField class="is-flex">
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 1"
      label="Option 1"
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 2"
      label="Option 2"
      color="primary"
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 3"
      label="Option 3"
      color="info"
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 4"
      label="Option 4"
      color="success"
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 5"
      label="Option 5"
      color="warning"
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 6"
      label="Option 6"
      color="danger"
    />
  </VControl>
</VField>

<!--/example-->
