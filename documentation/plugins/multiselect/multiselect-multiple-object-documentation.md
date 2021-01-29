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

<!--example-->

<div class="columns">
  <div class="column is-4">
    <V-Field>
      <V-Control>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-curved-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-rounded-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="Select options"
        />
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
