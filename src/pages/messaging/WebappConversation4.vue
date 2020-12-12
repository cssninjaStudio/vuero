<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation4 = defineComponent({
  name: 'WebappConversation4',
  components: {},
  setup() {
    // WebappConversation4 - Composition API

    return {}
  },
})

export default WebappConversation4
</script>

<template>
  <div id="webapp-conversation-4" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <i data-feather="menu"></i>
      </button>
      <div class="chat-area-title">Alice C.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/7.jpg"
          alt=""
          data-user-popover="0"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/7.jpg"
            alt=""
            data-user-popover="0"
          />
          <div class="chat-msg-date">Sent at 10:11am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Hey erik I have a couple of screens to show you.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400X300"
              data-demo-src="assets/img/photo/demo/apps/11.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            This one is pretty colorful, I like it.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400X300"
              data-demo-src="assets/img/photo/demo/apps/9.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">I like the curves in this one.</div>
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
          <div class="chat-msg-date">Sent at 10:44am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Looks Good.</div>
          <div class="chat-msg-text">Want to sync?</div>
        </div>
      </div>
    </div>
  </div>
</template>