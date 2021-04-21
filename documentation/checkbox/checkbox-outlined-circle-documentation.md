---
state:
  options:
    - 'Option 2'
---

### Outlined circle

Vuero checkboxes can be circles instead of squares. Simply add the `circle`
attribute to your checkbox element.
See the code example for more details about usage.

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
        circle
      />
      <V-Checkbox
        v-model="options"
        value="Option 3"
        label="Option 3"
        color="info"
        circle
      />
      <V-Checkbox
        v-model="options"
        value="Option 4"
        label="Option 4"
        color="success"
        circle
      />
      <V-Checkbox
        v-model="options"
        value="Option 5"
        label="Option 5"
        color="warning"
        circle
      />
      <V-Checkbox
        v-model="options"
        value="Option 6"
        label="Option 6"
        color="danger"
        circle
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
      circle
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 2"
      label="Option 2"
      color="primary"
      circle
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 3"
      label="Option 3"
      color="info"
      circle
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 4"
      label="Option 4"
      color="success"
      circle
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 5"
      label="Option 5"
      color="warning"
      circle
    />
    <V-Checkbox
      v-model="frontmatter.state.options"
      value="Option 6"
      label="Option 6"
      color="danger"
      circle
    />
  </V-Control>
</V-Field>

<!--/example-->
