---
state:
  options:
    - 'Option 2'
    - 'Option 7'
---

### VAnimatedCheckbox

Vuero provides nicely styled switch segment when you need to
display such control in your forms. Vuero `VAnimatedCheckbox` component have
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
  <VField grouped>
    <VFlex column-gap="1rem">
      <VControl>
        <VAnimatedCheckbox v-model="frontmatter.state.options" value="Option 1" />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 2" color="primary" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 3" color="success" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 4" color="info" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 5" color="warning" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 6" color="danger" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 7" color="purple" checked />
      </VControl>
    </VFlex>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped horizontal>
  <VFlex column-gap="1rem">
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 1"
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 2"
        color="primary"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 3"
        color="success"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 4"
        color="info"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 5"
        color="warning"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 6"
        color="danger"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 7"
        color="purple"
        checked
      />
    </VControl>
  </VFlex>
</VField>

<!--/example-->
