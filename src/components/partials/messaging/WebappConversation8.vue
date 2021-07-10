<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-8" class="chat-area-content">
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
      <div class="chat-area-title">Melany W.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/25.jpg"
          alt=""
          data-user-popover="4"
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
            src="/demo/avatars/25.jpg"
            alt=""
            data-user-popover="7"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 9:43pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Just finished implementing this one.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/13.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400x300'
              "
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
            src="/demo/avatars/8.jpg"
            alt=""
            data-user-popover="3"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
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
