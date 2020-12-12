<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation2 = defineComponent({
  name: 'WebappConversation2',
  components: {},
  setup() {
    // WebappConversation2 - Composition API

    return {}
  },
})

export default WebappConversation2
</script>

<template>
  <div id="webapp-conversation-2" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <i data-feather="menu"></i>
      </button>
      <div class="chat-area-title">Alejandro B.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/39.jpg"
          alt=""
          data-user-popover="33"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/39.jpg"
            alt=""
            data-user-popover="33"
          />
          <div class="chat-msg-date">Sent at 9:34am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Hey Erik, I have some feedback to share with you.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="assets/img/photo/demo/apps/12.jpg"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            Although, Iam not a specialist, but I reviewed those and they look
            great.
          </div>
          <div class="chat-msg-text">
            We should make a couple of changes though.
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
          <div class="chat-msg-date">Sent at 9:42am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Sounds good. Wanna meet or just go through it here?
          </div>
          <div class="chat-msg-text">I mean Iam free right now.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/39.jpg"
            alt=""
            data-user-popover="33"
          />
          <div class="chat-msg-date">Sent at 9:43am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Nah, I have a meeting that starts in 5.
          </div>
          <div class="chat-msg-text">
            Let's schedule something for this afternoon.
          </div>
          <div class="chat-msg-text">And send me a calendar invite.</div>
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
          <div class="chat-msg-date">Sent at 9:43am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Sounds good. Will do.</div>
          <div class="chat-msg-text">Done.</div>
        </div>
      </div>
    </div>
  </div>
</template>