---
state:
  value:
    - 16
    - 62
---

### Multiple handles

The `<Slider />` component can render multiple tooltips when passing an `array`
to its `v-model` property.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref([16, 62])
</script>

<template>
  <V-Field class="has-rounded-tooltip">
    <V-Control>
      <Slider v-model="value" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <V-Field class="pt-5 px-4 has-rounded-tooltip">
      <V-Control>
        <Slider v-model="frontmatter.state.value" />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
