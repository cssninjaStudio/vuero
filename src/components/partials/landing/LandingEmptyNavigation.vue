<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import VueScrollTo from 'vue-scrollto'

import { isLargeScreen } from '/@src/utils/responsive'
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()
const isMobileNavOpen = ref(false)
const scrollTo = VueScrollTo.scrollTo

const { y } = useWindowScroll()

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
  <nav
    class="navbar is-fixed-top is-transparent"
    :class="[!isScrolling && 'is-docked', isMobileNavOpen && 'is-solid']"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a href="/" class="navbar-item" @click.prevent="scrollTo('#app', 800)">
        <div class="brand-icon">
          <AnimatedLogo width="34px" height="34px" />
        </div>
      </a>

      <a
        role="button"
        :class="[isMobileNavOpen && 'is-active']"
        class="navbar-burger burger"
        aria-label="menu"
        tabindex="0"
        aria-expanded="false"
        @keydown.space.prevent="isMobileNavOpen = !isMobileNavOpen"
        @click="isMobileNavOpen = !isMobileNavOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="[isMobileNavOpen && 'is-active']">
      <div class="navbar-start">
        <div class="navbar-item">
          <RouterLink
            :to="{
              name: 'index',
            }"
            class="nav-link"
            @click.passive="
              () => {
                scrollTo('#features', 800, { offset: -50 })
                isMobileNavOpen = false
              }
            "
          >
            Awesome Features
          </RouterLink>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item is-theme-toggle">
          <label class="theme-toggle">
            <input
              id="navbar-night-toggle--daynight"
              v-model="darkmode.isDark"
              type="checkbox"
            />
            <span class="toggler">
              <span class="dark">
                <i aria-hidden="true" class="iconify" data-icon="feather:moon"></i>
              </span>
              <span class="light">
                <i aria-hidden="true" class="iconify" data-icon="feather:sun"></i>
              </span>
            </span>
          </label>
        </div>
        <div class="navbar-item">
          <RouterLink :to="{ name: 'auth-login' }" class="nav-link"> Login </RouterLink>
        </div>
        <div class="navbar-item">
          <VButton :to="{ name: 'auth-signup' }" color="primary" rounded raised>
            <strong>Sign up</strong>
          </VButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.landing-page-wrapper {
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
              border-color: var(--fade-grey-dark-3);
            }
          }

          .navbar-menu {
            .navbar-item {
              &.is-theme-toggle {
                opacity: 0;
                pointer-events: none;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
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
        img {
          position: relative;
          display: block;
          width: 100%;
          max-width: 34px;
          max-height: 34px;
          margin-left: 10px;
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

          img {
            position: relative;
            top: -2px;
            margin-left: 0;
          }
        }
      }

      .navbar-burger {
        span {
          height: 2px;
        }
      }

      .navbar-menu {
        .navbar-item {
          &.is-theme-toggle {
            opacity: 1;
            pointer-events: all;
          }

          .nav-link {
            position: relative;
            font-family: var(--font-alt);
            font-size: 0.9rem;
            color: var(--light-text);
            text-transform: capitalize;

            &::before {
              content: '';
              position: absolute;
              top: -4px;
              left: 2px;
              width: 50%;
              transform-origin: right center;
              height: 3px;
              border-radius: 50px;
              background: var(--primary);
              transform: scale(0, 1);
              transition: -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
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

          .theme-toggle {
            width: 54px;
            display: block;
            position: relative;
            cursor: pointer;
            font-size: 22px;
            user-select: none;
            transform: scale(0.9);

            &:focus-within {
              border-radius: 50px;
              outline-offset: var(--accessibility-focus-outline-offset);
              outline-width: var(--accessibility-focus-outline-width);
              outline-style: var(--accessibility-focus-outline-style);
              outline-color: var(--accessibility-focus-outline-color);
            }

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;

              &:checked ~ .toggler {
                border-color: var(--primary);

                .dark,
                .light {
                  transform: translateX(100%) rotate(360deg);
                }

                .dark {
                  opacity: 1 !important;
                }

                .light {
                  opacity: 0 !important;
                }
              }
            }

            .toggler {
              position: relative;
              display: block;
              height: 31px;
              width: 53px;
              border: 2px solid var(--primary);
              border-radius: 100px;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              .dark,
              .light {
                position: absolute;
                top: 2px;
                left: 2px;
                height: 22px;
                width: 22px;
                border-radius: var(--radius-rounded);
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
                transform: translateX(0) rotate(0);
                transition: all 0.3s ease;

                svg {
                  color: var(--white) !important;
                  height: 14px !important;
                  width: 14px !important;
                  opacity: 1 !important;
                }
              }

              .light {
                background: var(--primary);
                border-color: var(--primary);
                opacity: 1;
                z-index: 1;
              }

              .dark {
                background: var(--primary);
                border-color: var(--primary);
                opacity: 0;
                z-index: 0;

                svg {
                  color: var(--white) !important;
                }
              }
            }
          }

          .button {
            height: 44px;
            min-width: 110px;
          }
        }
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .navbar {
      &:not(.is-docked) {
        background: var(--landing-xxx-light-8);
        border-color: var(--landing-xxx-light-14);
      }

      &.is-docked {
        .navbar-brand {
          .brand-icon {
            background: var(--landing-yyy-light-8) !important;
            border-color: var(--landing-yyy-light-18) !important;
          }
        }
      }

      &.is-solid {
        background: var(--landing-xxx-light-8) !important;
        border-color: var(--landing-xxx-light-14) !important;

        .navbar-brand {
          .brand-icon {
            border-color: transparent;
            background-color: transparent;
          }
        }

        .navbar-menu {
          &.is-active {
            background: var(--landing-xxx-light-12);
            border-color: var(--landing-xxx-light-14);
          }
        }
      }

      .navbar-burger {
        span {
          background: var(--smoke-white);
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
}

@media (max-width: 767px) {
  .landing-page-wrapper {
    .navbar {
      display: flex;
      align-items: center;
      width: calc(100% - 32px);
      margin: 0 16px;

      &.is-docked {
        height: 80px;

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: none !important;
            }
          }
        }
      }

      &.is-solid {
        .navbar-menu {
          top: 73px !important;
        }

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: block;
            }
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

        .navbar-burger {
          border-radius: var(--radius-rounded);
          margin-right: 12px;
        }
      }

      .navbar-menu {
        width: calc(100% - 32px);
        position: fixed;
        top: 78px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 0 0 10px 10px;
        padding: 30px;
        text-align: center;
        border: 1px solid var(--fade-grey);
        box-shadow: none;

        .navbar-item {
          &.is-theme-toggle {
            .theme-toggle {
              margin: 0 auto;
            }
          }

          .button {
            width: 100%;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .landing-page-wrapper {
    .navbar {
      display: flex;
      align-items: center;
      width: calc(100% - 32px);
      margin: 0 16px;

      &.is-docked {
        height: 80px;

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: none !important;
            }
          }
        }
      }

      &:not(.is-docked) {
        &.is-solid {
          .navbar-menu {
            top: 73px !important;
          }
        }

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: block;
            }
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

        .navbar-burger {
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
          margin-right: 12px;
        }
      }

      .navbar-menu {
        width: calc(100% - 32px);
        position: fixed;
        top: 78px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 0 0 10px 10px;
        padding: 30px;
        text-align: center;
        border: 1px solid var(--fade-grey);
        box-shadow: none;

        .navbar-item {
          &.is-theme-toggle {
            .theme-toggle {
              margin: 0 auto;
            }
          }

          .button {
            width: 100%;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .landing-page-wrapper {
    .navbar {
      width: calc(100% - 40px);
      margin: 0 20px;
    }
  }
}
</style>
