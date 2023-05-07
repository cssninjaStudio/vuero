<template>
  <ol id="chat-body" class="chat-body">
    <slot></slot>
  </ol>
</template>

<style lang="scss">
.chat-body {
  position: relative;
  width: calc(100% - 320px);
  height: 100%;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0 30px 80px;
  transition: all 0.3s; // transition-all test

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgb(0 0 0 / 20%);
  }

  .divider-container {
    width: 100%;
    max-width: 100%;

    .divider {
      margin: 1.5em auto;

      span {
        color: var(--placeholder);
        font-weight: 400;
        text-transform: uppercase;
        font-size: 0.8rem;

        &::before,
        &::after {
          top: 0.9em;
          width: 43%;
          border-top: 1px solid rgb(0 0 0 / 10%);
        }
      }
    }
  }

  li {
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
  }

  .avatar {
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    z-index: 2;
    border-radius: var(--radius-rounded);
    border-radius: 100%;
    border-radius: 100%;
    border-radius: 100%;
    background-color: rgb(255 255 255 / 90%);

    img {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-rounded);
      background-color: rgb(255 255 255 / 90%);
      -webkit-touch-callout: none;
      user-select: none;
    }
  }

  .day {
    position: relative;
    display: block;
    text-align: center;
    color: #c0c0c0;
    height: 20px;
    text-shadow: 7px 0 0 var(--lighter-grey), 6px 0 0 var(--lighter-grey),
      5px 0 0 var(--lighter-grey), 4px 0 0 var(--lighter-grey),
      3px 0 0 var(--lighter-grey), 2px 0 0 var(--lighter-grey),
      1px 0 0 var(--lighter-grey), 1px 0 0 var(--lighter-grey), 0 0 0 var(--lighter-grey),
      -1px 0 0 var(--lighter-grey), -2px 0 0 var(--lighter-grey),
      -3px 0 0 var(--lighter-grey), -4px 0 0 var(--lighter-grey),
      -5px 0 0 var(--lighter-grey), -6px 0 0 var(--lighter-grey),
      -7px 0 0 var(--lighter-grey);
    box-shadow: inset 20px 0 0 var(--lighter-grey), inset -20px 0 0 var(--lighter-grey),
      inset 0 -2px 0 #d7d7d7;
    line-height: 38px;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: default;
    -webkit-touch-callout: none;
    user-select: none;
  }

  .other,
  .self {
    &.is-consecutive {
      .avatar {
        visibility: hidden !important;
      }

      .msg {
        border-radius: var(--radius-large);

        &::after {
          display: none;
        }
      }
    }
  }

  .other + .other,
  .self + .self {
    .avatar {
      visibility: hidden !important;
    }
  }

  .other.is-multi + .other.is-multi {
    .avatar {
      visibility: visible !important;
    }
  }

  .other {
    .msg {
      order: 1;
      min-width: 230px;
      max-width: 40%;
      margin-inline-start: 20px;

      p {
        font-size: 0.9rem;
        color: var(--light-text);
      }

      .msg-inner {
        background: var(--white);
        color: var(--dark-text);
        border-radius: 12px;
        border-start-start-radius: 0;
        padding: 16px;
        position: relative;
      }

      time {
        display: block;
        text-align: inset-inline-end;
        font-size: 0.8rem;
        color: var(--light-text);
        margin-top: 3px;
        cursor: default;
        -webkit-touch-callout: none;
        user-select: none;

        svg {
          position: relative;
          top: 1px;
          height: 10px;
          width: 10px;
          color: var(--white);
          margin-inline-start: 3px;
        }
      }

      &.is-link-image {
        background: #e6e5ed;
        padding: 0;
      }

      &.is-link {
        background: #e6e5ed;
      }
    }
  }

  .self {
    justify-content: flex-end;
    align-items: stretch;

    .msg {
      order: 1;
      margin-inline-end: 20px;
      min-width: 230px;
      max-width: 40%;
      position: relative;

      .msg-inner {
        background: #e6e5ed;
        color: var(--dark-text);
        border-radius: 12px;
        border-start-end-radius: 0;
        padding: 12px;
      }

      p {
        font-size: 0.9rem;
      }

      time {
        display: block;
        text-align: inset-inline-start;
        font-size: 0.8rem;
        color: var(--light-text);
        margin-top: 3px;
        cursor: default;
        -webkit-touch-callout: none;
        user-select: none;

        svg {
          position: relative;
          top: 1px;
          height: 10px;
          width: 10px;
          color: var(--dark-text);
          margin-inline-end: 3px;
        }
      }

      &.is-link-image {
        background: #e6e5ed;
        padding: 0;
      }

      &.is-link {
        background: #e6e5ed;
      }
    }

    .avatar {
      order: 2;

      &::before {
        display: none;
      }
    }
  }

  .no-messages {
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    transform: translateY(-50%);

    img {
      display: block;
      margin: 0 auto;
      height: 190px;
    }

    .text {
      text-align: center;

      h3 {
        font-size: 1.4rem;
      }

      p {
        color: var(--muted-grey);
      }
    }
  }

  .chat-loader {
    position: fixed;
    inset-inline-start: 0;
    inset-inline-end: 0;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / 100%);
    z-index: 9;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;

    &.is-active {
      opacity: 1;
      pointer-events: all;
      z-index: 9 !important;
    }

    .loader {
      position: relative;
      top: -45px;
      height: 6rem;
      width: 6rem;
    }
  }
}

