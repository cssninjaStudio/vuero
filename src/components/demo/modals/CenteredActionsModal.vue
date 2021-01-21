<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['close'])
</script>

<template>
  <div
    id="demo-centered-actions-modal"
    :class="[open && 'is-active']"
    class="modal h-modal"
  >
    <div class="modal-background h-modal-close" @click="emit('close')"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Did you know?</h3>
          <button
            class="h-modal-close ml-auto"
            aria-label="close"
            @click="emit('close')"
          >
            <i class="iconify" data-icon="feather:x"></i>
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
            <div class="section-placeholder">
              <div class="placeholder-content">
                <img src="/images/placeholders/huro-1.svg" alt="" />
                <h3 class="dark-inverted">Go Premium</h3>
                <p>Unlock more features and business tools by going premium</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-foot is-centered">
          <a
            class="button h-button is-rounded h-modal-close"
            @click="emit('close')"
            >Cancel</a
          >
          <a class="button h-button is-primary is-raised is-rounded">Confirm</a>
        </div>
      </div>
    </div>
  </div>
</template>
