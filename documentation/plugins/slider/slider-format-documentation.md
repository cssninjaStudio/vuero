---
state:
  value: 54
---

### Tooltip format

The `<Slider />` component allows to pass a formatting function to its `format`
property. You can return the tooltip value with the format that you want.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(54)
const format = (value) => {
  return `${value}%`
}
</script>

<template>
  <V-Field class="has-curved-tooltip">
    <V-Control>
      <Slider v-model="value" :format="(value) => `${value}%`" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <V-Field class="pt-5 px-4 has-curved-tooltip">
      <V-Control>
        <Slider 
          v-model="frontmatter.state.value" 
          :format="(value) => value + '%'" 
        />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
