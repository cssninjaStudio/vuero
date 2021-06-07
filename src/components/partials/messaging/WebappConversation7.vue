<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-7" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="
          trigger
          conversations-mobile-trigger
          h-only-mobile h-only-tablet-p h-only-tablet-l
        "
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">Mary L.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/18.jpg"
          alt=""
          data-user-popover="7"
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/18.jpg"
            alt=""
            data-user-popover="7"
          />
          <div class="chat-msg-date">Sent at 2:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Look at those screens, just finished them.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/4.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400x300'
              "
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/7.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400x300'
              "
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/6.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400x300'
              "
            />
          </div>
          <div class="chat-msg-text">I can send you the files.</div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/8.jpg"
            alt=""
            data-user-popover="3"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 2:37pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Looks great.</div>
          <div class="chat-msg-text">Let me review this in details.</div>
        </div>
      </div>
    </div>
  </div>
</template>
