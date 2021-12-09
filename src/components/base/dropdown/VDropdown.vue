<script setup lang="ts">
import { ref } from 'vue'
import { useDropdown } from '/@src/composable/useDropdown'

export type VDropdownColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface VDropdownProps {
  title?: string
  color?: VDropdownColor
  icon?: string
  up?: boolean
  right?: boolean
  modern?: boolean
  spaced?: boolean
}

const props = withDefaults(defineProps<VDropdownProps>(), {
  title: undefined,
  color: undefined,
  icon: undefined,
})

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)

defineExpose({
  ...dropdown,
})
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[
      props.right && 'is-right',
      props.up && 'is-up',
      props.icon && 'is-dots',
      props.modern && 'is-modern',
      props.spaced && 'is-spaced',
    ]"
    class="dropdown"
  >
    <slot name="button" v-bind="dropdown">
      <a
        v-if="props.icon"
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-label="View more actions"
        @keydown.space.prevent="dropdown.toggle"
        @click="dropdown.toggle"
      >
        <VIcon :icon="props.icon" />
      </a>

      <a
        v-else
        tabindex="0"
        class="is-trigger button dropdown-trigger"
        :class="[props.color && `is-${props.color}`]"
        @keydown.space.prevent="dropdown.toggle"
        @click="dropdown.toggle"
      >
        <span v-if="props.title">{{ props.title }}</span>
        <span :class="[!props.modern && 'base-caret', props.modern && 'base-caret']">
          <VIcon v-if="!dropdown.isOpen" icon="fa:angle-down" />
          <VIcon v-else icon="fa:angle-up" />
        </span>
      </a>
    </slot>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="content" v-bind="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  &.is-dots {
    &:hover,
    &.is-active {
      .is-trigger {
        background: var(--fade-grey-light-2);

        svg {
          color: var(--light-text-dark-4);
        }
      }
    }

    .is-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      border-radius: var(--radius-rounded);
      cursor: pointer;
      transition: all 0.3s; // transition-all test

      .iconify {
        vertical-align: middle;
      }

      svg {
        height: 20px;
        width: 20px;
        color: var(--light-text);
        stroke-width: 1.6px;
        transition: stroke 0.3s;
      }
    }

    .dropdown-menu {
      margin-top: 6px;
      padding-bottom: 0;
      text-align: left;
    }
  }

  &.is-modern {
    &.is-active {
      .caret {
        transform: rotate(180deg);
      }
    }

    .is-trigger {
      padding-right: 0.75em;

      .caret {
        height: 22px;
        width: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s; // transition-all test
        margin-left: 6px;

        .iconify {
          vertical-align: middle;
        }

        svg {
          height: 16px;
          width: 16px;
          color: var(--light-text);
        }
      }
    }

    .dropdown-menu {
      margin-top: 6px;
    }
  }

  &.is-spaced {
    .dropdown-menu {
      box-shadow: 0 5px 16px rgb(0 0 0 / 5%);
      border-color: var(--fade-grey);
      padding-top: 0;
      min-width: 260px;

      &.has-margin {
        margin-top: 10px;
      }

      .dropdown-content {
        border: 1px solid var(--fade-grey);
        box-shadow: none;
      }
    }

    // Item
    .dropdown-item {
      padding: 0.5rem 1rem;
      font-size: 0.95rem;
      color: var(--light-text);
      transition: all 0.3s; // transition-all test

      &:not(.is-button):hover,
      &:not(.is-button).is-active {
        background: var(--fade-grey-light-3);
        color: var(--dark-text);
      }

      &.no-hover {
        &:hover {
          background: var(--white);
        }
      }

      &.is-media {
        display: flex;
        align-items: center;

        &:hover,
        &:focus,
        &.is-active {
          .icon {
            svg {
              color: var(--primary);
            }

            .lnir,
            .lnil {
              color: var(--primary);
            }
          }
        }

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 28px;
          width: 28px;

          svg {
            height: 18px;
            width: 18px;
            transition: stroke 0.3s;
          }

          .lnir,
          .lnil {
            font-size: 16px;
            transition: color 0.3s;
          }
        }

        .item-img {
          display: block;
          height: 32px;
          width: 32px;
          border-radius: var(--radius-large);

          &.is-rounded {
            border-radius: var(--radius-rounded);
          }
        }

        .meta {
          margin-left: 10px;

          span {
            display: block;
            line-height: 1.3;

            &:first-child {
              font-family: var(--font-alt);
              font-size: 0.9rem;
              font-weight: 600;
              color: var(--dark-text);
            }

            &:nth-child(2) {
              font-family: var(--font);
              color: var(--light-text);
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }

  .is-trigger {
    &.button {
      font-family: var(--font);

      &:focus {
        border-color: var(--fade-grey-dark-4);
        box-shadow: var(--light-box-shadow);
      }

      .base-caret {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 16px;
        width: 16px;

        .iconify {
          position: relative;
          top: -2px;
          vertical-align: middle;
          margin-left: 0.25rem;
        }
      }
    }
  }

  // Dropdown menu
  .dropdown-menu {
    .dropdown-item {
      color: var(--light-text);
      font-family: var(--font);

      &:hover,
      &:focus {
        color: var(--dark-text);
      }

      &.is-active {
        background: var(--fade-grey-light-3);

        // color: var(--white);
      }

      // Child dropdown parent
      &.has-child {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;

        svg {
          height: 16px;
          width: 16px;
          color: var(--muted-grey);
        }

        // Child hover dropdown
        .child-dropdown {
          position: absolute;
          right: -282px;
          top: 0;
          width: 280px;
          transition: all 0.3s; // transition-all test
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;

          // Inner
          .inner {
            position: relative;
            height: 100%;
            width: 100%;
            background: var(--white);
            border: 1px solid var(--primary-grey);
            border-radius: var(--radius-large);
            padding: 8px 0;

            // Kanban columns settings
            .column-setting {
              padding: 0 6px;
              display: flex;
              align-items: center;
              margin-bottom: 10px;

              label {
                transform: scale(0.7);
              }

              .text {
                span {
                  display: block;
                  font-size: 0.8rem;

                  &:first-child {
                    color: var(--dark-text);
                    font-weight: 500;
                  }

                  &:nth-child(2) {
                    color: var(--muted-grey);
                  }
                }
              }
            }
          }
        }

        // Hover state
        &:hover {
          .child-dropdown {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. Dropdown Dark mode
========================================================================== */

.is-dark {
  .toolbar-link {
    &:hover {
      background: var(--dark-sidebar-light-2) !important;
    }

    svg {
      color: var(--dark-dark-text);
    }
  }

  .dropdown {
    &.is-spaced,
    &.is-dots {
      &:hover,
      &.is-active {
        .is-trigger {
          background: var(--dark-sidebar-light-2) !important;

          svg {
            color: var(--dark-dark-text);
          }
        }
      }

      .dropdown-menu {
        .dropdown-content {
          background: var(--dark-sidebar) !important;
          border-color: var(--dark-sidebar-light-8) !important;

          .heading {
            border-color: var(--dark-sidebar-light-8) !important;

            &:hover,
            &:focus,
            *:hover {
              background: var(--dark-sidebar) !important;
            }

            .heading-right {
              .notification-link {
                color: var(--primary) !important;
              }
            }
          }

          .notification-list {
            li {
              .notification-item {
                &:hover,
                *:hover {
                  background: var(--dark-sidebar) !important;
                }

                .user-content {
                  .user-info {
                    color: var(--dark-dark-text) !important;
                  }
                }
              }
            }
          }

          .is-media {
            &:hover {
              .icon {
                svg {
                  color: var(--primary) !important;
                }

                .lnir,
                .lnil {
                  color: var(--primary);
                }
              }
            }

            &.is-active {
              .icon {
                svg {
                  color: var(--white) !important;
                }

                .lnir,
                .lnil {
                  color: var(--white);
                }
              }

              .meta span {
                color: var(--white) !important;
              }
            }

            .icon {
              svg {
                color: var(--light-text);
              }

              .lnir,
              .lnil {
                color: var(--light-text);
              }
            }

            .meta {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }
    }

    .dropdown-menu {
      .dropdown-content {
        background: var(--dark-sidebar);
        border-color: var(--dark-sidebar-light-8) !important;

        .dropdown-item {
          color: var(--light-text);

          &.is-active {
            background: var(--dark-sidebar-light-2) !important;

            // color: var(--white) !important;
          }
        }

        .dropdown-divider {
          background: var(--dark-sidebar-light-5);
        }

        a:hover {
          background: var(--dark-sidebar-light-5) !important;
        }
      }
    }
  }

  .child-dropdown {
    .inner {
      background: var(--dark-sidebar) !important;
      border-color: var(--dark-sidebar-light-4) !important;

      &:hover,
      &:focus {
        background: var(--dark-sidebar) !important;
        border-color: var(--dark-sidebar-light-4) !important;
      }

      ul {
        li {
          .text {
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
</style>
