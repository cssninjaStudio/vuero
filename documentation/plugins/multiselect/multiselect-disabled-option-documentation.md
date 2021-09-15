---
disabledOptions:
  - value: batman
    label: Batman
  - value: robin
    label: Robin
    disabled: true
  - value: joker
    label: Joker
disabledValue:
  - batman
---

### Disabled Option

`<Multiselect />` options can be disabled. Simply pass a `disabled` property
in your options object.

<!--code-->

```vue
<script setup lang="ts">
const disabledValue = ['batman']
const disabledOptions = [
  { value: 'batman', label: 'Batman' },
  { value: 'robin', label: 'Robin', disabled: true },
  { value: 'joker', label: 'Joker' },
]
</script>

<template>
  <VField>
    <VControl>
      <Multiselect
        v-model="disabledValue"
        mode="multiple"
        :options="disabledOptions"
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
    <VField>
      <VControl>
        <Multiselect
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField class="is-curved-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField class="is-rounded-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
