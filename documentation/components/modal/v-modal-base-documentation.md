### V-Modal

Vuero ships with a dead simple and versatile `<V-Modal />` component.
The V-Modal component has 2 available `slots`: one for the `content`,
so you can put anything you want inside, and one for the primary `action`.
Check the code example for more details.

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
