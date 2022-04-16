---
state:
  textarea: ''
---

### VTextarea addon

`VTextarea` that are wrapped by a control and a field can have a single
bottom addon. You can use it to display a toolbar or any type of user actions.
Use the `textaddon` prop on the `<VField />` and the second `<VControl />`
component. Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <VField textaddon>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="A longer message..."
      ></VTextarea>
    </VControl>

    <VControl textaddon>
      <div class="start">
        <div class="avatar-stack">
          <VAvatar picture="/demo/avatars/7.jpg" size="small" />
          <VAvatar initials="JO" color="info" size="small" />
          <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" />
        </div>
      </div>
      <div class="end">
        <VButton color="primary" raised>Post Comment</VButton>
      </div>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField textaddon>
  <VControl>
    <VTextarea
      v-model="frontmatter.state.textarea"
      rows="4"
      placeholder="A longer message..."
    ></VTextarea>
  </VControl>
  <VControl textaddon>
    <div class="start">
      <div class="avatar-stack">
        <VAvatar picture="/demo/avatars/7.jpg" size="small" />
        <VAvatar initials="JO" color="info" size="small" />
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" />
      </div>
    </div>
    <div class="end">
      <VButton color="primary" raised>Post Comment</VButton>
    </div>
  </VControl>
</VField>

<!--/example-->
