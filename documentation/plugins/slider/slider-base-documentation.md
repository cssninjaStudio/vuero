---
state:
  value: 0
---

### Rounded tooltip

Vuero provides a customisable `<Slider />` component. You can check the plugin
documentation on [Github](https://github.com/vueform/slider). Use the
`has-rounded-tooltip`class on the `<V-Field />` component to show a rounded
tooltip.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
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
