<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-8"
    class="chat-area-content"
  >
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <VIcon
          icon="lucide:menu"
        />
      </button>
      <div class="chat-area-title">
        Melany W.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/25.jpg"
          alt=""
          data-user-popover="4"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/25.jpg"
            alt=""
            data-user-popover="7"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 9:43pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Just finished implementing this one.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/13.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
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
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 9:43pmpm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Just in time, thanks.
          </div>
          <div class="chat-msg-text">
            You have an open PR for that one?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
