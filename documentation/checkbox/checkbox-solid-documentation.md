---
state:
  options: 'Option 2'
---

### Checkbox solid

Vuero provides alternative checkbox style with `solid` attribute.
Those checkboxes also support all main colors.
The available modifiers are `primary`, `success`, `info`,
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
      <VCheckbox v-model="options" true-value="Option 1" label="Option 1" solid />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 2"
        label="Option 2"
        color="primary"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 3"
        label="Option 3"
        color="info"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 4"
        label="Option 4"
        color="success"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 5"
        label="Option 5"
        color="warning"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 6"
        label="Option 6"
        color="danger"
        solid
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
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 2"
      label="Option 2"
      color="primary"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 3"
      label="Option 3"
      color="info"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 4"
      label="Option 4"
      color="success"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 5"
      label="Option 5"
      color="warning"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 6"
      label="Option 6"
      color="danger"
      solid
    />
  </VControl>
</VField>

<!--/example-->
