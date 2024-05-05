<script setup lang="ts">
const modelValue = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <nav class="navbar mobile-navbar is-hidden-desktop is-hidden-tablet">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <!-- Mobile menu toggler icon -->
        <div class="brand-start">
          <MobileBurger v-model="modelValue" />
        </div>

        <slot name="logo" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.mobile-navbar {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  display: none;
  width: 100%;
  z-index: 100;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
  transition: all 0.3s; // transition-all test
  margin: 0;

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

    .profile-dropdown {
      .dropdown-menu {
        margin-top: 20px;
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

      .iconify {
        color: var(--primary);
      }

      .sidebar-icon {
        .path {
          fill: var(--primary);
        }
      }
    }

    &.is-sidebar-toggler {
      .iconify {
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
      margin-inline-end: 12px;

      .navbar-link {
        padding: 0;
        display: block;
        width: 18px;
        height: 18px;
      }

      .iconify {
        font-size: 18px;
        color: var(--muted-grey);
        transition: all 0.3s; // transition-all test
      }

      .new-indicator {
        position: absolute;
        top: -9px;
        inset-inline-end: -9px;
        display: block;
        width: 8px;
        height: 8px;
        border-radius: var(--radius-rounded);
        background: var(--danger);
      }

      &:hover,
      &.is-active {
        box-shadow: 0 3px 10px 4px rgb(0 0 0 / 7%);

        .iconify {
          color: var(--primary);
        }
      }

      .navbar-dropdown {
        position: fixed;
        padding-bottom: 15px;
        top: 68px;
        inset-inline-start: 0;
        inset-inline-end: 0;
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
                  margin-inline-end: 0.75rem;
                  border-radius: var(--radius-rounded);
                  max-width: 100%;
                }
              }

              .user-content {
                text-align: inset-inline-start;

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

  .navbar-menu {
    background: var(--white);

    .navbar-item,
    .navbar-link {
      color: var(--dark);
    }

    .navbar-link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-inline-end: 10px !important;

      &.is-active {
        .link-chevron {
          transform: rotate(calc(var(--transform-direction) * 90deg)) !important;
        }
      }

      img {
        height: 36px;
        width: 36px;
        max-height: 36px !important;
        border-radius: var(--radius-rounded);
      }

      .iconify {
        height: 16px;
        width: 16px;
        color: var(--primary);
      }

      span {
        margin: 0 10px;

        &.is-heading {
          font-size: 12px;
          font-weight: 500;
          color: var(--dark);
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
          margin-inline-start: auto;
          height: 30px;
          width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s; // transition-all test
          transform: rotate(calc(var(--transform-direction) * 0));

          .iconify {
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
        background: color-mix(in oklab, var(--placeholder), white 16%);
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
      background: color-mix(in oklab, var(--dark-sidebar), white 3%);

      .navbar-link {
        .is-heading {
          color: color-mix(in oklab, var(--primary-grey), white 10%);
        }

        .iconify {
          color: var(--primary);
        }
      }

      .navbar-item.has-icon {
        border-bottom-color: color-mix(in oklab, var(--dark-sidebar), white 10%) !important;
      }

      .navbar-dropdown .navbar-item {
        color: color-mix(in oklab, var(--primary-grey), black 5%) !important;
      }

      .is-search .control {
        input {
          background: color-mix(in oklab, var(--dark-sidebar), white 10%) !important;
          border-color: color-mix(in oklab, var(--dark-sidebar), white 10%) !important;
          color: var(--primary-grey);

          &:focus {
            ~ span .iconify {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .is-notification {
    &.is-active {
      .navbar-link {
        .iconify {
          color: var(--primary) !important;
        }
      }
    }

    .navbar-dropdown {
      background: var(--dark-sidebar) !important;
      border-color: var(--dark-sidebar) !important;

      .heading {
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;

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

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
  .mobile-navbar {
    display: flex;
  }
}

@media (width <= 767px) {
  .mobile-navbar {
    display: flex;
  }
}
</style>
