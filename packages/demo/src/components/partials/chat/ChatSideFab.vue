<script setup lang="ts">
const chat = useChat()
</script>

<template>
  <a
    :class="[chat.mobileConversationDetailsOpen && 'is-mobile-active']"
    class="chat-side-fab"
    aria-label="Close convesation details"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="
      chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)
    "
    @click="chat.setMobileConversationDetailsOpen(!chat.mobileConversationDetailsOpen)"
  >
    <VIcon
      icon="lucide:chevron-left"
    />
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
  border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
  box-shadow: var(--light-box-shadow);
  transform: translateX(calc(var(--transform-direction) * 60px))
    rotate(calc(var(--transform-direction) * 360deg));
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(calc(var(--transform-direction) * 0))
      rotate(calc(var(--transform-direction) * 0));
  }

  .iconify {
    position: relative;
    inset-inline-start: -1px;
    height: 20px;
    width: 20px;
    color: var(--light-text);
  }
}

.is-dark {
  .chat-side-fab {
    background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;
    border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;
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

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
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
