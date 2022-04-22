---
optionsSingle:
  - batman
  - robin
  - joker
state:
  valueSingle:
---

### Autocomplete

Vuero is integrated with `Vue Multiselect`, a vue 3 select single, multiple and
tags input library. You can check the plugin documentation on
[Github](https://github.com/vueform/multiselect). You can transform the
component into an autocomplete by adding the `:searchable="true"` prop. Check
the code example for more details.

<!--code-->

```vue
<script setup lang="ts">
const valueSingle = []
const optionsSingle = ['Batman', 'Robin', 'Joker']
</script>

<template>
  <VField v-slot="{ id }" class="is-autocomplete-select">
    <VControl icon="feather:search">
      <Multiselect
        v-model="valueSingle"
        :attrs="{ id }"
        :options="optionsSingle"
        placeholder="Search heroes..."
        :searchable="true"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
