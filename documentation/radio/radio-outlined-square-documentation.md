---
state:
  selected: 'value_2'
---

### Squared outline

Vuero provides default styled radio buttons in 2 main styles,
`outlined` and `solid`. Those radio buttons also support all main colors.
The available modifiers are `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('value_2')
</script>

<template>
  <V-Field>
    <V-Control>
      <V-Radio
        v-model="selected"
        value="value_1"
        label="Choice 1"
        name="outlined_squared_radio"
        square
      />

      <V-Radio
        v-model="selected"
        value="value_2"
        label="Choice 2"
        name="outlined_squared_radio"
        color="primary"
        square
      />

      <V-Radio
        v-model="selected"
        value="value_3"
        label="Choice 3"
        name="outlined_squared_radio"
        color="info"
        square
      />

      <V-Radio
        v-model="selected"
        value="value_4"
        label="Choice 4"
        name="outlined_squared_radio"
        color="success"
        square
      />

      <V-Radio
        v-model="selected"
        value="value_5"
        label="Choice 5"
        name="outlined_squared_radio"
        color="warning"
        square
      />

      <V-Radio
        v-model="selected"
        value="value_6"
        label="Choice 6"
        name="outlined_squared_radio"
        color="danger"
        square
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_1"
      label="Choice 1"
      name="outlined_squared_radio"
      square
    />
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_2"
      label="Choice 2"
      name="outlined_squared_radio"
      color="primary"
      square
    />
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_3"
      label="Choice 3"
      name="outlined_squared_radio"
      color="info"
      square
    />
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_4"
      label="Choice 4"
      name="outlined_squared_radio"
      color="success"
      square
    />
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_5"
      label="Choice 5"
      name="outlined_squared_radio"
      color="warning"
      square
    />
    <V-Radio
      v-model="frontmatter.state.selected"
      value="value_6"
      label="Choice 6"
      name="outlined_squared_radio"
      color="danger"
      square
    />
  </V-Control>
</V-Field>

<!--/example-->
