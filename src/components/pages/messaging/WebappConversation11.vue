<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation11 = defineComponent({
  name: 'WebappConversation11',
  components: {},
  setup() {
    // WebappConversation11 - Composition API

    return {}
  },
})

export default WebappConversation11
</script>

<template>
  <div id="webapp-conversation-11" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <Icon icon="feather:menu" />
      </button>
      <div class="chat-area-title">Greta K.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="/src/assets/images/avatars/photos/13.jpg"
          alt=""
          data-user-popover="6"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/src/assets/images/avatars/photos/13.jpg"
            alt=""
            data-user-popover="6"
          />
          <div class="chat-msg-date">Sent at 7:48pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Here are some screenshots.</div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="/src/assets/images/photo/demo/apps/15.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="/src/assets/images/photo/demo/apps/9.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="/src/assets/images/photo/demo/apps/7.png"
              alt=""
            />
          </div>
          <div class="chat-msg-text">Hope you like them.</div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/src/assets/images/avatars/photos/8.jpg"
            alt=""
            data-user-popover="3"
          />
          <div class="chat-msg-date">Sent at 10:21pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">They look great!</div>
          <div class="chat-msg-text">Thanks for sharing this!</div>
        </div>
      </div>
    </div>
  </div>
</template>