---
state:
  options:
    - 'Option 2'
---

### Solid circle

Vuero checkboxes can be circles instead of squares. Simply add the `is-circle`
modifier class to your checkbox element.
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
      <label class="checkbox is-solid is-circle">
        <input v-model="options" type="checkbox" value="Option 1" />
        <span></span>
        Option 1
      </label>
      <label class="checkbox is-solid is-circle is-primary">
        <input v-model="options" type="checkbox" value="Option 2" />
        <span></span>
        Option 2
      </label>
      <label class="checkbox is-solid is-circle is-info">
        <input v-model="options" type="checkbox" value="Option 3" />
        <span></span>
        Option 3
      </label>
      <label class="checkbox is-solid is-circle is-success">
        <input v-model="options" type="checkbox" value="Option 4" />
        <span></span>
        Option 4
      </label>
      <label class="checkbox is-solid is-circle is-warning">
        <input v-model="options" type="checkbox" value="Option 5" />
        <span></span>
        Option 5
      </label>
      <label class="checkbox is-solid is-circle is-danger">
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
    <label class="checkbox is-solid is-circle">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 1" />
      <span></span>
      Option 1
    </label>
    <label class="checkbox is-solid is-circle is-primary">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 2" />
      <span></span>
      Option 2
    </label>
    <label class="checkbox is-solid is-circle is-info">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 3" />
      <span></span>
      Option 3
    </label>
    <label class="checkbox is-solid is-circle is-success">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 4" />
      <span></span>
      Option 4
    </label>
    <label class="checkbox is-solid is-circle is-warning">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 5" />
      <span></span>
      Option 5
    </label>
    <label class="checkbox is-solid is-circle is-danger">
      <input v-model="frontmatter.state.options" type="checkbox" value="Option 6" />
      <span></span>
      Option 6
    </label>
  </V-Control>
</V-Field>

<!--/example-->
