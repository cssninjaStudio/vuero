---
state:
  options:
    - 'Option 2'
---

### Checkbox solid

Vuero provides default styled checkboxes in 2 main styles,
`outlined` and `solid`. Those checkboxes also support all main colors.
The available modifiers are `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2'])
</script>

<template>
  <V-Field>
    <V-Control>
      <label class="checkbox is-solid">
        <input v-model="options" type="checkbox" value="Option 1" />
        <span></span>
        Option 1
      </label>
      <label class="checkbox is-solid is-primary">
        <input v-model="options" type="checkbox" value="Option 2" />
        <span></span>
        Option 2
      </label>
      <label class="checkbox is-solid is-info">
        <input v-model="options" type="checkbox" value="Option 3" />
        <span></span>
        Option 3
      </label>
      <label class="checkbox is-solid is-success">
        <input v-model="options" type="checkbox" value="Option 4" />
        <span></span>
        Option 4
      </label>
      <label class="checkbox is-solid is-warning">
        <input v-model="options" type="checkbox" value="Option 5" />
        <span></span>
        Option 5
      </label>
      <label class="checkbox is-solid is-danger">
        <input v-model="options" type="checkbox" value="Option 6" />
        <span></span>
        Option 6
      </label>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <label class="checkbox is-solid">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 1" />
      <span></span>
      Option 1
    </label>
    <label class="checkbox is-solid is-primary">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 2" />
      <span></span>
      Option 2
    </label>
    <label class="checkbox is-solid is-info">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 3" />
      <span></span>
      Option 3
    </label>
    <label class="checkbox is-solid is-success">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 4" />
      <span></span>
      Option 4
    </label>
    <label class="checkbox is-solid is-warning">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 5" />
      <span></span>
      Option 5
    </label>
    <label class="checkbox is-solid is-danger">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 6" />
      <span></span>
      Option 6
    </label>
  </V-Control>
</V-Field>

<!--/example-->
