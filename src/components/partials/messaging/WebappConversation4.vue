<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-4" class="chat-area-content">
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
      <div class="chat-area-title">Alice C.</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/7.jpg"
          alt=""
          data-user-popover="0"
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
            src="/demo/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 10:11am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Hey erik I have a couple of screens to show you.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/11.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400X300'
              "
            />
          </div>
          <div class="chat-msg-text">
            This one is pretty colorful, I like it.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/400X300'
              "
            />
          </div>
          <div class="chat-msg-text">I like the curves in this one.</div>
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
