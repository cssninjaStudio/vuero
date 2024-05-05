<script setup lang="ts">
import { useSidebarLayoutContext } from './sidebar.context'

const {
  theme,
  isOpen,
} = useSidebarLayoutContext()

const themeClasses = computed(() => {
  switch (theme.value) {
    case 'color':
      return 'is-colored'
    case 'labels':
      return 'has-labels'
    case 'labels-hover':
      return 'has-labels has-hover-labels'
    case 'float':
      return !isOpen.value ? 'is-float' : 'is-float is-bordered'
    case 'curved':
      return !isOpen.value ? 'is-curved' : ''
    case 'color-curved':
      return !isOpen.value ? 'is-colored is-curved' : 'is-colored'
    default:
      return ''
  }
})
</script>

<template>
  <div
    class="main-sidebar"
    :class="[themeClasses]"
  >
    <div v-if="'logo' in $slots" class="sidebar-brand">
      <slot name="logo" />
    </div>
    <div class="sidebar-inner">
      <div class="naver" />

      <ul class="icon-menu has-slimscroll">
        <slot name="links" />
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <slot name="links-bottom" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.main-sidebar {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  margin-inline-start: 0;
  height: 100vh;
  width: 80px;
  background-color: var(--body-color);
  box-shadow: none;
  z-index: 35;
  transition:
    border-radius 0.3s ease-in,
    background-color 0.3s ease-in,
    top 0.3s ease-in,
    margin-inline-start 0.3s ease-in,
    height 0.3s ease-in;

  &.is-bordered {
    border-inline-end: 1px solid var(--fade-grey) !important;
  }

  &.is-open {
    box-shadow: 2px 0 2px 0 rgb(0 0 0 / 2%);
  }

  &.is-curved {
    &:not(.is-bordered) {
      border-start-end-radius: 20px;
      border-end-end-radius: 20px;
      border-inline-end: 1px solid color-mix(in oklab, var(--fade-grey), black 4%) !important;

      .sidebar-brand {
        border-start-end-radius: 20px;
      }
    }
  }

  &.is-colored {
    border-color: color-mix(in oklab, var(--landing-yyy), white 2%);
    background: var(--landing-yyy);

    .sidebar-inner {
      .naver {
        background: var(--white);
      }

      .icon-menu,
      .bottom-menu {
        li {
          a {
            &:hover,
            &.is-active,
            &.router-link-active {
              .sidebar-svg {
                color: var(--smoke-white);
              }
            }

            .sidebar-svg {
              color: var(--light-text);
            }
          }
        }
      }
    }
  }

  &.has-labels {
    &.has-hover-labels {
      .sidebar-inner {
        .icon-menu,
        .bottom-menu {
          li {
            &:hover {
              a {
                &::after {
                  opacity: 1 !important;
                }
              }
            }

            a {
              &.is-active,
              &.router-link-active {
                &::after {
                  opacity: 1 !important;
                }
              }

              &::after {
                opacity: 0;
              }
            }
          }
        }
      }
    }

    .sidebar-inner {
      .icon-menu,
      .bottom-menu {
        overflow-x: hidden;

        li {
          a {
            &.router-link-active {
              &::after {
                color: var(--primary);
              }
            }

            &::after {
              content: attr(data-content);
              position: absolute;
              bottom: -14px;
              inset-inline-start: -29px;
              inset-inline-end: 0;
              margin: 0 auto;
              font-family: var(--font);
              font-size: 0.65rem;
              font-weight: 500;
              color: var(--light-text);
              text-transform: uppercase;
              text-align: center;
              width: 80px;
              transition: opacity 0.3s;
            }

            .iconify {
              position: relative;
              top: -4px;
            }
          }
        }
      }
    }
  }

  &.is-float {
    border-radius: 1000px;
    overflow: hidden;
    width: 74px;
    margin-inline-start: 6px;
    top: 6px;
    height: calc(100vh - 12px);
    border: none !important;

    &:not(.is-bordered) {
      box-shadow: var(--light-box-shadow);
    }

    &.is-bordered {
      width: 80px;
      margin-inline-start: 0;
      top: 0;
      height: 100vh;
      border-radius: 0;

      .sidebar-brand {
        width: 80px;
      }

      .sidebar-inner {
        .icon-menu,
        .bottom-menu {
          li {
            width: 80px;
          }
        }
      }
    }

    .sidebar-brand {
      width: 74px;
    }

    .sidebar-inner {
      .icon-menu,
      .bottom-menu {
        li {
          width: 74px;
        }
      }

      .bottom-menu {
        padding-bottom: 4px;
      }
    }
  }

  .sidebar-brand {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 5px;
      width: 36px;
      height: auto;
    }
  }

  .sidebar-inner {
    height: calc(100% - 60px);
    width: 100%;
    position: relative;

    .naver {
      position: absolute;
      top: -150px;
      inset-inline-start: 0;
      height: 64px;
      width: 4px;
      border-radius: 100px;
      background: var(--primary);
      transition: all 0.3s; // transition-all test

      &.is-search-results {
        margin-top: 240px;
      }

      &.from-bottom {
        top: unset !important;
        bottom: -64px;
        margin-top: 0 !important;
      }
    }

    .icon-menu {
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 400px;
    }

    .icon-menu,
    .bottom-menu {
      li {
        position: relative;
        width: 80px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.is-active,
        &.router-link-active {
          .iconify {
            color: var(--primary);
          }
        }

        .is-messages-counter {
          position: absolute;
          top: 6px;
          inset-inline-end: 16px;
          display: block;
          line-height: 17px;
          background: var(--danger);
          color: var(--white);
          font-weight: 500;
          font-size: 0.6rem;
          border-radius: 100px;
          border: 1px solid var(--white);
          transform: scale(0.8);
        }

        a {
          display: flex;
          position: relative;
          transform: rotate(calc(var(--transform-direction) * 0));
          opacity: 1;
          transition: all 0.3s; // transition-all test

          &:hover,
          &.is-selected,
          &.router-link-active {
            .sidebar-svg {
              color: var(--primary);
            }
          }

          .sidebar-svg {
            font-size: 20px;
            color: var(--title-grey);
            stroke-width: 1.6px;
            transition: all 0.3s; // transition-all test
          }

          &:hover .iconify,
          &.is-active .iconify,
          &.router-link-exact-active .iconify {
            color: var(--primary);
          }

          &.is-opened {
            transform: rotate(calc(var(--transform-direction) * 360deg));
            opacity: 0;
          }

          &.is-inactive {
            transform: rotate(calc(var(--transform-direction) * -360deg));
            opacity: 0;
          }
        }
      }
    }

    .bottom-menu {
      position: absolute;
      bottom: 0;
      padding: 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.is-rotate {
          a:hover {
            animation: rotating 1s linear infinite;
          }
        }

        a:not(.dropdown-item) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dropdown {
          position: relative;
          display: block;
          height: 48px;
          width: 48px !important;

          > img {
            height: 48px;
            width: 48px;
            border-radius: var(--radius-rounded);
            position: relative;
            z-index: 1;
          }

          .status-indicator {
            display: block;
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            width: 14px;
            height: 14px;
            border-radius: var(--radius-rounded);
            border: 2px solid var(--white);
            background: var(--success);
            z-index: 2;
          }
        }
      }
    }
  }
}

