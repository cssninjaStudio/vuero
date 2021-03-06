<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/state/mobileSidebarState'
import { activePanel } from '/@src/state/activePanelState'
</script>

<template>
  <div
    :class="[isMobileSidebarOpen && 'is-active']"
    class="mobile-main-sidebar"
  >
    <div class="inner">
      <ul class="icon-side-menu">
        <li>
          <RouterLink
            id="home-sidebar-menu-mobile"
            :to="{ name: 'sidebar-dashboards' }"
          >
            <i class="iconify" data-icon="feather:activity"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink id="layouts-sidebar-menu-mobile" :to="{ name: 'navbar' }">
            <i class="iconify" data-icon="feather:grid"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="elements-sidebar-menu-mobile"
            :to="{ name: 'elements' }"
          >
            <i class="iconify" data-icon="feather:box"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="components-sidebar-menu-mobile"
            :to="{ name: 'components' }"
          >
            <i class="iconify" data-icon="feather:cpu"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink id="open-messages-mobile" :to="{ name: 'messaging-v2' }">
            <i class="iconify" data-icon="feather:message-circle"></i>
          </RouterLink>
        </li>
      </ul>

      <ul class="bottom-icon-side-menu">
        <li>
          <a @click="activePanel = 'search'">
            <i class="iconify" data-icon="feather:search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/layout/_sidebar.scss';
@import '../../../../assets/scss/layout/_sidebar-mobile.scss';

/* ==========================================================================
1. Mobile Sidebar
========================================================================== */

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
