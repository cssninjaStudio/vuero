<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['toggle'])
</script>

<template>
  <div :class="[props.isOpen && 'is-active']" class="mobile-main-sidebar">
    <div class="inner">
      <ul class="icon-side-menu">
        <slot name="links">
          <li>
            <a href="/">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:activity"
              ></i>
            </a>
          </li>
        </slot>
      </ul>

      <ul class="bottom-icon-side-menu">
        <slot name="bottom-links"></slot>
      </ul>
    </div>
  </div>

  <div v-if="props.isOpen" class="mobile-overlay" @click="emit('toggle')"></div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/layout/_sidebar.scss';
@import '../../../scss/layout/_sidebar-mobile.scss';

/* ==========================================================================
1. Mobile Sidebar
========================================================================== */
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
  background: $white;
  border-top: 1px solid $fade-grey;
  border-right: 1px solid $fade-grey;
  z-index: 100;
  transform: translateX(-100%);
  transition: all 0.3s;

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
          transition: all 0.3s;

          &:hover,
          &.is-active {
            > svg {
              color: $primary;
            }
          }

          > svg {
            color: $title-grey;
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
            transition: all 0.3s;
          }

          &:hover svg,
          &.is-active svg {
            color: $primary;
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
              color: $primary;
            }
          }
        }

        #open-filters {
          svg {
            transform: rotate(0);
            transition: all 0.3s;
          }

          &:hover {
            svg {
              transform: rotate(145deg);
            }
          }
        }

        &.is-active {
          a svg {
            color: $primary;
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
    background: darken($dark-sidebar, 6%);
    border-color: lighten($dark-sidebar, 1%) !important;

    .inner {
      .icon-side-menu {
        li {
          a {
            &.is-active {
              svg {
                color: $accent;
              }
            }
          }
        }
      }
    }
  }
}
</style>
