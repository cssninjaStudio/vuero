---
state:
  options: false
---

### Complex object value

You can use complex object values to store the state of the checkbox by using
the `trueValue` and `falseValue` props.

Note that alternative checkbox style with `solid` attribute.
Those checkboxes also support all main colors.
The available modifiers are `primary`, `success`, `info`,
`warning`, `danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(false)
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option1', label: 'Option 1' }"
        label="Option 1"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option2', label: 'Option 2' }"
        label="Option 2"
        color="primary"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option3', label: 'Option 3' }"
        label="Option 3"
        color="info"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option4', label: 'Option 4' }"
        label="Option 4"
        color="success"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option5', label: 'Option 5' }"
        label="Option 5"
        color="warning"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option6', label: 'Option 6' }"
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
      :trueValue="{ name: 'option1', label: 'Option 1' }"
      label="Option 1"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option2', label: 'Option 2' }"
      label="Option 2"
      color="primary"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option3', label: 'Option 3' }"
      label="Option 3"
      color="info"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option4', label: 'Option 4' }"
      label="Option 4"
      color="success"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option5', label: 'Option 5' }"
      label="Option 5"
      color="warning"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option6', label: 'Option 6' }"
      label="Option 6"
      color="danger"
      solid
    />
  </VControl>
</VField>

<!--/example-->
