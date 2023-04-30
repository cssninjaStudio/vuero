<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
</script>

<template>
  <div class="is-chat-placeholder animated preFadeInUp fadeInUp is-hidden">
    <div class="caption">
      <img
        src="/@src/assets/illustrations/placeholders/having-coffee.svg"
        alt=""
        @error.once="onceImageErrored(150)"
      />
      <div class="text">
        <h3>Nothing to show</h3>
        <p>Select an existing conversation or start a new one</p>
        <a id="new-chat" class="button v-button is-solid is-outlined is-big is-rounded">
          Start a new conversation
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.is-chat-placeholder {
  position: absolute;
  bottom: 10px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);

  .caption {
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    bottom: 0;
    margin: 0 auto;
    transform: translateY(-70%);

    img {
      display: block;
      margin: 0 auto;
      max-width: 250px;
    }

    .text {
      text-align: center;
      margin-top: 20px;

      h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--dark-text);
      }

      p {
        color: var(--muted-grey);
        margin-bottom: 10px;
      }
    }
  }
}

/* ==========================================================================
7. Chat Dark mode
========================================================================== */

.is-dark {
  .is-chat-placeholder {
    background: var(--dark-sidebar-light-5) !important;
    border-color: var(--dark-sidebar-light-5) !important;

    h3 {
      color: var(--primary-grey-dark-15) !important;
    }
  }
}
</style>
