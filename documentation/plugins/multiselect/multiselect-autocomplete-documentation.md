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
  <V-Field class="is-autocomplete-select">
    <V-Control icon="feather:search">
      <Multiselect
        v-model="valueSingle"
        :options="optionsSingle"
        placeholder="Search heroes..."
        :searchable="true"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <V-Field class="is-autocomplete-select">
      <V-Control icon="feather:search">
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-curved-select is-autocomplete-select">
      <V-Control icon="feather:search">
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-rounded-select is-autocomplete-select">
      <V-Control icon="feather:search">
        <Multiselect
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="Search heroes..."
          :searchable="true"
        />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
