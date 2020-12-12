<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation8 = defineComponent({
  name: 'WebappConversation8',
  components: {},
  setup() {
    // WebappConversation8 - Composition API

    return {}
  },
})

export default WebappConversation8
</script>

<template>
  <div id="webapp-conversation-8" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <i data-feather="menu"></i>
      </button>
      <div class="chat-area-title">Melany W.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/25.jpg"
          alt=""
          data-user-popover="4"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/25.jpg"
            alt=""
            data-user-popover="7"
          />
          <div class="chat-msg-date">Sent at 9:43pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Just finished implementing this one.</div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="assets/img/photo/demo/apps/13.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            I has some issues with the headers tough.
          </div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/8.jpg"
            alt=""
            data-user-popover="3"
          />
          <div class="chat-msg-date">Sent at 9:43pmpm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Just in time, thanks.</div>
          <div class="chat-msg-text">You have an open PR for that one?</div>
        </div>
      </div>
    </div>
  </div>
</template>