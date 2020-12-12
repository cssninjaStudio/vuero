<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation6 = defineComponent({
  name: 'WebappConversation6',
  components: {},
  setup() {
    // WebappConversation6 - Composition API

    return {}
  },
})

export default WebappConversation6
</script>

<template>
  <div id="webapp-conversation-6" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <i data-feather="menu"></i>
      </button>
      <div class="chat-area-title">Mary L.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/5.jpg"
          alt=""
          data-user-popover="5"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/5.jpg"
            alt=""
            data-user-popover="5"
          />
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Hey Erik!.</div>
          <div class="chat-msg-text">Still down for that movie?</div>
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
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Of course, yeah!</div>
          <div class="chat-msg-text">Can't wait!</div>
        </div>
      </div>
    </div>
  </div>
</template>