<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-4"
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
        Alice C.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/7.jpg"
          alt=""
          data-user-popover="0"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 10:11am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Hey erik I have a couple of screens to show you.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/11.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            This one is pretty colorful, I like it.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/9.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            I like the curves in this one.
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
            Sent at 10:44am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Looks Good.
          </div>
          <div class="chat-msg-text">
            Want to sync?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
