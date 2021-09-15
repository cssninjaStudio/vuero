---
state:
  options:
    - 'Option 2'
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

const options = ref(['Option 2'])
</script>

<template>
  <VField>
    <VControl>
      <VCheckbox v-model="options" value="Option 1" label="Option 1" solid />
      <VCheckbox
        v-model="options"
        value="Option 2"
        label="Option 2"
        color="primary"
        solid
      />
      <VCheckbox
        v-model="options"
        value="Option 3"
        label="Option 3"
        color="info"
        solid
      />
      <VCheckbox
        v-model="options"
        value="Option 4"
        label="Option 4"
        color="success"
        solid
      />
      <VCheckbox
        v-model="options"
        value="Option 5"
        label="Option 5"
        color="warning"
        solid
      />
      <VCheckbox
        v-model="options"
        value="Option 6"
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

<VField>
  <VControl>
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 1"
      label="Option 1"
      solid
    />
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 2"
      label="Option 2"
      color="primary"
      solid
    />
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 3"
      label="Option 3"
      color="info"
      solid
    />
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 4"
      label="Option 4"
      color="success"
      solid
    />
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 5"
      label="Option 5"
      color="warning"
      solid
    />
    <VCheckbox
      v-model="frontmatter.state.options"
      value="Option 6"
      label="Option 6"
      color="danger"
      solid
    />
  </VControl>
</VField>

<!--/example-->
