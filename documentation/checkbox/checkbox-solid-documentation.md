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
  <V-Field>
    <V-Control>
      <V-Checkbox v-model="options" value="Option 1" label="Option 1" solid />
      <V-Checkbox
        v-model="options"
        value="Option 2"
        label="Option 2"
        color="primary"
        solid
      />
      <V-Checkbox
        v-model="options"
        value="Option 3"
        label="Option 3"
        color="info"
        solid
      />
      <V-Checkbox
        v-model="options"
        value="Option 4"
        label="Option 4"
        color="success"
        solid
      />
      <V-Checkbox
        v-model="options"
        value="Option 5"
        label="Option 5"
        color="warning"
        solid
      />
      <V-Checkbox
        v-model="options"
        value="Option 6"
        label="Option 6"
        color="danger"
        solid
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 1"
      label="Option 1"
      solid
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 2"
      label="Option 2"
      color="primary"
      solid
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 3"
      label="Option 3"
      color="info"
      solid
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 4"
      label="Option 4"
      color="success"
      solid
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 5"
      label="Option 5"
      color="warning"
      solid
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 6"
      label="Option 6"
      color="danger"
      solid
    />
  </V-Control>
</V-Field>

<!--/example-->
