<script setup lang="ts">
import { useChat } from '/@src/stores/chat'

const chat = useChat()
</script>

<template>
  <a
    :class="[chat.mobileConversationDetailsOpen && 'is-mobile-active']"
    class="chat-side-fab"
    aria-label="Close convesation details"
    tabindex="0"
    role="button"
    @keydown.space.prevent="
      chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)
    "
    @click="chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)"
  >
    <i aria-hidden="true" class="iconify" data-icon="feather:chevron-left"></i>
  </a>
</template>

<style lang="scss" scoped>
.chat-side-fab {
  position: fixed;
  top: 10px;
  inset-inline-end: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-rounded);
  border: 1px solid var(--fade-grey-dark-3);
  box-shadow: var(--light-box-shadow);
  transform: translateX(calc(var(--transform-direction) * 60px))
    rotate(calc(var(--transform-direction) * 360deg));
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(calc(var(--transform-direction) * 0))
      rotate(calc(var(--transform-direction) * 0));
  }

  svg {
    position: relative;
    inset-inline-start: -1px;
    height: 20px;
    width: 20px;
    color: var(--light-text);
  }
}

.is-dark {
  .chat-side-fab {
    background: var(--dark-sidebar-light-2) !important;
    border-color: var(--dark-sidebar-light-12) !important;
  }
}

@media (width <= 767px) {
  .chat-side-fab {
    top: 75px;
    inset-inline-end: 16px;
    transform: translateX(calc(var(--transform-direction) * 0))
      rotate(calc(var(--transform-direction) * 0));

    &.is-active {
      transform: translateX(calc(var(--transform-direction) * 0))
        rotate(calc(var(--transform-direction) * 0));
    }

    &.is-mobile-active {
      transform: translateX(calc(var(--transform-direction) * 60px))
        rotate(calc(var(--transform-direction) * 360deg)) !important;
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-side-fab {
    top: 75px;
    inset-inline-end: 16px;
    transform: translateX(calc(var(--transform-direction) * 0))
      rotate(calc(var(--transform-direction) * 0));

    &.is-active {
      transform: translateX(calc(var(--transform-direction) * 0))
        rotate(calc(var(--transform-direction) * 0));
    }

    &.is-mobile-active {
      transform: translateX(calc(var(--transform-direction) * 60px))
        rotate(calc(var(--transform-direction) * 360deg)) !important;
    }
  }
}
</style>
