### Modal Forms

Vuero `<V-Modal />` component can be used for anything, including displaying
and handling forms. Use the `content` slot `<template #content></template>`
to inject any kind of content inside the modal.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const smallFormOpen = ref(false)
</script>

<template>
  <V-Button bold @click="smallFormOpen = true"> Open Modal </V-Button>

  <V-Modal
    :open="smallFormOpen"
    title="Leave a Comment"
    size="small"
    actions="right"
    @close="smallFormOpen = false"
  >
    <template #content>
      <form class="modal-form">
        <div class="field">
          <label>Username *</label>
          <div class="control">
            <input type="text" class="input" placeholder="Username" />
          </div>
        </div>
        <div class="field">
          <label>Email *</label>
          <div class="control">
            <input type="text" class="input" placeholder="Email Address" />
          </div>
        </div>
        <div class="field">
          <label>Comment *</label>
          <div class="control">
            <textarea
              class="textarea"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>
        </div>
      </form>
    </template>
    <template #action>
      <V-Button color="primary" raised>Publish</V-Button>
    </template>
  </V-Modal>
</template>
```

<!--/code-->
