### Modal Forms

Vuero `<VModal />` component can be used for anything, including displaying
and handling forms, set the `is` property to change the element used to render
the modal tag. Use the `content` slot `<template #content></template>`
to inject any kind of content inside the modal.

<!--code-->

```vue
<script setup lang="ts">
const smallFormOpen = ref(false)
</script>

<template>
  <VButton bold @click="smallFormOpen = true">
    Open Modal
  </VButton>

  <VModal
    is="form"
    :open="smallFormOpen"
    title="Leave a Comment"
    size="small"
    actions="right"
    @submit.prevent="smallFormOpen = false"
    @close="smallFormOpen = false"
  >
    <template #content>
      <div class="modal-form">
        <div class="field">
          <label>Username *</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="Username"
            >
          </div>
        </div>
        <div class="field">
          <label>Email *</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="Email Address"
            >
          </div>
        </div>
        <div class="field">
          <label>Comment *</label>
          <div class="control">
            <textarea
              class="textarea"
              rows="4"
              placeholder="Your message..."
            />
          </div>
        </div>
      </div>
    </template>
    <template #action>
      <VButton
        type="submit"
        color="primary"
        raised
      >
        Publish
      </VButton>
    </template>
  </VModal>
</template>
```

<!--/code-->
