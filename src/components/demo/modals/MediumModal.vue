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
    id="demo-medium-modal"
    :class="[open && 'is-active']"
    class="modal h-modal is-medium"
  >
    <div class="modal-background h-modal-close" @click="emit('close')"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Invitation</h3>
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
                <div class="v-avatar is-xl">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/22.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <img
                    class="badge"
                    src="/images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <h3 class="dark-inverted">You were invited</h3>
                <p>
                  Jimmy H. invited you to join the Heartman &amp; Sons project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-foot is-centered">
          <a
            class="button v-button is-rounded h-modal-close"
            @click="emit('close')"
            >Decline</a
          >
          <a class="button v-button is-primary is-raised is-rounded">Accept</a>
        </div>
      </div>
    </div>
  </div>
</template>
