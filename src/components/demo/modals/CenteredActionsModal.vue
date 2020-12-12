<script lang="ts">
import { defineComponent } from 'vue'

const CenteredActionsModal = defineComponent({
  name: 'CenteredActionsModal',
  components: {},
  setup() {
    // CenteredActionsModal - Composition API

    return {}
  },
})

export default CenteredActionsModal
</script>

<template>
  <div id="demo-centered-actions-modal" class="modal h-modal">
    <div class="modal-background h-modal-close"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Did you know?</h3>
          <button class="h-modal-close ml-auto" aria-label="close">
            <i data-feather="x"></i>
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
            <div class="section-placeholder">
              <div class="placeholder-content">
                <img src="assets/img/placeholders/huro-1.svg" alt="" />
                <h3 class="dark-inverted">Go Premium</h3>
                <p>Unlock more features and business tools by going premium</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-foot is-centered">
          <a class="button h-button is-rounded h-modal-close">Cancel</a>
          <a class="button h-button is-primary is-raised is-rounded">Confirm</a>
        </div>
      </div>
    </div>
  </div>
</template>