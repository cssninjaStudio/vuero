<script setup lang="ts">
import { useDropdown } from '/@src/composable/useDropdown'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div class="message-field-wrapper">
    <div class="control">
      <div class="add-content">
        <div ref="dropdownElement" class="dropdown dropdown-trigger is-up">
          <div>
            <div class="button" aria-haspopup="true" @click="dropdown.toggle">
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item">
                <i aria-hidden="true" class="iconify" data-icon="feather:video"></i>
                <div class="meta">
                  <span>Video</span>
                  <span>Embed a video</span>
                </div>
              </a>
              <a href="#" class="dropdown-item kill-drop v-modal-trigger">
                <i aria-hidden="true" class="iconify" data-icon="feather:image"></i>
                <div class="meta">
                  <span>Images</span>
                  <span>Upload pictures</span>
                </div>
              </a>
              <a href="#" class="dropdown-item kill-drop v-modal-trigger">
                <i aria-hidden="true" class="iconify" data-icon="feather:link"></i>
                <div class="meta">
                  <span>Link</span>
                  <span>Post a link</span>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item kill-drop v-modal-trigger">
                <i aria-hidden="true" class="iconify" data-icon="feather:file"></i>
                <div class="meta">
                  <span>File</span>
                  <span>Upload a file</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="add-emoji">
        <div class="button">
          <i aria-hidden="true" class="iconify" data-icon="feather:smile"></i>
        </div>
      </div>
      <input
        id="chat-input"
        class="input is-rounded"
        type="text"
        placeholder="Write a message ..."
        aria-label="Write a message"
      />
      <div class="send-message">
        <div class="button v-button is-primary is-raised is-rounded">Send</div>
      </div>
    </div>

    <div class="typing-indicator">
      <img src="/images/icons/misc/typing.gif" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.message-field-wrapper {
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  display: flex;
  align-items: center;
  height: 60px;
  width: calc(100% - 320px);
  padding: 0 16px;
  transition: all 0.3s; // transition-all test
  z-index: 2;

  &.side-collapsed {
    width: 100% !important;
  }

  .control {
    position: relative;
    width: 100%;

    input {
      height: 42px;
      padding-inline-start: 70px;
    }

    .add-content {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      z-index: 11;

      &:hover,
      &:focus {
        > div {
          .button {
            background: var(--fade-grey);

            svg {
              color: var(--primary);
            }
          }
        }
      }

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s; // transition-all test

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s; // transition-all test
        }
      }

      .dropdown-content {
        a {
          display: flex;
          align-items: center;

          svg {
            height: 18px;
            width: 18px;
            color: var(--muted-grey);
          }

          .meta {
            margin-inline-start: 12px;

            span {
              display: block;

              &:first-child {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--muted-grey);
              }
            }
          }
        }
      }
    }

    .add-emoji {
      position: absolute;
      top: 0;
      inset-inline-start: 34px;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 42px;

      &:hover,
      &:focus {
        .button {
          background: var(--fade-grey);

          svg {
            color: var(--primary);
          }
        }
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s; // transition-all test

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s; // transition-all test
        }
      }
    }

    .send-message {
      position: absolute;
      top: 3px;
      inset-inline-end: 3px;
      z-index: 11;

      .button {
        height: 36px;
        min-width: 90px;
      }
    }
  }

  .typing-indicator {
    position: absolute;
    bottom: 50px;
    inset-inline-start: 10px;
    width: 100px;
    height: 100px;
    z-index: 2;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s; // transition-all test

    &.is-active {
      opacity: 1;
      transform: translateY(25px);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}

.is-dark {
  .message-field-wrapper {
    .add-content {
      .button {
        background: var(--primary);
        border-color: var(--primary);
      }

      .dropdown-item {
        .meta {
          span:first-child {
            color: var(--smoke-white) !important;
          }
        }
      }
    }

    .add-emoji {
      inset-inline-start: 38px;
    }
  }
}

@media (width <= 767px) {
  .message-field-wrapper {
    width: 100% !important;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .message-field-wrapper {
    width: 100% !important;
  }
}
</style>
