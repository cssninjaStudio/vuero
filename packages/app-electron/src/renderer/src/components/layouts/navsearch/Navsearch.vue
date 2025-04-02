<template>
  <div
    class="navbar-navbar-clean"
  >
    <div class="navbar-navbar-inner">
      <div class="left">
        <slot name="title" />
      </div>
      <div class="center">
        <slot name="search" />
      </div>
      <div class="right">
        <slot name="toolbar" />
      </div>
    </div>
    <div
      class="navbar-navbar-lower"
      :class="[
        'subtitle' in $slots && 'is-between',
        !('subtitle' in $slots) && 'is-centered',
      ]"
    >
      <div
        v-if="'subtitle' in $slots"
        class="left"
      >
        <slot name="subtitle" />
      </div>
      <div
        :class="[
          !('subtitle' in $slots) && 'left',
          'subtitle' in $slots && 'center',
        ]"
      >
        <slot name="links" />
      </div>
      <div
        v-if="'toolbar-bottom' in $slots"
        class="right"
      >
        <slot name="toolbar-bottom" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-navbar-clean {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  background: var(--white);
  z-index: 15;
  transition: all 0.3s; // transition-all test

  &.is-transparent {
    background: transparent;
    box-shadow: none;
    border-bottom-color: transparent;

    &.is-solid,
    &.is-scrolled {
      background: var(--white);
      border-bottom-color: var(--fade-grey);
    }

    &.is-solid {
      box-shadow: none !important;
    }

    &.is-scrolled {
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
    }

    &:not(.is-scrolled) {
      .navbar-navbar-lower {
        &.is-between,
        &.is-centered {
          .left,
          .center {
            .button:not(:hover) {
              background: transparent;
              border-color: transparent;
            }

            .button:hover {
              background: var(--white);
              border-color: var(--white);
            }
          }
        }
      }
    }
  }

  .navbar-navbar-inner {
    display: flex;
    height: 50px;
    padding: 0 20px;

    .left {
      display: flex;
      align-items: center;
      width: 25%;

      .brand {
        display: flex;
        align-items: center;

        img {
          display: block;
          min-width: 38px;
          height: 38px;
        }

        span {
          font-family: var(--font);
          font-size: 0.95rem;
          color: var(--muted-grey);
          letter-spacing: 1px;
          max-width: 50px;
          line-height: 1.2;
          margin-inline-start: 8px;
        }
      }

      .separator {
        height: 38px;
        width: 2px;
        border-inline-end: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
        margin: 0 20px 0 16px;
      }
    }

    .center {
      display: flex;
      align-items: center;
      flex-grow: 2;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 25%;
      margin-inline-start: auto;

      .icon-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        width: 34px;
        border-radius: var(--radius-rounded);
        margin: 0 4px;
        transition: all 0.3s; // transition-all test

        &:hover {
          background: var(--white);
          border-color: var(--fade-grey);
          box-shadow: var(--light-box-shadow);
        }

        .iconify {
          height: 18px;
          width: 18px;
          font-size: 18px;
          stroke-width: 1.6px;
          color: var(--light-text);
          transition: stroke 0.3s;
          vertical-align: 0;
          transform: none;
        }
      }
    }
  }

  .navbar-navbar-lower {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;

    &.is-between,
    &.is-centered {
      justify-content: space-between;

      .left,
      .right, {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: var(--font);
        color: var(--light-text);
      }

      .left,
      .center {
        display: flex;
        align-items: center;

        .button {
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 0.5rem;
          border: none;
          color: var(--light-text);

          &:hover,
          &:focus,
          &.router-link-exact-active {
            background: color-mix(in oklab, var(--widget-grey), black 2%);
            color: var(--dark-text);
            box-shadow: none;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .avatar-stack {
          margin-inline-end: 1rem;
        }

        .dropdown {
          .button {
            &.is-circle {
              min-width: 35px;
            }
          }
        }
      }
    }

    &.is-centered {
      .left,
      .right {
        width: 25%;
      }

      .center {
        justify-content: center;
        flex-grow: 2;
      }
    }
  }
}

.is-dark {
  .navbar-navbar-clean {
    &:not(.is-colored) {
      background: color-mix(in oklab, var(--dark-sidebar), black 2%);
      border-color: color-mix(in oklab, var(--dark-sidebar), white 1%);

      &.is-transparent {
        background: transparent;
        box-shadow: none;
        border-bottom-color: transparent;

        &.is-solid,
        &.is-scrolled {
          background: color-mix(in oklab, var(--dark-sidebar), black 2%);
          border-color: color-mix(in oklab, var(--dark-sidebar), white 1%);
        }

        &:not(.is-scrolled) {
          .navbar-navbar-lower {
            &.is-between,
            &.is-centered {
              .left,
              .center {
                .button:not(:hover) {
                  background: transparent !important;
                  border-color: transparent !important;
                }

                .button:hover {
                  background: color-mix(in oklab, var(--dark-sidebar), black 2%) !important;
                  border-color: color-mix(in oklab, var(--dark-sidebar), black 2%) !important;
                }
              }
            }
          }
        }
      }
    }

    .navbar-navbar-inner {
      .left {
        .separator {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
        }
      }

      .right {
        .icon-link {
          background: var(--landing-yyy);

          &:hover,
          &:focus {
            background: color-mix(in oklab, var(--landing-yyy), black 12%);
          }

          > .iconify {
            color: var(--smoke-white);
            stroke: var(--smoke-white);
          }
        }
      }
    }

    .navbar-navbar-lower {
      &.is-between,
      &.is-centered {
        .left,
        .center {
          .button {
            background: color-mix(in oklab, var(--dark-sidebar), black 2%) !important;
            border-color: color-mix(in oklab, var(--dark-sidebar), black 2%) !important;

            &:hover,
            &:focus {
              background: color-mix(in oklab, var(--dark-sidebar), white 4%) !important;
              border-color: color-mix(in oklab, var(--dark-sidebar), white 4%) !important;
              color: var(--white) !important;
            }
          }
        }
      }
    }
  }
}
</style>
