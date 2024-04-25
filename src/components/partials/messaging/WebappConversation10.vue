<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-10"
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
          src="https://media.cssninja.io/content/avatars/19.jpg"
          alt=""
          data-user-popover="17"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/19.jpg"
            alt=""
            data-user-popover="5"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 5:19pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            I had a great time yesterday.
          </div>
          <div class="chat-msg-text">
            Thank you for you clean presentation, it was stunning.
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
            Sent at 6:32pm
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Wow, don't mention it.
          </div>
          <div class="chat-msg-text">
            So happy it made you feel like that.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
