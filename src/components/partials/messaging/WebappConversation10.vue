<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-10" class="chat-area-content">
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
          src="/demo/avatars/19.jpg"
          alt=""
          data-user-popover="17"
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
            src="/demo/avatars/19.jpg"
            alt=""
            data-user-popover="5"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 5:19pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">I had a great time yesterday.</div>
          <div class="chat-msg-text">
            Thank you for you clean presentation, it was stunning.
          </div>
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
          <div class="chat-msg-date">Sent at 6:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Wow, don't mention it.</div>
          <div class="chat-msg-text">So happy it made you feel like that.</div>
        </div>
      </div>
    </div>
  </div>
</template>
