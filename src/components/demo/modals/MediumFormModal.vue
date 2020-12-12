<script lang="ts">
import { defineComponent } from 'vue'

const MediumFormModal = defineComponent({
  name: 'MediumFormModal',
  components: {},
  setup() {
    // MediumFormModal - Composition API

    return {}
  },
})

export default MediumFormModal
</script>

<template>
  <div id="demo-medium-form-modal" class="modal h-modal is-medium">
    <div class="modal-background h-modal-close"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Horizontal Form</h3>
          <button class="h-modal-close ml-auto" aria-label="close">
            <i data-feather="x"></i>
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
            <form class="modal-form">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Username *</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Username" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Email *</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Username" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Comment *</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea"
                        rows="4"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
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