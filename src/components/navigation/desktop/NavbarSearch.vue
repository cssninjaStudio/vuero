<script setup lang="ts">
export type NavbarSearchTheme = 'default' | 'center' | 'fade'

const props = withDefaults(
  defineProps<{
    theme?: NavbarSearchTheme
  }>(),
  {
    theme: 'default',
  }
)

const { y } = useWindowScroll()
const isScrolling = computed(() => y.value > 30)
</script>

<template>
  <div
    class="navbar-navbar-clean"
    :class="[isScrolling && 'is-scrolled', props.theme === 'fade' && 'is-transparent']"
  >
    <div class="navbar-navbar-inner">
      <!-- Title slot -->
      <div class="left">
        <slot name="title">
          <h1 class="title is-6">Page Title</h1>
        </slot>
      </div>
      <div class="center">
        <slot name="search"></slot>
      </div>
      <div class="right">
        <!-- Toolbar slot -->
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div
      class="navbar-navbar-lower"
      :class="[
        props.theme === 'default' && 'is-between',
        props.theme === 'center' && 'is-centered',
        props.theme === 'fade' && 'is-centered',
      ]"
    >
      <div v-if="props.theme !== 'default'" class="left">
        <div class="welcome-text">
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div
        :class="[
          props.theme === 'default' && 'left',
          props.theme === 'center' && 'center',
          props.theme === 'fade' && 'center',
        ]"
      >
        <slot name="links">
          <div class="buttons">
            <a href="/" class="button">Homepage</a>
          </div>
        </slot>
      </div>
      <div class="right">
        <slot name="toolbar-bottom"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/layout/responsive';

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
        border-inline-end: 1px solid var(--fade-grey-dark-4);
        margin: 0 20px 0 16px;
      }

      .project-dropdown {
        margin-inline-end: 12px;
        cursor: pointer !important;

        > img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        .dropdown-menu {
          margin-top: 28px;

          .dropdown-content {
            padding-top: 0;
            padding-bottom: 0;
            overflow: hidden;

            .dropdown-block {
              display: flex;
              align-items: center;
              padding: 16px;

              &:hover,
              &:focus {
                background: var(--fade-grey-light-4);
              }

              .meta {
                margin-inline-start: 12px;
                font-family: var(--font);

                span {
                  display: block;

                  &:first-child {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--dark-text);
                    line-height: 1.2;
                    max-width: 140px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }

                  &:nth-child(2) {
                    // text-transform: uppercase;
                    color: var(--light-text);
                    font-size: 0.85rem;
                  }
                }
              }
            }
          }
        }
      }
    }

    .center {
      display: flex;
      align-items: center;
      flex-grow: 2;

      .centered-search {
        width: 100%;

        .field {
          margin-bottom: 0;

          .control {
            .input {
              border-radius: 0.5rem;
            }

            .form-icon {
              &.is-right {
                inset-inline-start: unset !important;
                inset-inline-end: 6px;
                cursor: pointer;
              }
            }

            .search-results {
              top: 48px;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 25%;
      margin-inline-start: auto;

      .toolbar {
        .dropdown {
          .dropdown-menu {
            margin-top: 28px;
          }
        }
      }

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

        svg {
          height: 18px;
          width: 18px;
          stroke-width: 1.6px;
          color: var(--light-text);
          transition: stroke 0.3s;
          vertical-align: 0;
          transform: none;
        }
      }

      .profile-dropdown {
        > img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
        }

        .dropdown-menu {
          margin-top: 12px;

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
                margin-inline-start: 12px;
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
                stroke: var(--smoke-white) !important;
              }
            }
          }
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
          &:focus {
            background: var(--widget-grey-dark-2);
            color: var(--dark-text);
          }
        }

        .welcome-text {
          font-size: 0.9rem;
          font-weight: 500;
          font-family: var(--font);
          color: var(--light-text);
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
      background: var(--dark-sidebar-dark-2);
      border-color: var(--dark-sidebar-light-1);

      &.is-transparent {
        background: transparent;
        box-shadow: none;
        border-bottom-color: transparent;

        &.is-solid,
        &.is-scrolled {
          background: var(--dark-sidebar-dark-2);
          border-color: var(--dark-sidebar-light-1);
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
                  background: var(--dark-sidebar-dark-2) !important;
                  border-color: var(--dark-sidebar-dark-2) !important;
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
          border-color: var(--dark-sidebar-light-12);
        }

        .project-dropdown {
          .dropdown-menu {
            .dropdown-content {
              .dropdown-block {
                background: var(--dark-sidebar-light-2) !important;

                &:hover,
                &:focus {
                  background: var(--dark-sidebar-light-5) !important;
                }

                .meta {
                  span {
                    &:first-child {
                      color: var(--dark-dark-text) !important;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .right {
        .icon-link {
          background: var(--landing-yyy);

          &:hover,
          &:focus {
            background: var(--landing-yyy-dark-12);
          }

          > svg {
            color: var(--smoke-white);
            stroke: var(--smoke-white);
          }
        }

        .profile-dropdown {
          .dropdown-menu {
            .dropdown-content {
              .dropdown-head {
                background: var(--dark-sidebar-light-2) !important;

                &:hover,
                &:focus {
                  background: var(--dark-sidebar-light-2) !important;
                }

                .meta {
                  &:hover {
                    background: var(--dark-sidebar-light-2) !important;
                  }

                  span {
                    &:first-child {
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

    .navbar-navbar-lower {
      &.is-between,
      &.is-centered {
        .left,
        .center {
          .button {
            background: var(--dark-sidebar-dark-2) !important;
            border-color: var(--dark-sidebar-dark-2) !important;

            &:hover,
            &:focus {
              background: var(--dark-sidebar-light-4) !important;
              border-color: var(--dark-sidebar-light-4) !important;
              color: var(--white) !important;
            }
          }
        }
      }
    }
  }
}
</style>
