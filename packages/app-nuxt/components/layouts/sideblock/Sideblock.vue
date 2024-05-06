<script setup lang="ts">
import { useSideblockLayoutContext } from './sideblock.context'

const { theme } = useSideblockLayoutContext()

const themeClasses = computed(() => {
  switch (theme.value) {
    case 'color':
      return 'is-colored'
    case 'curved':
      return 'is-curved'
    case 'color-curved':
      return 'is-colored is-curved'
    default:
      return ''
  }
})
</script>

<template>
  <div
    class="sidebar-block is-active"
    :class="[themeClasses]"
  >
    <div class="sidebar-block-header">
      <slot name="header" />
    </div>
    <div class="sidebar-block-inner">
      <ul>
        <slot name="links" />
      </ul>
    </div>
    <div class="sidebar-block-footer">
      <slot name="links-bottom" />
    </div>
  </div>
</template>

<style lang="scss">
.sidebar-block {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  height: 100vh;
  width: 280px;
  background-color: var(--white);
  box-shadow: none;
  z-index: 35;
  transition:
    border-radius 0.3s,
    transform 0.3s;

  &.is-curved {
    border-start-end-radius: 2rem;
    border-end-end-radius: 2rem;
    border-inline-end: 1px solid var(--border) !important;
    box-shadow: none;
  }

  .sidebar-block-header {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 2.5rem;

    .sidebar-block-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      margin-inline-end: 0.5rem;

      img {
        height: 38px;
      }
    }

    h3 {
      font-family: var(--font-alt);
      color: var(--dark-text);
      font-size: 1.3rem;
    }

    .sidebar-block-close {
      margin-inline-start: auto;
      display: block;
      width: 18px;
      height: 18px;

      .iconify {
        width: 18px;
        height: 18px;
      }
    }
  }

  .sidebar-block-inner {
    position: relative;
    height: calc(100vh - 160px);
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background: var(--white);
    margin-top: 40px;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0 0 0 / 20%);
    }

    ul {
      padding: 10px 0;
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-inline-start: 2px solid transparent;
      cursor: pointer;

      &.is-active {
        a {
          font-weight: 500;
          color: var(--primary);
        }

        > a {
          font-weight: 600;
        }
      }

      a.router-link-exact-active {
        font-weight: 500;
        color: var(--primary);

        > a {
          font-weight: 600;
        }
      }

      &.divider {
        cursor: default;
        pointer-events: none;
        height: 10px;
        margin: 5px 20px 10px;
        border-bottom: 1px solid rgba(0 0 0 / 15%);
      }

      &.has-children {
        display: block;
        height: unset;
        min-height: 36px;
        margin-bottom: 4px;

        &.active {
          .collapse-wrap {
            margin-bottom: 0.5rem;

            > a {
              color: var(--dark-text);
              font-weight: 600;
              background: var(--widget-grey);
              margin-bottom: 0.25rem;

              .icon {
                color: var(--primary);
              }

              > .iconify {
                transform: rotate(calc(var(--transform-direction) * 90deg));
              }
            }
          }
        }

        &:hover {
          .collapse-wrap > a {
            color: var(--dark-text);

            .icon {
              color: var(--primary);
            }
          }
        }

        &.is-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .tag {
            margin-inline-start: auto;
            margin-inline-end: 20px;
            border-radius: 100px;
            background: var(--danger);
            color: var(--white);
            font-size: 0.8rem;
            font-weight: 600;
          }
        }

        .collapse-wrap {
          display: flex;
          align-items: center;
          height: 100%;

          > a {
            font-family: var(--font-alt);
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--light-text);
            padding: 0.85rem;
            margin: 0 2rem;
            border-radius: 0.75rem;

            .icon {
              color: var(--light-text);
              font-size: 1.25rem;
              margin-inline-end: 1rem;

              .iconify {
                font-size: 1.25rem;
              }

              .iconify {
                stroke-width: 1.5px;
              }
            }

            > .iconify {
              position: relative;
              top: 1px;
              height: 18px;
              width: 18px;
              margin-inline-start: auto;
              transform: rotate(calc(var(--transform-direction) * 0));
              stroke: var(--light-text);
              transition: all 0.3s;
            }
          }
        }

        ul {
          li {
            height: 32px;
            font-family: var(--font);

            &.is-active {
              .is-submenu {
                font-weight: 500;

                .iconify {
                  display: block;
                }
              }
            }

            .is-submenu {
              display: flex;
              font-weight: 400;
              font-family: var(--font);
              align-items: center;
              padding: 0 2rem 0 3.5rem;
              font-size: 0.9rem;

              &.is-active,
              &.router-link-exact-active {
                font-weight: 500;
                color: var(--primary);
              }

              .lnil,
              .lnir {
                font-size: 1.2rem;
                margin-inline-end: 10px;
              }

              > span {
                font-family: var(--font);
              }

              .iconify {
                display: none;
                height: 8px;
                width: 8px;
                max-width: 8px;
                min-width: 8px;
                stroke-width: 2px;
                margin-inline-end: 8px;

                &.is-auto {
                  margin-inline-start: auto;
                  height: 15px;
                  width: 15px;
                  max-width: 15px;
                  min-width: 15px;
                  stroke-width: 2px;
                  margin-inline-end: 4px;
                }
              }
            }
          }
        }
      }

      a:not(.single-link) {
        font-family: var(--font);
        display: block;
        width: 100%;
        padding: 0 20px;
        font-size: 0.95rem;
        color: var(--light-text);

        &:hover,
        &:focus {
          color: var(--dark-text);
        }
      }

      > a {
        font-family: var(--font-alt);
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--light-text);
      }
    }

    .single-link {
      font-family: var(--font-alt);
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--light-text);
      padding: 0.85rem;
      margin: 0 2rem 0.25rem;
      width: 100%;
      border-radius: 0.65rem;
      transition: background-color 0.3s;

      &:hover,
      &:focus,
      &.active {
        background: var(--widget-grey);
        color: var(--dark-text);

        .icon {
          .iconify {
            color: var(--primary);
          }

          .iconify {
            stroke: var(--primary);
          }
        }
      }

      .icon {
        font-size: 1.25rem;
        margin-inline-end: 1rem;

        .iconify {
          font-size: 1.25rem;
        }

        .iconify {
          stroke-width: 1.5px;
        }
      }

      .badge {
        margin-inline-start: auto;
        color: var(--white);
        background: var(--primary);
        height: 1.5rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 0.6;
        border-radius: 10rem;
      }
    }
  }

  .sidebar-block-footer {
    height: 60px;
    width: 100%;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a:not(.dropdown-item) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-link,
    .icon-link {
      height: 48px;
      width: 48px;
      color: var(--light-text);
      border-radius: 50%;
      transition: background-color 0.3s;

      .iconify {
        font-size: 18px;
        height: 20px;
        width: 20px;
        transition: stroke 0.3s;
      }

      &:hover {
        background: var(--widget-grey);
        color: var(--primary);
      }
    }

    .dropdown {
      position: relative;
      display: block;
      height: 42px;
      width: 42px !important;

      > img {
        height: 42px;
        width: 42px;
        border-radius: 50%;
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
        border-radius: 50%;
        border: 2px solid var(--white);
        background: var(--success);
        z-index: 2;
      }
    }
  }
}

