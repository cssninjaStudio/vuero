<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-7"
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
        Mary L.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/18.jpg"
          alt=""
          data-user-popover="7"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/18.jpg"
            alt=""
            data-user-popover="7"
          >
          <div class="chat-msg-date">
            Sent at 2:32pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Look at those screens, just finished them.
          </div>
          <div class="chat-msg-text">
            <img
              src="https://media.cssninja.io/content/photos/apps/4.png"
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
            <img
              src="https://media.cssninja.io/content/photos/apps/6.png"
              alt=""
              @error.once="onceError($event, 400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            I can send you the files.
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
            Sent at 2:37pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Looks great.
          </div>
          <div class="chat-msg-text">
            Let me review this in details.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
