### Modal Options

The `<V-Modal />` component behavior can be customized. Use the `noscroll`
prop to disable page scrolling when the modal is open.
You also can use the `noclose` prop to prevent modal from closing
if the user click on the background overlay.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <V-Button bold @click="isOpen = true"> Open Modal </V-Button>

  <V-Modal
    :open="isOpen"
    size="small"
    actions="center"
    noscroll
    noclose
    @close="isOpen = false"
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
