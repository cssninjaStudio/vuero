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
  <V-Field>
    <V-Control>
      <Multiselect
        v-model="disabledValue"
        mode="multiple"
        :options="disabledOptions"
        placeholder="Select options"
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
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-curved-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-rounded-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
