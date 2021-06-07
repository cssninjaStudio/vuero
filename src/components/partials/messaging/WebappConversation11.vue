<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-11" class="chat-area-content">
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
      <div class="chat-area-title">Greta K.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
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
            src="/demo/avatars/13.jpg"
            alt=""
            data-user-popover="6"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 7:48pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Here are some screenshots.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/15.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400x300'
              "
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
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
          <div class="chat-msg-text">Hope you like them.</div>
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
