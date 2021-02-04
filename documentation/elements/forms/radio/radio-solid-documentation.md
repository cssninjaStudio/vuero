---
state:
  selected: 'Choice 1'
---

### Radios solid

Vuero provides default styled radio buttons in 2 main styles,
`outlined` and `solid`. Those radio buttons also support all main colors.
The available modifiers are `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('Choice 1')
</script>

<template>
  <V-Field>
    <V-Control>
      <label class="radio is-solid">
        <input
          v-model="selected"
          value="Choice 1"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 1
      </label>
      <label class="radio is-solid is-primary">
        <input
          v-model="selected"
          value="Choice 2"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 2
      </label>
      <label class="radio is-solid is-info">
        <input
          v-model="selected"
          value="Choice 3"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 3
      </label>
      <label class="radio is-solid is-success">
        <input
          v-model="selected"
          value="Choice 4"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 4
      </label>
      <label class="radio is-solid is-warning">
        <input
          v-model="selected"
          value="Choice 5"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 5
      </label>
      <label class="radio is-solid is-danger">
        <input
          v-model="selected"
          value="Choice 6"
          type="radio"
          name="solid_radio"
        />
        <span></span>
        Choice 6
      </label>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <label class="radio is-solid">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 1"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 1
    </label>
    <label class="radio is-solid is-primary">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 2"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 2
    </label>
    <label class="radio is-solid is-info">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 3"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 3
    </label>
    <label class="radio is-solid is-success">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 4"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 4
    </label>
    <label class="radio is-solid is-warning">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 5"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 5
    </label>
    <label class="radio is-solid is-danger">
      <input
        v-model="frontmatter.state.selected"
        value="Choice 6"
        type="radio"
        name="solid_radio"
      />
      <span></span>
      Choice 6
    </label>
  </V-Control>
</V-Field>

<!--/example-->
