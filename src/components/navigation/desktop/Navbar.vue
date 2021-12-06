<script setup lang="ts">
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export type NavbarTheme = 'default' | 'colored' | 'fade'

const props = withDefaults(
  defineProps<{
    theme?: NavbarTheme
  }>(),
  {
    theme: 'default',
  }
)

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
      props.theme === 'fade' && 'is-transparent',
      props.theme === 'colored' && 'is-colored',
    ]"
  >
    <div class="navbar-navbar-inner">
      <div class="left">
        <!-- Title slot -->
        <slot name="title">
          <h1 class="title is-5">Page Title</h1>
        </slot>
      </div>
      <div class="center">
        <!-- Links slot -->
        <slot name="links">
          <div class="centered-links">
            <a href="/" class="centered-link centered-link-toggle">
              <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
              <span>Homepage</span>
            </a>
          </div>

          <!-- 
          Dropdown default links
          <div class="centered-drops">
            <div class="centered-drop">
              <div
                class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"
              >
                <div class="is-trigger">
                  <a
                    href="/"
                    class="button v-button is-rounded"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>Homepage</span>
                    <span class="caret">
                      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-down"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> 
          -->
        </slot>
      </div>
      <div class="right">
        <!-- Toolbar slot -->
        <slot name="toolbar"></slot>
      </div>
    </div>
  </div>

  <!-- Subnav slot -->
  <slot name="subnav"></slot>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';
@import '../../../scss/layout/navbar';
@import '../../../scss/layout/responsive';

