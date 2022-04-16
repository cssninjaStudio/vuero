---
tagsOptions:
  - value: batman
    label: Batman
  - value: robin
    label: Robin
  - value: joker
    label: Joker
tagsValue: []
---

### Tags Input

The `<Multiselect />` component can be turned into a fully functional tags
input component. In order to do that, set the `mode` prop to `tags` when
instantiating the plugin. You can also enable search using the
`:searchable="true"` prop and allow creation of new tags by using the
`:create-tag="true"` prop.

<!--code-->

```vue
<script setup lang="ts">
const tagsValue = []
const tagsOptions = [
  { value: 'batman', label: 'Batman' },
  { value: 'robin', label: 'Robin' },
  { value: 'joker', label: 'Joker' },
]
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        :id="id"
        v-model="tagsValue"
        mode="tags"
        :searchable="true"
        :create-tag="true"
        :options="tagsOptions"
        placeholder="Add tags"
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
          :id="id"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="Add tags"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :id="id"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="Add tags"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :id="id"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="Add tags"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
