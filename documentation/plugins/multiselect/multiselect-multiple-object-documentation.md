---
optionMultipleObject:
  batman: Batman
  robin: Robin
  joker: Joker
valueMultipleObject:
  - robin
---

### Options object

The `<Multiselect />` component can receive data with his `options` props. You
can either pass an `Array` or `Object` to the `options` props. You can also
activate the `multiple` mode by setting the `mode` prop to `mode="multiple"`.

<!--code-->

```vue
<script setup lang="ts">
const valueMultipleObject = ['robin']
const optionMultipleObject = {
  batman: 'Batman',
  robin: 'Robin',
  joker: 'Joker',
}
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="valueMultipleObject"
        :attrs="{ id }"
        mode="multiple"
        :options="optionMultipleObject"
        placeholder="Select options"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
