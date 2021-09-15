### Modal Sizes

The `<VModal />` component can have different sizes. use the size `true`
prop to change the modal size. Available sizes are: `small`, default,
`medium`, `large` and `big`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const centeredActionsOpen = ref(false)
</script>

<template>
  <VButton bold @click="centeredActionsOpen = true"> Open Modal </VButton>

  <VModal
    :open="centeredActionsOpen"
    size="small"
    actions="center"
    @close="centeredActionsOpen = false"
  >
    <template #content>
      <VPlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      />
    </template>
    <template #action>
      <VButton color="primary" raised>Confirm</VButton>
    </template>
  </VModal>
</template>
```

<!--/code-->
