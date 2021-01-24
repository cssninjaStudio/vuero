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
    id="demo-standard-form-modal"
    :class="[open && 'is-active']"
    class="modal v-modal"
  >
    <div class="modal-background v-modal-close" @click="emit('close')"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Leave a Comment</h3>
          <button
            class="v-modal-close ml-auto"
            aria-label="close"
            @click="emit('close')"
          >
            <i class="iconify" data-icon="feather:x"></i>
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
          <a
            class="button v-button is-rounded v-modal-close"
            @click="emit('close')"
            >Cancel</a
          >
          <a class="button v-button is-primary is-raised is-rounded">Publish</a>
        </div>
      </div>
    </div>
  </div>
</template>
