<template>
  <div class="is-chat animated preFadeInUp fadeInUp">
    <!-- Header -->
    <ChatHeader>
      <slot name="header" />
    </ChatHeader>

    <ChatBodyWrap>
      <!-- Chat Body -->
      <ChatBody>
        <slot name="body" />
      </ChatBody>

      <!-- Chat side -->
      <slot name="side" />
    </ChatBodyWrap>

    <ChatMessageFieldWrapper />
  </div>
</template>

<style lang="scss">
.is-chat {
  position: absolute;
  height: 100%;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  border-radius: 16px 6px 6px 16px;
}

.is-dark {
  .is-chat {
    border: none !important;
    background: color-mix(in oklab, var(--dark-sidebar), white 3%) !important;

    .chat-loader {
      background: color-mix(in oklab, var(--dark-sidebar), white 2%);
    }

    #chat-input {
      background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;
      color: color-mix(in oklab, var(--primary-grey), black 10%) !important;

      &::placeholder {
        color: color-mix(in oklab, var(--primary-grey), black 15%) !important;
      }
    }
  }
}

@media (width <= 767px) {
  .is-chat {
    position: absolute;
    top: 0 !important;
    inset-inline-start: 0;
    max-height: calc(100% - 60px) !important;
    overflow: hidden;
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .is-chat {
    position: absolute;
    top: 0 !important;
    inset-inline-start: 0;
    height: 100%;
    max-height: calc(100% - 60px) !important;
    overflow: hidden;
  }
}
</style>
