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
    @keydown.space.prevent="
      chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)
    "
    @click="chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)"
  >
    <i aria-hidden="true" class="iconify" data-icon="feather:chevron-left"></i>
  </a>
</template>

<style lang="scss" scoped>
/* ==========================================================================
1. Chat side FAB
========================================================================== */

.chat-side-fab {
  position: fixed;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-rounded);
  border: 1px solid var(--fade-grey-dark-3);
  box-shadow: var(--light-box-shadow);
  transform: translateX(60px) rotate(360deg);
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(0) rotate(0);
  }

  svg {
    position: relative;
    left: -1px;
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

@media (max-width: 767px) {
  .chat-side-fab {
    top: 75px;
    right: 16px;
    transform: translateX(0) rotate(0);

    &.is-active {
      transform: translateX(0) rotate(0);
    }

    &.is-mobile-active {
      transform: translateX(60px) rotate(360deg) !important;
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-side-fab {
    top: 75px;
    right: 16px;
    transform: translateX(0) rotate(0);

    &.is-active {
      transform: translateX(0) rotate(0);
    }

    &.is-mobile-active {
      transform: translateX(60px) rotate(360deg) !important;
    }
  }
}
</style>
