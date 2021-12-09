<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggle'): void
}>()
const props = defineProps<{
  isOpen?: boolean
}>()
</script>

<template>
  <nav
    class="navbar mobile-navbar is-hidden-desktop is-hidden-tablet"
    aria-label="main navigation"
  >
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <!-- Mobile menu toggler icon -->
        <div class="brand-start">
          <div
            class="navbar-burger"
            :class="[props.isOpen && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="emit('toggle')"
            @click="emit('toggle')"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <slot name="brand"></slot>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

/* ==========================================================================
1. Mobile Navbar
========================================================================== */
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  z-index: 100;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
  transition: all 0.3s; // transition-all test

  &.no-shadow {
    box-shadow: none !important;
  }

  .navbar-brand {
    .is-brand {
      img {
        position: relative;
        height: 32px !important;
        max-height: 32px !important;
      }
    }

    .navbar-burger {
      background: transparent !important;

      &.is-active,
      &:hover {
        background: transparent !important;
      }
    }

    .user-dropdown {
      margin-left: auto;
      width: 32px;
      height: 32px;

      &.is-active {
        svg {
          color: var(--muted-grey);
        }
      }

      .is-trigger {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;

        .profile-avatar {
          position: relative;
          min-width: 32px;
          min-height: 32px;

          .avatar {
            display: block;
            width: 32px;
            height: 32px;
            min-width: 32px;
            min-height: 32px;
            border-radius: var(--radius-rounded);
          }

          .badge {
            position: absolute;
            top: unset !important;
            right: -6px;
            bottom: -2px;
            width: 18px;
            min-width: 18px;
            height: 18px;
            max-height: 18px;
            border: 2px solid var(--white);
            border-radius: var(--radius-rounded);
          }
        }

        svg {
          margin-left: 3px;
          width: 22px;
          height: 22px;
          color: var(--dark-sidebar);
          transition: all 0.3s; // transition-all test
        }
      }

      .dropdown-menu {
        right: -12px;
        margin-top: 20px;

        .dropdown-content {
          padding-top: 0;
          overflow: hidden;

          .dropdown-head {
            display: flex;
            align-items: center;
            padding: 20px 16px;
            margin-bottom: 12px;
            background: #fafafa;

            .meta {
              margin-left: 12px;
              font-family: var(--font);

              span {
                display: block;

                &:first-child {
                  font-size: 1.1rem;
                  font-weight: 500;
                  color: var(--dark-text);
                  line-height: 1.2;
                }

                &:nth-child(2) {
                  text-transform: uppercase;
                  color: var(--light-text);
                  font-size: 0.7rem;
                }
              }
            }
          }

          .logout-button {
            svg {
              color: var(--smoke-white) !important;
            }
          }
        }

        .dropdown-item {
          font-size: 0.9rem;
        }
      }

      .flex-item {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        margin: 0 15px;

        .toggler svg {
          color: var(--smoke-white) !important;
        }

        .toggle-title {
          font-size: 0.8rem;
          color: var(--muted-grey);

          &:hover,
          &:focus {
            background: transparent !important;
          }
        }

        &:hover {
          background: transparent !important;
        }
      }
    }
  }

  .navbar-item {
    &.has-icon {
      padding: 0.75rem !important;
      border-bottom: 1px solid var(--fade-grey);

      &:last-child {
        border-bottom: none !important;
      }

      svg {
        color: var(--primary);
      }

      .sidebar-icon {
        .path {
          fill: var(--primary);
        }
      }
    }

    &.is-sidebar-toggler {
      svg {
        color: var(--muted-grey) !important;
      }
    }

    &.is-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: block;

        &.menu-badge {
          color: var(--primary);
          width: 20px;
          height: 20px;
          border: 1px solid var(--primary);
          border-radius: var(--radius-rounded);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 90%;
          font-weight: 500;
        }
      }
    }

    &.is-notification {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      width: 38px;
      transition: all 0.3s; // transition-all test
      border-radius: var(--radius-rounded);
      margin-right: 12px;

      .navbar-link {
        padding: 0;
        display: block;
        width: 18px;
        height: 18px;
      }

      svg {
        height: 18px;
        width: 18px;
        color: var(--muted-grey);
        transition: all 0.3s; // transition-all test
      }

      .new-indicator {
        position: absolute;
        top: -9px;
        right: -9px;
        display: block;
        width: 8px;
        height: 8px;
        border-radius: var(--radius-rounded);
        background: var(--danger);
      }

      &:hover,
      &.is-active {
        box-shadow: 0 3px 10px 4px rgb(0 0 0 / 7%);

        svg {
          color: var(--primary);
        }
      }

      .navbar-dropdown {
        position: fixed;
        padding-bottom: 15px;
        top: 68px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 96%;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .count,
          .view-all {
            font-size: 0.8rem;
            color: var(--danger);
            text-transform: uppercase;
            font-weight: 500;
          }
        }

        .heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 0.01rem solid var(--light-grey);

          .heading-left {
            h6 {
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--light-text);
              line-height: 1.1;
            }
          }

          .heading-right {
            .notification-link {
              margin: 0.4rem 0;
              color: var(--primary);
              font-weight: 500;
            }
          }
        }

        .inner {
          position: relative;
          width: 100%;
          height: 264px;
          overflow: auto;

          .notification-list {
            list-style-type: none;
            padding: 0.5rem 1rem;
            margin: 0 0 0.5rem;

            .notification-item {
              display: flex;
              align-items: center;
              padding: 0.65rem 0;

              .img-left {
                img {
                  display: inline-block;
                  vertical-align: middle;
                  height: 3rem;
                  max-height: 3rem;
                  width: 3rem;
                  margin: 0 0.5rem 0 0;
                  border-radius: var(--radius-rounded);
                  max-width: 100%;
                }
              }

              .user-content {
                text-align: left;

                .user-info {
                  color: var(--dark-text);
                  margin: 0.15rem 0 0;

                  span {
                    font-weight: 500;
                  }
                }

                .time {
                  margin: 0;
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }
  }

  .navbar-burger {
    margin-left: 0 !important;

    &:hover,
    &:focus {
      background-color: rgb(0 0 0 / 2%);
    }

    span {
      background-color: var(--muted-grey);
    }
  }

  .navbar-menu {
    background: var(--white);

    .navbar-item,
    .navbar-link {
      color: var(--sidebar);
    }

    .navbar-link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-right: 10px !important;

      &.is-active {
        .link-chevron {
          transform: rotate(90deg) !important;
        }
      }

      img {
        height: 36px;
        width: 36px;
        max-height: 36px !important;
        border-radius: var(--radius-rounded);
      }

      svg {
        height: 16px;
        width: 16px;
        color: var(--primary);
      }

      span {
        margin: 0 10px;

        &.is-heading {
          font-size: 12px;
          font-weight: 500;
          color: var(--sidebar);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        &.is-subheading {
          font-size: 10px;
          font-weight: 400;
          color: var(--muted-grey);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        &.is-block span {
          display: block;
        }

        &.link-chevron {
          margin-left: auto;
          height: 30px;
          width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s; // transition-all test
          transform: rotate(0);

          svg {
            height: 18px;
            width: 18px;
            color: var(--muted-grey);
          }
        }
      }

      &:hover {
        background: transparent !important;
      }
    }

    .navbar-dropdown .navbar-item {
      font-size: 95%;
      padding: 0.75rem 1.5rem !important;
      color: var(--muted-grey);

      &.is-active,
      &:hover {
        color: var(--primary);
        background: var(--placeholder-light-16);
      }
    }
  }
}

/* ==========================================================================
2. Mobile Navbar Dark mode
========================================================================== */

.is-dark {
  .mobile-navbar {
    background: var(--dark-sidebar);

    .navbar-menu.is-active {
      background: var(--dark-sidebar-light-3);

      .navbar-link {
        .is-heading {
          color: var(--primary-grey-light-10);
        }

        svg {
          color: var(--primary);
        }
      }

      .navbar-item.has-icon {
        border-bottom-color: var(--dark-sidebar-light-10) !important;
      }

      .navbar-dropdown .navbar-item {
        color: var(--primary-grey-dark-5) !important;
      }

      .is-search .control {
        input {
          background: var(--dark-sidebar-light-10) !important;
          border-color: var(--dark-sidebar-light-10) !important;
          color: var(--primary-grey);

          &:focus {
            ~ span svg {
              color: var(--primary);
            }
          }
        }
      }
    }

    .navbar-brand {
      .user-dropdown {
        .dropdown-menu {
          .dropdown-content {
            .dropdown-head {
              background: var(--dark-sidebar-light-6);
            }
          }
        }
      }
    }
  }

  .is-notification {
    &.is-active {
      .navbar-link {
        svg {
          color: var(--primary) !important;
        }
      }
    }

    .navbar-dropdown {
      background: var(--dark-sidebar) !important;
      border-color: var(--dark-sidebar) !important;

      .heading {
        border-color: var(--dark-sidebar-light-12) !important;

        .heading-right {
          .notification-link {
            color: var(--primary) !important;
          }
        }
      }

      .inner {
        .notification-list {
          li {
            .notification-item {
              .user-content {
                p {
                  color: var(--dark-dark-text) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .mobile-navbar {
    display: flex;
  }
}

@media (max-width: 767px) {
  .mobile-navbar {
    display: flex;
  }
}
</style>
