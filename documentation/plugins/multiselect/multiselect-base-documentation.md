---
optionsSingle:
  - batman
  - robin
  - joker
state:
  valueSingle: 0
---

### Single Select

Vuero is integrated with `Vue Multiselect`, a vue 3 select single, multiple and
tags input library. You can check the plugin documentation on
[Github](https://github.com/vueform/multiselect).
You can change the `<Multiselect />` component radius by adding the `is-curved`
or `is-rounded` class to the parent `<V-Field />` component.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from '@vueform/multiselect'
const valueSingle = ref(0)
const optionsSingle = ref(['Batman', 'Robin', 'Joker'])
</script>

<template>
  <V-Field class="is-curved-select">
    <V-Control>
      <Multiselect
        v-model="valueSingle"
        :options="optionsSingle"
        placeholder="Select an option"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <V-Field>
      <V-Control>
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-curved-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-rounded-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
