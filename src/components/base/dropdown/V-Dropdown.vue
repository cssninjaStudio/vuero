<script setup lang="ts">
import { defineProps } from 'vue'
import useDropdown from '/@src/composable/useDropdown'

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  up: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  dots: {
    type: Boolean,
    default: false,
  },
  modern: {
    type: Boolean,
    default: false,
  },
  spaced: {
    type: Boolean,
    default: false,
  },
})

const { dropdownElement, open, close, toggle, isOpen } = useDropdown()
</script>

<template inherit-attrs="false">
  <div
    ref="dropdownElement"
    :class="[
      isOpen && 'is-active',
      right && 'is-right',
      up && 'is-up',
      dots && 'is-dots',
      modern && 'is-modern',
      spaced && 'is-spaced',
    ]"
    class="dropdown dropdown-trigger"
  >
    <slot
      name="button"
      :open="open"
      :close="close"
      :toggle="toggle"
      :is-open="isOpen"
    >
      <button v-bind="$attrs" class="is-trigger button" @click="toggle">
        <span v-if="title">{{ title }}</span>
        <span :class="[!modern && 'base-caret', modern && 'base-caret']">
          <V-Icon v-if="!isOpen" icon="fa:angle-down" />
          <V-Icon v-else icon="fa:angle-up" />
        </span>
      </button>
    </slot>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="content">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

.dropdown {
  &.is-dots {
    &:hover,
    &.is-active {
      .is-trigger {
        background: lighten($fade-grey, 2%);

        svg {
          color: darken($light-text, 4%);
        }
      }
    }

    .is-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      border-radius: $radius-rounded;
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s;

      svg {
        height: 20px;
        width: 20px;
        color: $light-text;
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
        transition: all 0.3s;
        margin-left: 6px;

        > span span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 16px;
          width: 16px;
        }

        svg {
          height: 16px;
          width: 16px;
          color: $light-text;
        }
      }
    }

    .dropdown-menu {
      margin-top: 6px;
    }
  }

  &.is-spaced {
    .dropdown-menu {
      box-shadow: 0 5px 16px rgba(0, 0, 0, 0.05);
      border-color: $fade-grey;
      padding-top: 0;
      min-width: 260px;

      &.has-margin {
        margin-top: 10px;
      }

      .dropdown-content {
        border: 1px solid $fade-grey;
        box-shadow: none;
      }
    }

    //Item
    .dropdown-item {
      padding: 0.5rem 1rem;
      font-size: 0.95rem;
      color: $light-text;
      transition: all 0.3s;

      &:not(.is-button):hover,
      &:not(.is-button).is-active {
        background: lighten($fade-grey, 3%);
        color: $dark-text;
      }

      &.no-hover {
        &:hover {
          background: $white;
        }
      }

      &.is-media {
        display: flex;
        align-items: center;

        &:hover,
        &.is-active {
          .icon {
            svg {
              color: $primary;
            }

            .lnir,
            .lnil {
              color: $primary;
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
          border-radius: $radius-large;

          &.is-rounded {
            border-radius: $radius-rounded;
          }
        }

        .meta {
          margin-left: 10px;

          span {
            display: block;
            line-height: 1.3;

            &:first-child {
              font-family: $font-alt;
              font-size: 0.9rem;
              font-weight: 600;
              color: $dark-text;
            }

            &:nth-child(2) {
              font-family: $font;
              color: $light-text;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }

  .is-trigger {
    &.button {
      font-family: $font;

      &:focus {
        outline: none;
        border-color: darken($fade-grey, 4%);
        box-shadow: $light-box-shadow;
      }

      &:focus:not(:active) {
        box-shadow: none !important;
      }
    }
  }

  .base-caret {
    position: relative;
    top: -3px;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16px;
      width: 16px;
    }
  }

  //Dropdown menu
  .dropdown-menu {
    .dropdown-item {
      color: $light-text;

      &:hover {
        color: $dark-text;
      }

      //Child dropdown parent
      &.has-child {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;

        svg {
          height: 16px;
          width: 16px;
          color: $muted-grey;
        }

        //Child hover dropdown
        .child-dropdown {
          position: absolute;
          right: -282px;
          top: 0;
          width: 280px;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;

          //Inner
          .inner {
            position: relative;
            height: 100%;
            width: 100%;
            background: $white;
            border: 1px solid $accent-grey;
            border-radius: $radius-large;
            padding: 8px 0;

            //Kanban columns settings
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
                    color: $dark-text;
                    font-weight: 500;
                  }

                  &:nth-child(2) {
                    color: $muted-grey;
                  }
                }
              }
            }
          }
        }

        //Hover state
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

.is-dark {
  .toolbar-link {
    &:hover {
      background: lighten($dark-sidebar, 2%) !important;
    }

    svg {
      color: $dark-dark-text;
    }
  }

  .dropdown {
    &.is-spaced,
    &.is-dots {
      &:hover,
      &.is-active {
        .is-trigger {
          background: lighten($dark-sidebar, 2%) !important;

          svg {
            color: $dark-dark-text;
          }
        }
      }

      .dropdown-menu {
        .dropdown-content {
          background: $dark-sidebar !important;
          border-color: lighten($dark-sidebar, 8%) !important;

          .heading {
            border-color: lighten($dark-sidebar, 8%) !important;

            &:hover,
            *:hover {
              background: $dark-sidebar !important;
            }

            .heading-right {
              .notification-link {
                color: $accent !important;
              }
            }
          }

          .notification-list {
            li {
              .notification-item {
                &:hover,
                *:hover {
                  background: $dark-sidebar !important;
                }

                .user-content {
                  .user-info {
                    color: $dark-dark-text !important;
                  }
                }
              }
            }
          }

          .is-media {
            &:hover {
              .icon {
                svg {
                  color: $accent !important;
                }

                .lnir,
                .lnil {
                  color: $accent;
                }
              }
            }

            .icon {
              svg {
                color: $light-text;
              }

              .lnir,
              .lnil {
                color: $light-text;
              }
            }

            .meta {
              span {
                &:first-child {
                  color: $dark-dark-text;
                }
              }
            }
          }
        }
      }
    }

    .dropdown-menu {
      .dropdown-content {
        background: $dark-sidebar;
        border-color: lighten($dark-sidebar, 8%) !important;

        .dropdown-item {
          font-family: $font;
          color: $light-text;

          &.is-active {
            background: lighten($dark-sidebar, 2%) !important;
            //color: $white !important;
          }
        }

        .dropdown-divider {
          background: lighten($dark-sidebar, 5%);
        }

        a:hover {
          background: lighten($dark-sidebar, 5%) !important;
        }
      }
    }
  }

  .child-dropdown {
    .inner {
      background: $dark-sidebar !important;
      border-color: lighten($dark-sidebar, 4%) !important;

      &:hover {
        background: $dark-sidebar !important;
        border-color: lighten($dark-sidebar, 4%) !important;
      }

      ul {
        li {
          .text {
            span {
              &:first-child {
                color: $dark-dark-text !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
