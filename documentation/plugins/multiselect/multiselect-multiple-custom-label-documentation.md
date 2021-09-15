---
optionMultipleObject:
  batman: Batman
  robin: Robin
  joker: Joker
valueMultipleObject:
  - robin
---

### Custom label

The `<Multiselect />` component in multiple mode has a default label when you
start selecting options. You can change the way the message is formatted by
using the `#multiplelabel` custom slot to configure your message.

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
  <VField class="demo-field mb-6">
    <VControl>
      <Multiselect
        v-model="valueMultipleObject"
        mode="multiple"
        placeholder="Select your characters"
        :options="optionMultipleObject"
      >
        <template #multiplelabel="{ values }">
          <div class="multiselect-multiple-label">
            {{ values.length }} characters selected
          </div>
        </template>
      </Multiselect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField>
      <VControl>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          placeholder="Select your characters"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }} characters selected
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField class="is-curved-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          placeholder="Select your characters"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }} characters selected
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField class="is-rounded-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          placeholder="Select your characters"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }} characters selected
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
