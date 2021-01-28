### Multiselect Object

The `<Multiselect />` component can receive data with his `options` props. You
can either pass an `Array` or `Object` to the `options` props. You can also
activate the `multiple` mode by setting the `mode` prop to `mode="multiple"`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from '@vueform/multiselect'
const valueMultipleObject = ref(['robin'])
const optionMultipleObject = ref({
  batman: 'Batman',
  robin: 'Robin',
  joker: 'Joker',
})
</script>

<template>
  <V-Field>
    <V-Control>
      <Multiselect
        v-model="valueMultipleObject"
        mode="multiple"
        :options="optionMultipleObject"
        placeholder="Select options"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->
