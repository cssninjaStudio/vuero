<script setup lang="ts">
const isMobileNavOpen = ref(false)

const { y } = useWindowScroll()
const { isLargeScreen } = useScreenSize()

const isScrolling = computed(() => {
  return y.value > 30
})

watchEffect(() => {
  if (isLargeScreen.value) {
    isMobileNavOpen.value = false
  }
})
</script>

<template>
  <div class="hero">
    <nav
      class="navbar is-fixed-top"
      :class="[!isScrolling && 'is-docked', isMobileNavOpen && 'is-solid']"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <slot name="logo" />

        <MobileBurger v-model="isMobileNavOpen" />
      </div>

      <div
        class="navbar-menu"
        :class="[isMobileNavOpen && 'is-active']"
      >
        <div class="navbar-start">
          <slot />
        </div>

        <div class="navbar-end">
          <slot name="end" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.hero {
  .navbar {
    top: 15px;
    height: 65px;
    max-width: 1140px;
    margin: 0 auto;
    background-color: var(--white);
    box-shadow: var(--light-box-shadow);
    border: 1px solid var(--fade-grey);
    border-radius: 500px;
    font-family: var(--font);
    z-index: 99;
    transition: all 0.3s; // transition-all test

    &.is-docked {
      &:not(.is-solid) {
        top: 0;
        border-color: transparent;
        height: 110px;
        box-shadow: none;
        background: transparent;

        .navbar-brand {
          .brand-icon {
            height: 64px;
            width: 64px;
            background: var(--white);
            border-color: color-mix(in oklab, var(--fade-grey), black 3%);
          }
        }
      }

      &.is-solid {
        height: 65px !important;
      }
    }

    &.is-solid {
      background: var(--white) !important;
      border-radius: 10px 10px 0 0;
    }

    .navbar-brand {
      img,
      .iconify {
        position: relative;
        display: block;
        width: 100%;
        max-width: 34px;
        max-height: 34px;
        margin-inline-start: 10px;
      }

      .brand-icon {
        height: 50px;
        width: 50px;
        border-radius: var(--radius-rounded);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        transition: all 0.3s; // transition-all test

        img,
        svg {
          position: relative;
          top: -2px;
          margin-inline-start: 0;
        }
      }
    }

    .navbar-menu {
      .navbar-item {
        .dark-mode {
          transform: scale(0.6);
        }

        .nav-link {
          position: relative;
          font-family: var(--font-alt);
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--light-text);
          text-transform: capitalize;

          &::before {
            content: '';
            position: absolute;
            top: -4px;
            inset-inline-start: 2px;
            width: 50%;
            transform-origin: right center;
            height: 3px;
            border-radius: 50px;
            background: var(--primary);
            transform: scale(0, 1);
            transition: -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transition:
              transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          // Hover state
          &:hover,
          &.is-active {
            color: var(--dark-text);

            &::before {
              transform-origin: left center;
              transform: scale(1, 1);
            }
          }

          &.active {
            &::before {
              background: var(--primary);
            }
          }
        }

        .button {
          font-weight: 400 !important;
          height: 44px;
          min-width: 110px;
        }
      }
    }
  }
}

.is-dark {
  .navbar {
    &:not(.is-docked) {
      background: color-mix(in oklab, var(--landing-xxx), white 8%);
      border-color: color-mix(in oklab, var(--landing-xxx), white 14%);
    }

    &.is-docked {
      .navbar-brand {
        .brand-icon {
          background: color-mix(in oklab, var(--landing-yyy), white 8%) !important;
          border-color: color-mix(in oklab, var(--landing-yyy), white 18%) !important;
        }
      }
    }

    &.is-solid {
      background: color-mix(in oklab, var(--landing-xxx), white 8%) !important;
      border-color: color-mix(in oklab, var(--landing-xxx), white 14%) !important;

      .navbar-brand {
        .brand-icon {
          border-color: transparent;
          background-color: transparent;
        }
      }

      .navbar-menu {
        &.is-active {
          background: color-mix(in oklab, var(--landing-xxx), white 12%);
          border-color: color-mix(in oklab, var(--landing-xxx), white 14%);
        }
      }
    }

    .navbar-item {
      .nav-link {
        &:hover,
        &.is-active {
          color: var(--white) !important;
        }

        &::before {
          background: var(--primary);
        }
      }

      .button {
        &.is-primary {
          background: var(--primary);
          border-color: var(--primary);

          &.is-raised:hover {
            box-shadow: var(--primary-box-shadow);
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .navbar {
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    margin: 0 16px;

    &.is-docked {
      height: 80px;
    }

    &.is-solid {
      top: 10px;
      box-shadow: var(--light-box-shadow) !important;

      .navbar-brand {
        .brand-icon {
          border-color: transparent;
        }
      }

      .navbar-menu {
        box-shadow: var(--light-box-shadow) !important;
        top: 73px !important;
      }
    }

    .navbar-brand {
      width: 100%;
    }

    .navbar-menu {
      width: calc(100% - 32px);
      position: fixed;
      top: 78px;
      inset-inline-start: 0;
      inset-inline-end: 0;
      margin: 0 auto;
      border-radius: 0 0 10px 10px;
      padding: 30px;
      text-align: center;
      border: 1px solid var(--fade-grey);
      box-shadow: none;

      .navbar-item {
        .button {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .navbar {
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    margin: 0 16px;

    &.is-docked {
      height: 80px;
    }

    &:not(.is-docked) {
      &.is-solid {
        .navbar-menu {
          top: 73px !important;
        }
      }
    }

    &.is-solid {
      top: 10px;
      box-shadow: var(--light-box-shadow) !important;

      .navbar-brand {
        .brand-icon {
          border-color: transparent;
        }
      }

      .navbar-menu {
        box-shadow: var(--light-box-shadow) !important;
      }
    }

    .navbar-brand {
      width: 100%;
    }

    .navbar-menu {
      width: calc(100% - 32px);
      position: fixed;
      top: 78px;
      inset-inline-start: 0;
      inset-inline-end: 0;
      margin: 0 auto;
      border-radius: 0 0 10px 10px;
      padding: 30px;
      text-align: center;
      border: 1px solid var(--fade-grey);
      box-shadow: none;

      .navbar-item {
        .button {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .navbar {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
}
</style>
