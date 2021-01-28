### Single Select

Vuero is integrated with `Vue Multiselect`, a vue 3 select single, multiple and
tags input library. You can check the plugin documentation on
<a href="https://github.com/vueform/multiselect" target="_blank">Github</a>.
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
  <V-Field class="is-curved-select mb-6">
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
