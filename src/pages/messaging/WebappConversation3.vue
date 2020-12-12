<script lang="ts">
import { defineComponent } from 'vue'

const WebappConversation3 = defineComponent({
  name: 'WebappConversation3',
  components: {},
  setup() {
    // WebappConversation3 - Composition API

    return {}
  },
})

export default WebappConversation3
</script>

<template>
  <div id="webapp-conversation-3" class="chat-area-content is-active">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
      >
        <i data-feather="menu"></i>
      </button>
      <div class="chat-area-title">Work Group</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/8.jpg"
          alt=""
          data-user-popover="3"
        />
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/13.jpg"
          alt=""
          data-user-popover="6"
        />
        <img
          class="chat-area-profile"
          src="https://via.placeholder.com/150x150"
          data-demo-src="assets/img/avatars/photos/19.jpg"
          alt=""
          data-user-popover="17"
        />
        <span>
          <span>4</span>
        </span>
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/13.jpg"
            alt=""
            data-user-popover="6"
          />
          <div class="chat-msg-date">Sent at 4:15pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Just found this marketing tool.</div>
          <div class="chat-msg-text">
            <img
              src="https://via.placeholder.com/400x300"
              data-demo-src="assets/img/photo/demo/demo-apps/1.jpg"
              alt=""
            />
          </div>
          <div class="chat-msg-text">
            Features look nice. We could give it a try? Anyone want to review?
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
          <div class="chat-msg-date">Sent at 4:15pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Sure, I'll take a look real quick.</div>
          <div class="chat-msg-text">
            Iam also going to look at the available plans.
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/19.jpg"
            alt=""
            data-user-popover="17"
          />
          <div class="chat-msg-date">Sent at 4:27pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            I know this one, we were using it in my previous company. It's
            reliable and fast 😊.
          </div>
          <div class="chat-msg-text">
            I mean it's worth a try and we're in need right now.
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
          <div class="chat-msg-date">Sent at 4:31pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Yeah but I need to test some use cases.
          </div>
          <div class="chat-msg-text">Can't sign up before being sure.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/12.jpg"
            alt=""
            data-user-popover="2"
          />
          <div class="chat-msg-date">Sent at 4:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Haha, don't be scare Erik</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/7.jpg"
            alt=""
            data-user-popover="0"
          />
          <div class="chat-msg-date">Sent at 4:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Yay, Erik going chicken mode again 😂😂😂
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
          <div class="chat-msg-date">Sent at 4:33pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Omg, I just can't help it 😂</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/32.jpg"
            alt=""
            data-user-popover="28"
          />
          <div class="chat-msg-date">Sent at 4:39pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            This is getting funnier and funnier. You gotta love dat team 🥰
          </div>
        </div>
      </div>
    </div>
  </div>
</template>