/* ==========================================================================
2. Sidebar Block Dark mode
========================================================================== */

.is-dark {
  .sidebar-block {
    background: color-mix(in oklab, var(--dark-sidebar), white 5%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 5%) !important;

    .panel-close {
      .iconify {
        stroke: var(--muted-grey) !important;
      }
    }

    .sidebar-block-header {
      h3 {
        color: var(--smoke-white);
      }
    }

    .sidebar-block-inner {
      background: color-mix(in oklab, var(--dark-sidebar), white 5%);

      li {
        &.has-children {
          &.active {
            .collapse-wrap > a {
              color: var(--smoke-white);
              background: color-mix(in oklab, var(--dark-sidebar), white 8%);

              .icon {
                color: var(--accent);
              }
            }
          }

          &:hover {
            .collapse-wrap > a {
              color: var(--smoke-white);

              .icon {
                color: var(--accent);
              }
            }
          }
        }
      }

      a:not(.single-link) {
        &:hover {
          color: var(--smoke-white);
        }
      }

      .single-link {
        &:hover,
        &.active {
          background: color-mix(in oklab, var(--dark-sidebar), white 8%);
          color: var(--smoke-white);

          .icon {
            .iconify {
              color: var(--accent);
            }

            .iconify {
              stroke: var(--accent);
            }
          }
        }

        .badge {
          background: var(--accent);
        }
      }
    }

    .sidebar-block-footer {
      .search-link {
        color: var(--light-text);

        &:hover,
        &:focus {
          background: color-mix(in oklab, var(--dark-sidebar), white 8%);
          color: var(--accent);
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .sidebar-block {
    display: none;
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .sidebar-block {
    display: none;
  }
}

/* ==========================================================================
3. Sidebar Block Colored
========================================================================== */

html:not(.is-dark) {
  .sidebar-block {
    &.is-colored {
      background: color-mix(in oklab, var(--dark), black 12%) !important;
      border-color: color-mix(in oklab, var(--dark), white 5%) !important;

      .panel-close {
        .iconify {
          stroke: var(--muted-grey) !important;
        }
      }

      .sidebar-block-header {
        h3 {
          color: var(--smoke-white) !important;
        }
      }

      .sidebar-block-inner {
        background: color-mix(in oklab, var(--dark), black 12%) !important;

        li {
          &.has-children {
            &.active {
              .collapse-wrap > a {
                color: var(--smoke-white) !important;
                background: color-mix(in oklab, var(--dark), black 7%) !important;

                .icon {
                  color: var(--primary) !important;
                }
              }
            }

            &:hover {
              .collapse-wrap > a {
                color: var(--smoke-white) !important;

                .icon {
                  color: var(--primary) !important;
                }
              }
            }
          }
        }

        a:not(.single-link) {
          &:hover {
            color: var(--smoke-white) !important;
          }
        }

        .single-link {
          &:hover,
          &.active {
            background: color-mix(in oklab, var(--dark), black 7%) !important;
            color: var(--smoke-white) !important;

            .icon {
              .iconify {
                color: var(--primary) !important;
              }

              .iconify {
                stroke: var(--primary) !important;
              }
            }
          }

          .badge {
            background: var(--primary) !important;
          }
        }
      }

      .sidebar-block-footer {
        .search-link {
          color: var(--light-text) !important;

          &:hover,
          &:focus {
            background: color-mix(in oklab, var(--dark), black 7%) !important;
            color: var(--primary) !important;
          }
        }
      }
    }
  }
}
</style>
