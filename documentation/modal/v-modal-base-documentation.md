### VModal

Vuero ships with a dead simple and versatile `<VModal />` component.
The VModal component has 2 available `slots`: one for the `content`,
so you can put anything you want inside, and one for the primary `action`.
Check the code example for more details.

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