.navbar-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
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
          border-color: var(--landing-yyy-light-18);
        }

        .title {
          color: var(--smoke-white);
        }
      }

      .center {
        .centered-links {
          .centered-link {
            &:hover {
              background: var(--landing-yyy-dark-6);

              svg {
                color: var(--smoke-white);
              }

              span {
                color: var(--smoke-white);
              }
            }

            &.is-active {
              background: var(--landing-yyy-dark-12);
              border-color: var(--landing-yyy-light-6);

              &:hover,
              &:focus {
                background: var(--landing-yyy-dark-12);
              }

              svg {
                color: var(--smoke-white);
              }

              span {
                color: var(--smoke-white);
              }
            }

            svg {
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
                    background: var(--landing-yyy-dark-6);
                    color: var(--smoke-white);
                  }
                }
              }

              &.is-active {
                .is-trigger {
                  .button {
                    background: var(--landing-yyy-dark-12);
                    border-color: var(--landing-yyy-light-6);
                  }
                }
              }

              .is-trigger {
                .button {
                  background: var(--landing-yyy);
                  color: var(--light-text);

                  .caret {
                    margin-left: 0;
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
                background: var(--landing-yyy-dark-6);
                color: var(--smoke-white);
              }
            }
          }
        }

        .centered-search {
          .field {
            .control {
              .input {
                background: var(--primary-dark-10);
                border-color: var(--primary-dark-6);
                color: var(--smoke-white);

                &::placeholder {
                  color: var(--primary-light-2);
                }

                &:focus ~ .form-icon svg {
                  color: var(--smoke-white);
                }
              }

              .form-icon svg {
                color: var(--primary-light-6);
              }
            }
          }
        }
      }

      .right {
        .toolbar {
          .toolbar-link {
            &:hover {
              background: var(--landing-yyy-dark-12);
              border-color: var(--landing-yyy-dark-12);
            }

            > svg {
              color: var(--smoke-white);
            }
          }

          .dropdown {
            &:hover {
              .is-trigger {
                background: var(--landing-yyy-dark-12);
                border-color: var(--landing-yyy-dark-12);
              }
            }

            &.is-dots {
              &.is-active {
                .is-trigger {
                  background: var(--landing-yyy-dark-12);
                  border-color: var(--landing-yyy-dark-12);
                }
              }
            }

            .is-trigger svg {
              color: var(--smoke-white);
            }
          }
        }

        .icon-link {
          background: var(--landing-yyy);

          &:hover,
          &:focus {
            background: var(--landing-yyy-dark-12);
          }

          > svg {
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
          margin-left: 8px;
        }
      }

      .separator {
        height: 38px;
        width: 2px;
        border-right: 1px solid var(--fade-grey-dark-4);
        margin: 0 20px 0 16px;
      }

      .project-dropdown {
        margin-right: 12px;
        cursor: pointer !important;

        > img {
          height: 32px;
          width: 32px;
          border-radius: var(--radius-rounded);
        }

        .dropdown-menu {
          margin-top: 28px;

          .dropdown-content {
            padding-top: 0;
            padding-bottom: 0;
            overflow: hidden;

            .dropdown-block {
              display: flex;
              align-items: center;
              padding: 16px;

              &:hover,
              &:focus {
                background: var(--fade-grey-light-4);
              }

              .meta {
                margin-left: 12px;
                font-family: var(--font);

                span {
                  display: block;

                  &:first-child {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--dark-text);
                    line-height: 1.2;
                    max-width: 140px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }

                  &:nth-child(2) {
                    // text-transform: uppercase;
                    color: var(--light-text);
                    font-size: 0.85rem;
                  }
                }
              }
            }
          }
        }
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
        width: 100%;
        max-width: 580px;

        .centered-link {
          flex: 1 1 0;
          text-align: center;
          padding: 10px 0;
          border-radius: 8px;
          border: 1px solid transparent;
          margin: 0 4px;
          transition: all 0.3s; // transition-all test

          &:hover {
            background: var(--fade-grey-light-4);
          }

          &.is-active {
            background: var(--white);
            border-color: var(--fade-grey-dark-3);
            box-shadow: var(--light-box-shadow);

            &:hover,
            &:focus {
              background: var(--white);
            }

            svg {
              color: var(--primary);
            }

            span {
              color: var(--primary-dark-8);
            }
          }

          svg {
            height: 20px;
            width: 20px;
            color: var(--light-text-light-6);
            stroke-width: 1.6px;
            transition: stroke 0.3s;
          }

          span {
            display: block;
            font-family: var(--font);
            font-size: 0.65rem;
            color: var(--muted-grey);
            text-transform: uppercase;
            transition: all 0.3s; // transition-all test
            cursor: pointer;
          }
        }
      }

      .centered-drops {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 580px;

        .centered-drop,
        .centered-button {
          // flex: 1 1 0;
          text-align: center;
          padding: 10px 0;
          border-radius: 8px;
          border: 1px solid transparent;
          margin: 0 4px;
          transition: all 0.3s; // transition-all test

          > .button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            height: 40px;
            width: 40px;
            border: none;
            margin: 0 auto;
            box-shadow: none;
            border-radius: var(--radius-rounded);
            color: var(--light-text);
            transition: all 0.3s; // transition-all test

            &:hover {
              background: var(--fade-grey-light-3);
              color: var(--primary);
            }

            svg {
              height: 20px;
              width: 20px;
              stroke-width: 1.6px;
            }
          }

          .dropdown {
            &:hover {
              .is-trigger {
                .button {
                  background: var(--fade-grey-light-3);
                }
              }
            }

            &.is-active {
              .is-trigger {
                .button {
                  background: var(--white);
                  border-color: var(--fade-grey-dark-3);
                  box-shadow: var(--light-box-shadow) !important;
                }
              }
            }

            &.has-mega-dropdown {
              .dropdown-menu {
                width: 600px;

                .dropdown-content {
                  padding: 0;

                  .content-wrap {
                    position: relative;

                    .back-button {
                      position: absolute;
                      top: 10px;
                      right: 10px;
                      opacity: 1;
                    }

                    .mega-menus {
                      display: none;
                      animation: fadeInLeft 0.5s;

                      &.is-active {
                        display: flex;
                      }

                      a {
                        .meta {
                          > span {
                            display: inline-block;
                          }

                          .tag {
                            line-height: 1.8;
                            height: 1.8em;
                            font-size: 0.65rem;
                            margin-left: 0.2rem;
                          }
                        }
                      }
                    }
                  }

                  .category-selector {
                    padding: 20px 30px;
                    animation: fadeInLeft 0.5s;

                    .title-wrap {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: 12px;

                      h4 {
                        font-family: var(--font-alt);
                        font-weight: 600;
                        color: var(--dark-text);
                      }
                    }

                    .category-selector-inner {
                      display: flex;
                      flex-wrap: wrap;
                      margin-left: -8px;
                      margin-right: -8px;

                      .category-item {
                        width: calc(20% - 16px);
                        margin: 8px;
                        text-align: center;
                        padding: 16px 12px;
                        background: var(--white);
                        border: 1px solid var(--fade-grey-dark-3);
                        border-radius: 10px;
                        cursor: pointer;
                        transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                          height 0.3s, width 0.3s;

                        &:hover,
                        &:focus {
                          box-shadow: var(--light-box-shadow);

                          i {
                            color: var(--primary);
                          }

                          span {
                            color: var(--primary);
                          }
                        }

                        i {
                          color: var(--light-text);
                          font-size: 1.6rem;
                          margin-bottom: 10px;
                        }

                        span {
                          display: block;
                          text-transform: uppercase;
                          font-size: 0.75rem;
                          font-weight: 500;
                          color: var(--dark-text);
                        }
                      }

                      .placeholder-image {
                        margin-left: auto;
                        max-width: 140px;
                        max-height: 100px;
                      }
                    }
                  }

                  .columns {
                    height: 100%;
                  }

                  .column {
                    padding-top: 0;
                    padding-bottom: 0;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    height: 100%;
                  }

                  .dropdown-item-group {
                    &.has-margin-top {
                      margin-top: 20px;
                    }

                    .column-heading {
                      display: flex;
                      align-items: center;
                      font-family: var(--font);
                      font-size: 0.85rem;
                      font-weight: 600;
                      color: var(--dark-text);
                      text-transform: uppercase;
                      padding: 20px;
                      border-bottom: 1px solid var(--fade-grey-dark-3);

                      &.is-primary {
                        svg {
                          color: var(--primary);
                        }
                      }

                      &.is-secondary {
                        svg {
                          color: var(--secondary);
                        }
                      }

                      &.is-info {
                        svg {
                          color: var(--info);
                        }
                      }

                      &.is-success {
                        svg {
                          color: var(--success);
                        }
                      }

                      &.is-warning {
                        svg {
                          color: var(--warning);
                        }
                      }

                      &.is-danger {
                        svg {
                          color: var(--danger);
                        }
                      }

                      &.is-green {
                        svg {
                          color: var(--green);
                        }
                      }

                      &.is-yellow {
                        svg {
                          color: var(--yellow);
                        }
                      }

                      &.is-purple {
                        svg {
                          color: var(--purple);
                        }
                      }

                      &.is-orange {
                        svg {
                          color: var(--orange);
                        }
                      }

                      svg {
                        stroke-width: 3px;
                        height: 12px;
                        width: 12px;
                        margin-right: 6px;
                      }
                    }

                    .column-content {
                      padding: 10px 20px 20px;
                      max-height: 240px;
                    }
                  }

                  .dropdown-item {
                    border: 1px solid transparent;
                    border-radius: 10px;
                    font-family: var(--font-alt);
                    font-size: 0.9rem;

                    &.is-media {
                      &:hover,
                      &.router-link-exact-active,
                      &.is-active {
                        .meta {
                          span {
                            color: var(--dark-text);
                          }
                        }
                      }

                      &.router-link-exact-active,
                      &.is-active {
                        background: var(--white);
                        border: 1px solid var(--fade-grey-dark-3);
                        box-shadow: var(--light-box-shadow);
                      }

                      .meta {
                        margin-left: 6px;

                        span {
                          font-weight: 500;
                          font-size: 0.85rem;
                          color: var(--light-text);
                        }
                      }
                    }
                  }
                }
              }
            }

            .is-trigger {
              padding-right: 0 !important;

              .button {
                font-family: var(--font-alt);
                font-size: 0.9rem;
                color: var(--dark-text);
                min-height: 40px;
                padding-left: 0.75rem !important;
                padding-right: 0.75rem !important;
                border-color: transparent;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
            }

            .dropdown-menu {
              margin-top: 28px;
              text-align: left;
            }
          }
        }

        .centered-button {
          max-width: 50px;
        }
      }

      .centered-search {
        width: 100%;
        max-width: 580px;

        .field {
          margin-bottom: 0;

          .control {
            .form-icon {
              &.is-right {
                left: unset !important;
                right: 6px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 25%;

      .toolbar {
        .dropdown {
          .dropdown-menu {
            margin-top: 28px;
          }
        }
      }

      .icon-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        width: 34px;
        border-radius: var(--radius-rounded);
        margin: 0 4px;
        transition: all 0.3s; // transition-all test

        &:hover {
          background: var(--white);
          border-color: var(--fade-grey);
          box-shadow: var(--light-box-shadow);
        }

        svg {
          height: 18px;
          width: 18px;
          stroke-width: 1.6px;
          color: var(--light-text);
          transition: stroke 0.3s;
          vertical-align: 0;
          transform: none;
        }
      }

      .profile-dropdown {
        > img {
          height: 32px;
          width: 32px;
          border-radius: var(--radius-rounded);
          margin: 0 4px;
          cursor: pointer;
        }

        .dropdown-menu {
          margin-top: 28px;

          .dropdown-content {
            padding-top: 0;
            overflow: hidden;

            .dropdown-head {
              display: flex;
              align-items: center;
              padding: 20px 16px;
              margin-bottom: 12px;
              background: #fafafa;

              .meta {
                margin-left: 12px;
                font-family: var(--font);

                span {
                  display: block;

                  &:first-child {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: var(--dark-text);
                    line-height: 1.2;
                  }

                  &:nth-child(2) {
                    text-transform: uppercase;
                    color: var(--light-text);
                    font-size: 0.7rem;
                  }
                }
              }
            }

            .logout-button {
              svg {
                color: var(--smoke-white) !important;
              }
            }
          }
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
    background: var(--dark-sidebar-dark-2);
    border-color: var(--dark-sidebar-light-1);

    &.is-transparent {
      background: transparent;
      box-shadow: none;
      border-bottom-color: transparent;

      &.is-solid,
      &.is-scrolled {
        background: var(--dark-sidebar-dark-2);
        border-color: var(--dark-sidebar-light-1);
      }
    }

    .navbar-navbar-inner {
      .left {
        .separator {
          border-color: var(--dark-sidebar-light-12);
        }

        .project-dropdown {
          .dropdown-menu {
            .dropdown-content {
              .dropdown-block {
                background: var(--dark-sidebar-light-2) !important;

                &:hover,
                &:focus {
                  background: var(--dark-sidebar-light-5) !important;
                }

                .meta {
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

      .center {
        .centered-links {
          .centered-link {
            &:hover {
              background: var(--dark-sidebar-light-2);
            }

            &.is-active {
              background: var(--dark-sidebar-light-2);
              border-color: var(--dark-sidebar-light-12);

              &:hover,
              &:focus {
                background: var(--dark-sidebar-light-2);
              }

              span {
                color: var(--primary);
              }

              svg {
                color: var(--primary);
              }
            }
          }
        }

        .centered-drops {
          .centered-drop {
            > .dropdown {
              &:hover {
                .is-trigger {
                  background: transparent !important;

                  .button {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-2);
                  }
                }
              }

              &.is-active {
                .is-trigger {
                  .button {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12) !important;
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
                          background: var(--dark-sidebar-light-4);
                          border-color: var(--dark-sidebar-light-12);

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
                          border-color: var(--dark-sidebar-light-12);
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

              .is-trigger {
                .button {
                  background: transparent;
                  border: none;
                }
              }
            }
          }
        }

        .centered-button {
          > .button {
            background: transparent !important;
            border: none;

            &:hover,
            &:focus {
              background: var(--dark-sidebar-light-3) !important;
            }
          }
        }
      }

      .right {
        .profile-dropdown {
          .dropdown-menu {
            .dropdown-content {
              .dropdown-head {
                background: var(--dark-sidebar-light-2) !important;

                &:hover,
                &:focus {
                  background: var(--dark-sidebar-light-2) !important;
                }

                .meta {
                  &:hover {
                    background: var(--dark-sidebar-light-2) !important;
                  }

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

        .icon-link {
          background: var(--dark-sidebar-dark-2);

          &:hover,
          &:focus {
            background: var(--dark-sidebar-light-2);
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
                background: var(--primary-dark-5);

                svg {
                  color: var(--smoke-white);
                }

                span {
                  color: var(--smoke-white);
                }
              }

              &.is-active {
                svg {
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
                            background: var(--dark-sidebar-light-4);
                            border-color: var(--dark-sidebar-light-12);

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
                            border-color: var(--dark-sidebar-light-12);
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

                  &:focus ~ .form-icon svg {
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
                background: var(--landing-yyy-dark-12) !important;
                border-color: var(--landing-yyy-dark-12) !important;
              }

              > svg {
                color: var(--smoke-white);
              }
            }

            .dropdown {
              .is-trigger {
                &:hover {
                  background: var(--landing-yyy-dark-12) !important;
                  border-color: var(--landing-yyy-dark-12) !important;
                }

                svg {
                  color: var(--smoke-white);
                }
              }
            }
          }

          .profile-dropdown {
            .dropdown-menu {
              .dropdown-content {
                .dropdown-head {
                  &:hover {
                    background: var(--landing-yyy-dark-12);
                    border-color: var(--landing-yyy-dark-12);
                  }

                  .meta {
                    &:hover {
                      background: var(--dark-sidebar-light-2) !important;
                    }

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
      }
    }
  }

  .navbar-subnavbar {
    background: var(--dark-sidebar-light-2);
    border-color: var(--dark-sidebar-light-4);

    .navbar-subnavbar-inner {
      .tabs {
        li {
          &.is-active {
            a {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-dark-2);
              color: var(--primary);
              opacity: 1;
            }

            &:hover {
              a {
                background: var(--dark-sidebar-dark-2);
              }
            }
          }

          .router-link-exact-active {
            border-color: var(--dark-sidebar-light-12);
            background: var(--dark-sidebar-dark-2);
            color: var(--primary);
            opacity: 1;

            &:hover,
            &:focus {
              background: var(--dark-sidebar-dark-2);
            }
          }

          &:hover {
            a {
              background: var(--dark-sidebar-light-8);
            }
          }

          a {
            opacity: 0.6;
          }
        }
      }

      .tab-content {
        .tab-content-inner {
          .center {
            .column {
              border-color: var(--dark-sidebar-light-12);
            }

            .column-heading {
              color: var(--dark-dark-text);
            }

            .column-placeholder {
              &:hover {
                border-color: var(--primary);

                h3 {
                  color: var(--primary);
                }
              }

              h3 {
                color: var(--dark-dark-text);
              }
            }

            ul {
              li {
                &:hover {
                  a {
                    opacity: 1;
                    color: var(--primary);
                  }
                }

                &.is-active {
                  border-color: var(--primary);

                  a {
                    opacity: 1;
                    color: var(--primary);
                  }
                }

                a {
                  opacity: 0.6;
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
