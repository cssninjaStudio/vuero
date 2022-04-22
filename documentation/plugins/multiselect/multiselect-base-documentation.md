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
[Github](https://github.com/vueform/multiselect). You can change the
`<Multiselect />` component radius by adding the `is-curved` or `is-rounded`
class to the parent `<VField />` component.

<!--code-->

```vue
<script setup lang="ts">
const valueSingle = 0
const optionsSingle = ['Batman', 'Robin', 'Joker']
</script>

<template>
  <VField v-slot="{ id }" class="is-curved-select">
    <VControl>
      <Multiselect
        v-model="valueSingle"
        :attrs="{ id }"
        :options="optionsSingle"
        placeholder="Select an option"
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
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Select an option"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
