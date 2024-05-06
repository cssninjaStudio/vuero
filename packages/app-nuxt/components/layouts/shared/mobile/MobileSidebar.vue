<script setup lang="ts">
</script>

<template>
  <div class="mobile-main-sidebar">
    <div class="inner">
      <ul class="icon-side-menu">
        <slot name="links" />
      </ul>

      <ul class="bottom-icon-side-menu">
        <slot name="links-bottom" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.mobile-main-sidebar {
  position: fixed;
  top: 60px;
  inset-inline-start: 0;
  height: calc(100% - 60px);
  width: 60px;
  background: var(--white);
  border-top: 1px solid var(--fade-grey);
  border-inline-end: 1px solid var(--fade-grey);
  z-index: 100;
  transform: translateX(calc(var(--transform-direction) * -100%));
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(calc(var(--transform-direction) * 0));
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
          transform: rotate(calc(var(--transform-direction) * 0));
          opacity: 1;
          transition: all 0.3s; // transition-all test

          &:hover,
          &.is-active {
            > .iconify {
              color: var(--primary);
            }
          }

          > .iconify {
            color: var(--title-grey);
            font-size: 18px;
          }

          .sidebar-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            transition: all 0.3s; // transition-all test
          }

          &:hover .iconify,
          &.is-active .iconify {
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

          &.is-selected,
          &.router-link-exact-active {
            .iconify {
              color: var(--primary);
            }
          }
        }

        #open-filters {
          .iconify {
            transform: rotate(calc(var(--transform-direction) * 0));
            transition: all 0.3s; // transition-all test
          }

          &:hover {
            .iconify {
              transform: rotate(calc(var(--transform-direction) * 145deg));
            }
          }
        }

        &.is-active {
          a .iconify {
            color: var(--primary);
          }
        }
      }
    }

    .bottom-icon-side-menu {
      position: absolute;
      bottom: 0;
      inset-inline-start: 0;
    }
  }
}

.is-dark {
  .mobile-main-sidebar {
    background: color-mix(in oklab, var(--dark-sidebar), black 6%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 1%) !important;

    .inner {
      .icon-side-menu {
        li {
          a {
            &.is-active {
              .iconify {
                color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}
</style>
