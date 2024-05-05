<script setup lang="ts">
import { useNavbarLayoutContext } from './navbar.context'

const { theme } = useNavbarLayoutContext()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})
</script>

<template>
  <div
    class="navbar-navbar"
    :class="[
      isScrolling && 'is-scrolled',
      theme === 'fade' && 'is-transparent',
      theme === 'colored' && 'is-colored',
    ]"
  >
    <div class="navbar-navbar-inner">
      <div class="left">
        <slot name="title" />
      </div>
      <div class="center">
        <slot name="links" />
      </div>
      <div class="right">
        <slot name="toolbar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-navbar {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 65px;
  background: var(--white);
  transition: all 0.3s; // transition-all test
  border-bottom: 1px solid var(--fade-grey);
  z-index: 100;

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
  }

  &.is-colored {
    background: var(--landing-yyy);
    border-bottom-color: var(--landing-yyy);

    .navbar-navbar-inner {
      .left {
        .separator {
          border-color: color-mix(in oklab, var(--landing-yyy), white 18%);
        }

        .title {
          color: var(--smoke-white);
        }
      }

      .center {
        .centered-links {
          .centered-link {
            &:hover {
              background: color-mix(in oklab, var(--landing-yyy), black 6%);

              .iconify {
                color: var(--smoke-white);
              }

              span {
                color: var(--smoke-white);
              }
            }

            &.is-active {
              // background: color-mix(in oklab, var(--landing-yyy), black 12%);
              // border-color: color-mix(in oklab, var(--landing-yyy), white 6%);

              &:hover,
              &:focus {
                background: color-mix(in oklab, var(--landing-yyy), black 12%);
              }

              .iconify {
                color: var(--smoke-white);
              }

              span {
                color: var(--smoke-white);
              }
            }

            .iconify {
              color: var(--light-text);
            }

            span {
              color: var(--light-text);
            }
          }
        }

        .centered-drops {
          .centered-drop {
            .dropdown {
              &:hover {
                .is-trigger {
                  .button {
                    background: color-mix(in oklab, var(--landing-yyy), black 6%);
                    color: var(--smoke-white);
                  }
                }
              }

              &.is-active {
                .is-trigger {
                  .button {
                    background: color-mix(in oklab, var(--landing-yyy), black 12%);
                    border-color: color-mix(in oklab, var(--landing-yyy), white 6%);
                  }
                }
              }

              .is-trigger {
                .button {
                  background: var(--landing-yyy);
                  color: var(--light-text);

                  .caret {
                    margin-inline-start: 0;
                  }
                }
              }
            }
          }

          .centered-button {
            .button {
              background: var(--landing-yyy);
              color: var(--light-text);

              &:hover,
              &:focus {
                background: color-mix(in oklab, var(--landing-yyy), black 6%);
                color: var(--smoke-white);
              }
            }
          }
        }

        .centered-search {
          .field {
            .control {
              .input {
                background: color-mix(in oklab, var(--primary), black 10%);
                border-color: color-mix(in oklab, var(--primary), black 6%);
                color: var(--smoke-white);

                &::placeholder {
                  color: color-mix(in oklab, var(--primary), white 2%);
                }

                &:focus ~ .form-icon.iconify {
                  color: var(--smoke-white);
                }
              }

              .form-icon.iconify {
                color: color-mix(in oklab, var(--primary), white 6%);
              }
            }
          }
        }
      }

      .right {
        .toolbar {
          .toolbar-link {
            &:hover {
              background: color-mix(in oklab, var(--landing-yyy), black 12%);
              border-color: color-mix(in oklab, var(--landing-yyy), black 12%);
            }

            > .iconify {
              color: var(--smoke-white);
            }
          }

          .dropdown {
            &:hover {
              .is-trigger {
                background: color-mix(in oklab, var(--landing-yyy), black 12%);
                border-color: color-mix(in oklab, var(--landing-yyy), black 12%);
              }
            }

            &.is-dots {
              &.is-active {
                .is-trigger {
                  background: color-mix(in oklab, var(--landing-yyy), black 12%);
                  border-color: color-mix(in oklab, var(--landing-yyy), black 12%);
                }
              }
            }

            .is-trigger .iconify {
              color: var(--smoke-white);
            }
          }
        }

        .icon-link {
          background: var(--landing-yyy);

          &:hover,
          &:focus {
            background: color-mix(in oklab, var(--landing-yyy), black 12%);
          }

          > .iconify {
            color: var(--smoke-white);
          }
        }
      }
    }
  }

  .navbar-navbar-inner {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
      justify-content: center;
      flex-grow: 2;
      width: 50%;

      .centered-links {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 0.1rem;
        // max-width: 580px;

        .centered-link {
          // flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          text-align: center;
          padding: 6px 24px;
          border-radius: 8px;
          border: 1px solid transparent;
          margin: 0 4px;
          transition: all 0.3s; // transition-all test
          white-space: nowrap;

          &:hover {
            background: color-mix(in oklab, var(--fade-grey), white 4%);
          }

          &.is-active {
            .iconify {
              color: var(--primary);
            }

            span {
              color: color-mix(in oklab, var(--primary), black 8%);
            }
          }

          .iconify {
            font-size: 20px;
            color: color-mix(in oklab, var(--light-text), white 6%);
            stroke-width: 1.6px;
            transition: stroke 0.3s;
          }

          span {
            display: block;
            font-family: var(--font);
            font-size: 0.725rem;
            letter-spacing: 0.6px;
            font-weight: 500;
            color: var(--muted-grey);
            text-transform: uppercase;
            transition: all 0.3s;
            cursor: pointer;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 25%;

      .icon-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        width: 34px;
        font-size: 18px;
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
          stroke-width: 1.6px;
          color: var(--light-text);
          transition: stroke 0.3s;
          vertical-align: 0;
          transform: none;
        }
      }
    }
  }
}

