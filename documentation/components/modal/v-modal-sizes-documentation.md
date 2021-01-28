### Modal Sizes

The `<V-Modal />` component can have different sizes. use the size `true`
prop to change the modal size. Available sizes are: `small`, default,
`medium`, `large` and `big`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const centeredActionsOpen = ref(false)
</script>

<template>
  <V-Button bold @click="centeredActionsOpen = true"> Open Modal </V-Button>

  <V-Modal
    :open="centeredActionsOpen"
    size="small"
    actions="center"
    @close="centeredActionsOpen = false"
  >
    <template #content>
      <V-PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      />
    </template>
    <template #action>
      <V-Button color="primary" raised>Confirm</V-Button>
    </template>
  </V-Modal>
</template>
```

<!--/code-->
