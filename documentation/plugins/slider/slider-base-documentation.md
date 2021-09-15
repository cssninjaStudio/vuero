---
state:
  value: 0
---

### Rounded tooltip

Vuero provides a customisable `<Slider />` component. You can check the plugin
documentation on [Github](https://github.com/vueform/slider). Use the
`has-rounded-tooltip`class on the `<VField />` component to show a rounded
tooltip.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField class="has-rounded-tooltip">
    <VControl>
      <Slider v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <VField class="pt-5 px-4 has-rounded-tooltip">
        <VControl>
            <Slider v-model="frontmatter.state.value" />
        </VControl>
    </VField>
  </div>
</div>

<!--/example-->