.is-dark {
  .main-sidebar:not(.is-colored) {
    background: var(--dark-sidebar);

    &.is-bordered {
      border-inline-end: 1px solid var(--dark-sidebar) !important;
    }

    &.is-curved {
      &:not(.is-bordered) {
        border-color: color-mix(in oklab, var(--dark-sidebar), white 16%) !important;
      }
    }

    .naver {
      background: var(--primary);
    }

    .icon-menu,
    .bottom-menu {
      li {
        a {
          &.is-selected,
          &.router-link-active {
            .iconify {
              color: var(--primary) !important;
            }

            .sidebar-icon .path {
              fill: var(--primary) !important;
            }
          }

          &:hover {
            .iconify {
              color: var(--primary) !important;
            }

            .sidebar-icon .path {
              fill: var(--primary) !important;
            }
          }

          .sidebar-icon.is-active .path {
            fill: var(--primary) !important;
          }
        }

        .iconify {
          color: color-mix(in oklab, var(--primary-grey), white 3%);
        }

        .status-indicator {
          border-color: var(--dark-sidebar) !important;
        }
      }
    }

    .sidebar-inner {
      .icon-menu,
      .bottom-menu {
        li {
          a {
            &.is-active {
              .iconify {
                color: var(--primary) !important;
              }
            }
          }
        }
      }
    }
  }

  .main-sidebar {
    &.is-colored {
      // background: color-mix(in oklab, var(--primary), black 2%);
      // border-color: color-mix(in oklab, var(--primary), black 2%) !important;

      .sidebar-inner {
        .naver {
          opacity: 0.8;
        }

        .icon-menu,
        .bottom-menu {
          li {
            a {
              &:hover,
              &.is-active {
                .sidebar-svg {
                  color: var(--smoke-white);
                  stroke: var(--smoke-white);
                  opacity: 1;
                }
              }

              .sidebar-svg {
                color: color-mix(in oklab, var(--smoke-white), white 2%);
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
