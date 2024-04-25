<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-11"
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
        Greta K.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/13.jpg"
            alt=""
            data-user-popover="6"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 7:48pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Here are some screenshots.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/15.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/9.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/7.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            Hope you like them.
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
            Sent at 10:21pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            They look great!
          </div>
          <div class="chat-msg-text">
            Thanks for sharing this!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