.is-dark {
  .chat-body {
    background: var(--dark-sidebar-light-7);

    .divider span {
      color: var(--dark-sidebar-light-22) !important;

      &::before,
      &::after {
        border-color: var(--dark-sidebar-light-15) !important;
      }
    }

    li {
      &.other {
        .msg {
          .msg-inner {
            color: var(--smoke-white);
            background: var(--primary);

            p {
              color: var(--smoke-white);
            }
          }
        }
      }

      &.self {
        .msg {
          .msg-inner {
            background: var(--dark-sidebar-light-15) !important;
            color: var(--primary-grey-dark-10) !important;
          }

          time {
            color: var(--primary-grey-dark-10) !important;

            svg {
              color: var(--primary-grey-dark-10) !important;
            }
          }
        }
      }
    }

    .msg {
      &.is-link-image {
        border-radius: 10px;

        .link-body {
          background: var(--dark-sidebar-light-5);
          border-radius: 0 0 6px 6px;

          .link-title,
          small {
            color: var(--smoke-white) !important;
          }
        }
      }

      &.is-link {
        background: var(--dark-sidebar-light-3);
        border-radius: var(--radius-large);

        .icon-wrapper {
          border-color: var(--dark-sidebar-light-5);
          background: var(--primary);
        }

        .link-meta {
          span {
            color: var(--smoke-white) !important;
          }

          a {
            color: var(--primary) !important;
          }
        }
      }

      &.is-image {
        .image-container {
          .image-overlay {
            background: var(--primary);
          }
        }
      }
    }
  }
}
@media (width <= 767px) {
  .chat-body {
    width: 100% !important;
    padding: 0 10px 40px;

    .avatar,
    .avatar img {
      height: 36px !important;
      width: 36px !important;
      min-height: 36px !important;
      min-width: 36px !important;
    }

    .msg {
      max-width: 230px;

      &.is-link-image {
        .image img {
          width: 100%;
        }
      }
    }
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-body {
    width: 100% !important;
    padding: 0 10px 40px;

    .avatar,
    .avatar img {
      height: 36px !important;
      width: 36px !important;
      min-height: 36px !important;
      min-width: 36px !important;
    }

    .msg {
      max-width: 230px;

      &.is-link-image {
        .image img {
          width: 100%;
        }
      }
    }
  }
}
</style>