/* ==========================================================================
4. Webapp Navbar Dark mode
========================================================================== */

.is-dark {
  .navbar-navbar:not(.is-colored) {
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
    }

    .navbar-navbar-inner {
      .left {
        .separator {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
        }
      }

      .center {
        .centered-links {
          .centered-link {
            &:hover {
              background: color-mix(in oklab, var(--dark-sidebar), white 2%);
            }

            &.is-active {
              // background: color-mix(in oklab, var(--dark-sidebar), white 2%);
              // border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

              // &:hover,
              // &:focus {
              //   background: color-mix(in oklab, var(--dark-sidebar), white 2%);
              // }

              span {
                color: var(--primary);
              }

              .iconify {
                color: var(--primary);
              }
            }
          }
        }
      }

      .right {

        .icon-link {
          background: color-mix(in oklab, var(--dark-sidebar), black 2%);

          &:hover,
          &:focus {
            background: color-mix(in oklab, var(--dark-sidebar), white 2%);
          }
        }
      }
    }
  }

  .navbar-navbar {
    &.is-colored {
      .navbar-navbar-inner {
        .left {
          .title {
            color: var(--smoke-white) !important;
          }
        }

        .center {
          .centered-links {
            .centered-link {
              &:hover {
                .iconify {
                  color: var(--smoke-white);
                }

                span {
                  color: var(--smoke-white);
                }
              }

              &.is-active {
                .iconify {
                  color: var(--smoke-white);
                }

                span {
                  color: var(--smoke-white);
                }
              }
            }
          }

          .centered-drops {
            .centered-drop {
              .dropdown {
                &:hover {
                  .is-trigger {
                    .button {
                      color: var(--smoke-white);
                    }
                  }
                }

                &.is-active {
                  .is-trigger {
                    .button {
                      color: var(--smoke-white);
                    }
                  }
                }

                &.has-mega-dropdown {
                  .dropdown-menu {
                    .dropdown-content {
                      .category-selector {
                        .title-wrap {
                          h4 {
                            color: var(--dark-dark-text);
                          }
                        }

                        .category-selector-inner {
                          .category-item {
                            background: color-mix(in oklab, var(--dark-sidebar), white 4%);
                            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

                            &:hover,
                            &:focus {
                              i,
                              span {
                                color: var(--primary);
                              }
                            }

                            span {
                              color: var(--dark-dark-text);
                            }
                          }
                        }
                      }

                      .mega-menus {
                        .dropdown-item-group {
                          .column-heading {
                            color: var(--dark-dark-text);
                            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
                          }

                          .column-content {
                            .is-media {
                              &:hover {
                                .meta {
                                  span:first-child {
                                    color: var(--smoke-white);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            .centered-button {
              .button {
                &:hover {
                  color: var(--smoke-white) !important;
                }
              }
            }
          }

          .centered-search {
            .field {
              .control {
                .input {
                  color: var(--smoke-white);

                  &:focus ~ .form-icon .iconify {
                    color: var(--smoke-white) !important;
                  }
                }
              }
            }
          }
        }

        .right {
          .toolbar {
            .toolbar-link {
              &:hover {
                background: color-mix(in oklab, var(--landing-yyy), black 12%) !important;
                border-color: color-mix(in oklab, var(--landing-yyy), black 12%) !important;
              }

              > .iconify {
                color: var(--smoke-white);
              }
            }

            .dropdown {
              .is-trigger {
                &:hover {
                  background: color-mix(in oklab, var(--landing-yyy), black 12%) !important;
                  border-color: color-mix(in oklab, var(--landing-yyy), black 12%) !important;
                }

                .iconify {
                  color: var(--smoke-white);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
