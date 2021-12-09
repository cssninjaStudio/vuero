<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggle'): void
}>()
const props = defineProps<{
  isOpen?: boolean
}>()
</script>

<template>
  <div :class="[props.isOpen && 'is-active']" class="mobile-main-sidebar">
    <div class="inner">
      <ul class="icon-side-menu">
        <slot name="links">
          <li>
            <a aria-label="Back to homepage" href="/">
              <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
            </a>
          </li>
        </slot>
      </ul>

      <ul class="bottom-icon-side-menu">
        <slot name="bottom-links"></slot>
      </ul>
    </div>
  </div>

  <div
    v-if="props.isOpen"
    class="mobile-overlay"
    tabindex="0"
    @keydown.space.prevent="emit('toggle')"
    @click="emit('toggle')"
  ></div>
</template>

<style lang="scss">
.mobile-overlay {
  background: rgb(0 0 0 / 30%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  backdrop-filter: blur(1px);
}

.mobile-main-sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  width: 60px;
  background: var(--white);
  border-top: 1px solid var(--fade-grey);
  border-right: 1px solid var(--fade-grey);
  z-index: 100;
  transform: translateX(-100%);
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(0);
  }

  .inner {
    height: 100%;
    width: 100%;
    position: relative;

    .icon-side-menu,
    .bottom-icon-side-menu {
      li {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: block;
          position: relative;
          transform: rotate(0);
          opacity: 1;
          transition: all 0.3s; // transition-all test

          &:hover,
          &.is-active {
            > svg {
              color: var(--primary);
            }
          }

          > svg {
            color: var(--title-grey);
            height: 20px;
            width: 20px;
            stroke-width: 1.6px;
          }

          .sidebar-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            transition: all 0.3s; // transition-all test
          }

          &:hover svg,
          &.is-active svg {
            color: var(--primary);
          }

          &.is-opened {
            transform: rotate(360deg);
            opacity: 0;
          }

          &.is-inactive {
            transform: rotate(-360deg);
            opacity: 0;
          }

          &.is-selected,
          &.router-link-exact-active {
            svg {
              color: var(--primary);
            }
          }
        }

        #open-filters {
          svg {
            transform: rotate(0);
            transition: all 0.3s; // transition-all test
          }

          &:hover {
            svg {
              transform: rotate(145deg);
            }
          }
        }

        &.is-active {
          a svg {
            color: var(--primary);
          }
        }
      }
    }

    .bottom-icon-side-menu {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

.is-dark {
  .mobile-main-sidebar {
    background: var(--dark-sidebar-dark-6);
    border-color: var(--dark-sidebar-light-1) !important;

    .inner {
      .icon-side-menu {
        li {
          a {
            &.is-active {
              svg {
                color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}

.mobile-subsidebar {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  width: 280px;
  background: var(--white);
  border-top: 1px solid var(--fade-grey);
  border-right: 1px solid var(--fade-grey);
  z-index: 99;

  .navbar-divider {
    width: 83%;
    margin: 5px auto;
    display: block;
  }

  .inner {
    position: relative;
    height: 100%;
    width: calc(100% - 60px);
    margin-left: 60px;

    .sidebar-title {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 20px;

      h3 {
        font-family: var(--font-alt);
        color: var(--muted-grey);
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    .submenu {
      height: calc(100% - 70px);
      overflow-y: auto;
      margin-top: 10px;
      padding: 0 20px 20px;

      li {
        &.is-active {
          a {
            color: var(--primary);
            font-weight: 500;
          }
        }

        &.has-children {
          display: block;
          height: unset;
          min-height: 36px;

          &.active {
            .collapse-wrap {
              a {
                color: var(--dark-text);
                font-weight: 600;

                svg {
                  transform: rotate(90deg) !important;
                }
              }
            }
          }

          &.is-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .tag {
              margin-left: auto;
              margin-right: 20px;
              border-radius: 100px;
              background: var(--danger);
              color: var(--white);
              font-size: 0.8rem;
              font-weight: 600;
            }
          }

          .collapse-wrap {
            display: flex;
            height: 100%;
            min-height: 36px;
            align-items: stretch;

            > a {
              font-family: var(--font-alt);
              display: flex;
              align-items: center;
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--light-text);

              svg {
                position: relative;
                top: 1px;
                height: 18px;
                width: 18px;
                margin-left: auto;
                transform: rotate(0);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
            }
          }

          ul {
            padding: 0;
            overflow: hidden;

            li {
              height: 32px;

              &.has-divider {
                height: auto;
              }

              .is-submenu {
                display: flex;
                align-items: center;
                padding-left: 16px;
                font-size: 0.95rem;

                &.is-active {
                  font-weight: 500;
                  color: var(--primary);
                }

                i {
                  margin-right: 8px;
                }

                svg {
                  height: 8px;
                  width: 8px;
                  max-width: 8px;
                  min-width: 8px;
                  stroke-width: 2px;
                  margin-right: 8px;
                }
              }
            }
          }
        }

        &.divider {
          cursor: default;
          pointer-events: none;
          height: 10px;
          margin: 5px 0 10px;
          border-bottom: 1px solid rgb(0 0 0 / 15%);
        }

        a {
          padding: 6px 0;
          width: 100%;
          display: block;
          color: var(--light-text);
        }
      }
    }

    .bottom-action {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;

      .button {
        svg {
          height: 18px;
          width: 18px;
        }
      }
    }
  }

  &.is-messaging {
    ul {
      overflow: auto;
      height: 100%;
    }

    li {
      position: relative;
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-left: 2px solid transparent;
      border-bottom: 1px solid rgb(0 0 0 / 5%);
      cursor: pointer;

      &.is-active {
        border-left-color: var(--primary);
        background: var(--primary-light-51);

        &:hover,
        &:focus {
          background: var(--primary-light-51);
        }
      }

      .recent-user {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 8px;
        cursor: pointer;

        .user-container {
          position: relative;

          img {
            height: 32px;
            width: 32px;
            border-radius: var(--radius-rounded);
            display: block;

            &.is-user {
              min-width: 32px;
            }

            &.is-badge {
              display: block;
              position: absolute;
              right: -5px;
              bottom: 0;
              border: 2px solid var(--white);
              height: 16px;
              width: 16px;
              border-radius: var(--radius-rounded);
            }
          }
        }

        .recipient-meta {
          margin: 0 15px;

          span {
            display: block;

            &:first-child {
              color: var(--dark-text);
              font-weight: 500;
              font-size: 0.9rem;
            }

            &:nth-child(2) {
              font-size: 0.75rem;
              color: var(--muted-grey);
            }
          }
        }
      }

      .user-group {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 8px;
        cursor: pointer;

        img {
          height: 32px;
          width: 32px;
          border: 2px solid var(--white);
          border-radius: var(--radius-rounded);
          display: block;

          &.is-user {
            min-width: 32px;
          }

          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            margin-left: -15px;
          }
        }

        .more-indicator {
          height: 36px;
          width: 36px;
          min-width: 36px;
          border-radius: var(--radius-rounded);
          background: var(--primary);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: -15px;
          border: 2px solid var(--white);

          span {
            display: block;
            color: var(--white);
            font-weight: 600;
            font-size: 0.8rem;
          }
        }
      }

      time {
        display: block;
        position: absolute;
        top: 2px;
        right: 20px;
        font-size: 0.75rem;
        color: var(--muted-grey);
      }

      .group-message {
        padding: 0 10px;
        margin-top: -20px;
        font-size: 0.75rem;
        color: var(--muted-grey);
        white-space: nowrap;
        overflow: hidden;
        max-width: 220px;
        text-overflow: ellipsis;

        &.is-unread {
          color: var(--dark-text);
          font-weight: 500;
        }
      }

      &:hover {
        background: #fafafa;
      }
    }
  }

  &.is-wallet {
    .wallet-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 80px;
      width: 100%;
      padding: 10px;
      border-left: 2px solid transparent;
      border-bottom: 1px solid var(--fade-grey);
      opacity: 0.8;
      cursor: pointer;

      &.is-active {
        opacity: 1;
        background: var(--primary-light-51);
        border-left-color: var(--primary);

        &.is-eth {
          .wallet-meta {
            small {
              color: var(--primary);
            }
          }
        }

        .currency-value {
          span {
            color: var(--dark-text);
          }
        }
      }

      .currency-coin {
        position: relative;
        height: 30px;
        width: 30px;

        .kodr-coin-fill,
        .eth-coin-fill {
          height: 30px;
          width: 30px;
          transform: scale(1);
          transition: all 0.3s; // transition-all test

          .st9,
          .st10 {
            fill: var(--muted-grey);
          }
        }
      }

      .wallet-meta {
        margin-left: 10px;

        span {
          display: block;
          font-size: 1rem;
          color: var(--muted-grey);

          small {
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: 500;
          }
        }

        .currency-value {
          span {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--muted-grey) !important;
          }
        }
      }

      .button {
        height: 32px;
        width: 32px;
        padding: 0;
        border-radius: var(--radius);
      }
    }

    .buy-wrap {
      padding: 16px;

      .button {
        .kodr-coin-fill {
          height: 24px;
          width: 24px;
          margin-right: 5px;
          margin-left: -5px;

          .path {
            fill: var(--smoke-white);
          }
        }
      }
    }

    .request-payout {
      width: 100%;

      .button {
        height: 40px !important;
        padding: 0 26px;

        &:hover,
        &:focus {
          svg {
            fill: var(--white);
          }
        }

        svg {
          height: 24px;
          width: 24px;
          fill: var(--primary);
          margin-right: 5px;
          margin-left: -12px;
          transition: all 0.3s; // transition-all test
        }
      }
    }
  }
}

.is-dark {
  .mobile-subsidebar {
    background: var(--dark-sidebar-light-2);
    border-color: var(--dark-sidebar-light-4);

    .submenu {
      li {
        &.is-active {
          a {
            color: var(--primary) !important;
          }
        }

        &.has-children {
          &.active {
            .collapse-wrap {
              > a {
                color: var(--smoke-white);
              }
            }
          }
        }
      }
    }

    &.is-messaging {
      ul li {
        &.is-active {
          background: var(--dark-sidebar-dark-4);
          border-left-color: var(--primary) !important;
        }

        .recipient-meta {
          span {
            &:first-child,
            &.is-unread {
              color: var(--primary-grey) !important;
            }
          }
        }

        .user-group {
          img,
          span {
            border-color: var(--dark-sidebar-light-2) !important;
          }
        }
      }
    }
  }
}
</style>
