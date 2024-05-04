---
state:
  input: 3
---

### Adjusting the size

You can adjust the size of the rating component by using the `size` prop which

<!--code-->

```vue
<script setup lang="ts">

const input = ref(2)
</script>

<template>
  <div
    class="is-flex is-justify-content-space-between is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating
          v-model="input"
          label="Small"
          size="small"
        />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="Default" />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating
          v-model="input"
          label="Medium"
          size="medium"
        />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating
          v-model="input"
          label="Large"
          size="large"
        />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating
          v-model="input"
          label="XLarge"
          size="xlarge"
        />
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div
  class="is-flex is-flex-wrap-wrap"
  :style="{ gap: '2rem' }"
>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="Small" size="small" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="Default" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="Medium" size="medium" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="Large" size="large" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="XLarge" size="xlarge" />
    </VControl>
  </VField>
</div>

<!--/example-->
