<template>
  <div class="chat-body-wrap">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/ltr';

.chat-body-wrap {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;

  &.side-collapsed {
    .chat-body {
      width: 100% !important;
    }

    .chat-side {
      width: 0 !important;
      transform: translateX($transform-direction * 100%);

      .chat-side-content {
        opacity: 0;
      }
    }
  }
}
</style>
