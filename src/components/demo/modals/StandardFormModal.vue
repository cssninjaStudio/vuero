<script lang="ts">
import { defineComponent } from 'vue'

const StandardFormModal = defineComponent({
  name: 'StandardFormModal',
  components: {},
  setup() {
    // StandardFormModal - Composition API

    return {}
  },
})

export default StandardFormModal
</script>

<template>
  <div id="demo-standard-form-modal" class="modal h-modal">
    <div class="modal-background h-modal-close"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Leave a Comment</h3>
          <button class="h-modal-close ml-auto" aria-label="close">
            <i data-feather="x"></i>
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
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
                  <input
                    type="text"
                    class="input"
                    placeholder="Email Address"
                  />
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
          </div>
        </div>
        <div class="modal-card-foot is-end">
          <a class="button h-button is-rounded h-modal-close">Cancel</a>
          <a class="button h-button is-primary is-raised is-rounded">Publish</a>
        </div>
      </div>
    </div>
  </div>
</template>