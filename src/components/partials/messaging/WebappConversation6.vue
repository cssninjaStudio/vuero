<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-6" class="chat-area-content">
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
          src="/demo/avatars/5.jpg"
          alt=""
          data-user-popover="5"
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
            src="/demo/avatars/5.jpg"
            alt=""
            data-user-popover="5"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Hey Erik!.</div>
          <div class="chat-msg-text">Still down for that movie?</div>
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
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">Of course, yeah!</div>
          <div class="chat-msg-text">Can't wait!</div>
        </div>
      </div>
    </div>
  </div>
</template>
