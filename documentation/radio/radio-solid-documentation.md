---
state:
  selected: 'value_2'
---

### Radios solid

Vuero provides default styled radio buttons in 2 main styles,
`outlined` and `solid`. Those radio buttons also support all main colors.
The available modifiers are `primary`, `success`, `info`,
`warning`, `danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('value_2')
</script>

<template>
  <VField>
    <VControl>
      <VRadio
        v-model="selected"
        value="value_1"
        label="Choice 1"
        name="solid_radio"
        solid
      />

      <VRadio
        v-model="selected"
        value="value_2"
        label="Choice 2"
        name="solid_radio"
        color="primary"
        solid
      />

      <VRadio
        v-model="selected"
        value="value_3"
        label="Choice 3"
        name="solid_radio"
        color="info"
        solid
      />

      <VRadio
        v-model="selected"
        value="value_4"
        label="Choice 4"
        name="solid_radio"
        color="success"
        solid
      />

      <VRadio
        v-model="selected"
        value="value_5"
        label="Choice 5"
        name="solid_radio"
        color="warning"
        solid
      />

      <VRadio
        v-model="selected"
        value="value_6"
        label="Choice 6"
        name="solid_radio"
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
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_1"
      label="Choice 1"
      name="solid_radio"
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_2"
      label="Choice 2"
      name="solid_radio"
      color="primary"
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_3"
      label="Choice 3"
      name="solid_radio"
      color="info"
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_4"
      label="Choice 4"
      name="solid_radio"
      color="success"
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_5"
      label="Choice 5"
      name="solid_radio"
      color="warning"
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_6"
      label="Choice 6"
      name="solid_radio"
      color="danger"
      solid
    />
  </VControl>
</VField>

<!--/example-->
