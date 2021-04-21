---
state:
  options:
    - 'Option 2'
    - 'Option 7'
---

### V-AnimatedCheckbox

Vuero provides nicely styled switch segment when you need to
display such control in your forms. Vuero `V-AnimatedCheckbox` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2', 'Option 7'])
</script>

<template>
  <V-Field grouped>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 1"
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 2"
        color="primary"
        checked
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 3"
        color="success"
        checked
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 4"
        color="info"
        checked
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 5"
        color="warning"
        checked
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 6"
        color="danger"
        checked
      />
    </V-Control>
    <V-Control>
      <V-AnimatedCheckbox
        v-model="options"
        value="Option 7"
        color="purple"
        checked
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 1"
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 2"
      color="primary"
      checked
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 3"
      color="success"
      checked
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 4"
      color="info"
      checked
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 5"
      color="warning"
      checked
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 6"
      color="danger"
      checked
    />
  </V-Control>
  <V-Control>
    <V-AnimatedCheckbox
      v-model="frontmatter.state.options"
      value="Option 7"
      color="purple"
      checked
    />
  </V-Control>
</V-Field>

<!--/example-->
