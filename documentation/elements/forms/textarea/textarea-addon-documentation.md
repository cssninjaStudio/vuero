---
state:
  textarea: ''
---

### Textarea addon

Textareas that are wrapped by a control and a field can have a single
bottom addon. You can use it to display a toolbar or any type of user actions.
Use the `textaddon` prop on the `<V-Field />` and the second `<V-Control />`
component. Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <V-Field textaddon>
    <V-Control>
      <textarea
        v-model="textarea"
        class="textarea"
        rows="4"
        placeholder="A longer message..."
      ></textarea>
    </V-Control>

    <V-Control textaddon>
      <div class="start">
        <div class="avatar-stack">
          <V-Avatar picture="/demo/avatars/7.jpg" size="small" />
          <V-Avatar initials="JO" color="info" size="small" />
          <V-Avatar picture="/demo/avatars/8.jpg" size="small" />
        </div>
      </div>
      <div class="end">
        <V-Button color="primary" raised>Post Comment</V-Button>
      </div>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field textaddon>
  <V-Control>
    <textarea
      v-model="frontmatter.state.textarea"
      class="textarea"
      rows="4"
      placeholder="A longer message..."
    ></textarea>
  </V-Control>
  <V-Control textaddon>
    <div class="start">
      <div class="avatar-stack">
        <V-Avatar picture="/demo/avatars/7.jpg" size="small" />
        <V-Avatar initials="JO" color="info" size="small" />
        <V-Avatar picture="/demo/avatars/8.jpg" size="small" />
      </div>
    </div>
    <div class="end">
      <V-Button color="primary" raised>Post Comment</V-Button>
    </div>
  </V-Control>
</V-Field>

<!--/example-->
