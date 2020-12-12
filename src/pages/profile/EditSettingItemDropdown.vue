<script lang="ts">
import { defineComponent } from 'vue'

const EditSettingItemDropdown = defineComponent({
  name: 'EditSettingItemDropdown',
  components: {},
  setup() {
    // EditSettingItemDropdown - Composition API

    return {}
  },
})

export default EditSettingItemDropdown
</script>

<template>
  <div
    class="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"
  >
    <div class="is-trigger" aria-haspopup="true">
      <i data-feather="more-vertical"></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="meta">
            <span class="dark-inverted">Edit</span>
            <span>Edit this record</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-trash-can-alt"></i>
          </div>
          <div class="meta">
            <span class="dark-inverted">Delete</span>
            <span>Delete this record</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>