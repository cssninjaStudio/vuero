<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-3" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">Work Group</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/avatars/svg/vuero-1.svg"
          alt=""
          data-user-popover="3"
          @error.once="onceImageErrored(150)"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="onceImageErrored(150)"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/19.jpg"
          alt=""
          data-user-popover="17"
          @error.once="onceImageErrored(150)"
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
            src="/demo/avatars/13.jpg"
            alt=""
            data-user-popover="6"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:15pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Just found this marketing tool.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/demo-apps/1.jpg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
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
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:15pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Sure, I'll take a look real quick.</div>
          <div class="chat-msg-text">Iam also going to look at the available plans.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/19.jpg"
            alt=""
            data-user-popover="17"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:27pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            I know this one, we were using it in my previous company. It's reliable and
            fast
            <span role="img" aria-label="Smiling Face with Smiling Eyes">😊</span>.
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
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:31pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Yeah but I need to test some use cases.</div>
          <div class="chat-msg-text">Can't sign up before being sure.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/12.jpg"
            alt=""
            data-user-popover="2"
            @error.once="onceImageErrored(150)"
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
            src="/demo/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Yay, Erik going chicken mode again
            <span role="img" aria-label="Faces with Tears of Joy">😂😂😂</span>
          </div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:33pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Omg, I just can't help it
            <span role="img" aria-label="Face with Tears of Joy">😂</span>
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/32.jpg"
            alt=""
            data-user-popover="28"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:39pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            This is getting funnier and funnier. You gotta love dat team
            <span role="img" aria-label="Smiling Face with Hearts">🥰</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
