<template>
  <div class="chat-header">
    <slot />
  </div>
</template>

<style lang="scss">
.chat-header {
  position: absolute;
  display: flex;
  min-height: 55px;
  align-items: center;
  top: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  width: 100%;
  padding: 5px 10px;
  z-index: 2;
  -webkit-touch-callout: none;
  user-select: none;

  .is-autocomplete {
    flex-grow: 2;
    max-width: 320px;
    margin-inline-start: 20px;

    &.is-active,
    &:hover {
      background: transparent !important;
    }

    .control {
      position: relative;

      .icon {
        position: absolute;
        top: 9px;
        inset-inline-start: 9px;
        color: var(--placeholder);

        span {
          color: var(--dark-text);
          font-weight: 500;
        }

        .iconify {
          width: 20px;
          height: 20px;
          transition: all 0.3s; // transition-all test
        }
      }

      .hide {
        position: absolute;
        top: 2px;
        inset-inline-end: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 36px;
        cursor: pointer;

        .iconify {
          height: 18px;
          width: 18px;
          color: var(--muted-grey);
        }
      }

      .easy-autocomplete {
        width: 100% !important;

        input {
          padding-inline-start: 40px;
          border: none;
          box-shadow: none;
          color: var(--muted-grey);
          transition: all 0.3s; // transition-all test

          &:focus {
            + .icon {
              color: var(--primary);
            }
          }
        }

        .template-wrapper {
          display: flex !important;
          justify-content: flex-start;
          align-items: center;

          .avatar-wrapper {
            position: relative;
            width: 40px !important;
            height: 40px !important;

            .autocpl-avatar {
              width: 40px !important;
              height: 40px !important;
              border-radius: var(--radius-rounded) !important;
            }

            .avatar-badge {
              position: absolute;
              bottom: 0;
              inset-inline-end: -5px;
              width: 18px;
              height: 18px;
              border: 2px solid var(--white);
              border-radius: var(--radius-rounded);
            }
          }

          .entry-text {
            margin-inline-start: 15px;

            span {
              font-size: 0.8rem;
              color: var(--title-grey);
            }
          }
        }
      }
    }

    li {
      height: auto !important;
      padding-top: 8px;
      padding-bottom: 8px;
      border-inline-start: none !important;
      border-inline-end: none !important;
    }

    .easy-autocomplete-container {
      top: 120% !important;
      border: none !important;

      ul {
        border-radius: var(--radius) !important;
        box-shadow: -1px 3px 10px 0 rgb(0 0 0 / 6%) !important;
      }
    }
  }

  .user-group {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline-start: 20px;
    cursor: pointer;

    img {
      height: 36px;
      width: 36px;
      border: 3px solid var(--white);
      border-radius: var(--radius-rounded);
      display: block;

      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        margin-inline-start: -15px;
      }
    }

    .more-indicator {
      height: 36px;
      width: 36px;
      border-radius: var(--radius-rounded);
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-inline-start: -15px;
      border: 2px solid var(--white);

      span {
        display: block;
        color: var(--white);
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
  }
}

.is-dark {
  .chat-header {
    // background: color-mix(in oklab, var(--dark-sidebar), white 2%);
    // border-color: color-mix(in oklab, var(--dark-sidebar), white 2%);

    .is-badge {
      border-color: var(--dark-sidebar) !important;
    }

    .recipient-meta {
      span {
        &:first-child {
          color: color-mix(in oklab, var(--primary-grey), white 6%) !important;
        }
      }
    }

    .chat-options {
      #hide-conversation:hover,
      #hide-chat-side:hover {
        color: var(--primary) !important;
      }
    }

    .is-autocomplete {
      &.is-active,
      &:hover,
      &.is-active:hover {
        background: transparent !important;
      }

      #users-autocpl {
        background: none;
        border-color: none;
        color: color-mix(in oklab, var(--primary-grey), black 4%);

        &::placeholder {
          color: color-mix(in oklab, var(--primary-grey), black 30%) !important;
        }
      }

      .iconify {
        color: color-mix(in oklab, var(--primary-grey), black 30%) !important;
      }

      .icon span {
        color: var(--smoke-white) !important;
      }

      .easy-autocomplete-container {
        background: var(--dark-sidebar);

        ul {
          background: none repeat scroll 0 0 var(--dark-sidebar);
          border-top: none;

          li {
            border-color: var(--dark-sidebar) !important;

            &.selected {
              background: color-mix(in oklab, var(--dark-sidebar), white 2%);
            }

            .entry-text {
              color: color-mix(in oklab, var(--primary-grey), black 10%);

              span {
                color: color-mix(in oklab, var(--primary-grey), black 40%) !important;
              }
            }
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .chat-header {
    border-radius: 16px 16px 0 0 !important;
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
  .chat-header {
    border-radius: 16px 16px 0 0 !important;
  }
}
</style>
