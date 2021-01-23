<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Auth Signup 1 - Vuero',
})
</script>

<template>
  <AuthLayout>
    <div class="signup-nav">
      <div class="signup-nav-inner">
        <RouterLink :to="{ name: 'index' }" class="logo">
          <img src="/images/logos/logo/logo.svg" alt="" />
        </RouterLink>
      </div>
    </div>

    <div id="huro-signup" class="signup-wrapper">
      <div class="signup-steps is-hidden">
        <div class="steps-container">
          <!--div class="step-icon is-active" data-progress="10" data-step="signup-step-1">
                <div class="inner">
                    <i class="iconify" data-icon="feather:home"></i>
                </div>
                <span class="step-label">Sign up</span>
            </div-->
          <div
            class="step-icon is-active"
            data-progress="23"
            data-step="signup-step-2"
          >
            <div class="inner">
              <i class="iconify" data-icon="feather:user"></i>
            </div>
            <span class="step-label">Profile Pic</span>
          </div>
          <div
            class="step-icon is-inactive"
            data-progress="75"
            data-step="signup-step-3"
          >
            <div class="inner">
              <i class="iconify" data-icon="feather:shield"></i>
            </div>
            <span class="step-label">Account</span>
          </div>
          <div class="step-icon is-inactive" data-progress="98">
            <div class="inner">
              <i class="iconify" data-icon="feather:check"></i>
            </div>
            <span class="step-label">Done</span>
          </div>
          <progress
            id="signup-steps-progress"
            class="progress"
            value="25"
            max="100"
          >
            25%
          </progress>
        </div>
      </div>

      <img class="card-bg" src="/images/bg/signup/huro-signup.png" alt="" />

      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <!-- Step 1 -->
            <div id="signup-step-1" class="columns signup-columns">
              <div class="column is-4 is-offset-1">
                <h1 id="main-signup-title" class="title is-3 signup-title">
                  Become a Vuero
                </h1>
                <h2 id="main-signup-subtitle" class="subtitle signup-subtitle">
                  And simply join an unmatched design experience.
                </h2>
                <div class="signup-card">
                  <form id="signup-form" class="signup-form is-mobile-spaced">
                    <div class="columns is-multiline">
                      <div class="column is-6">
                        <div class="control has-validation">
                          <input type="text" class="input" />
                          <small class="error-text"
                            >This is a required field</small
                          >
                          <div class="auth-label">First Name</div>
                          <div class="validation-icon is-success">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:check"></i>
                            </div>
                          </div>
                          <div class="validation-icon is-error">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:x"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-6">
                        <div class="control has-validation">
                          <input type="text" class="input" />
                          <small class="error-text"
                            >This is a required field</small
                          >
                          <div class="auth-label">Last Name</div>
                          <div class="validation-icon is-success">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:check"></i>
                            </div>
                          </div>
                          <div class="validation-icon is-error">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:x"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-12">
                        <div class="control has-validation">
                          <input type="text" class="input" />
                          <small class="error-text"
                            >This is a required field</small
                          >
                          <div class="auth-label">Email Address</div>
                          <div class="validation-icon is-success">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:check"></i>
                            </div>
                          </div>
                          <div class="validation-icon is-error">
                            <div class="icon-wrapper">
                              <i class="iconify" data-icon="feather:x"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-12">
                        <div class="signup-type">
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" checked />
                            <div class="signup-box">
                              <i class="lnil lnil-coffee-cup"></i>
                              <div class="meta">
                                <span>Free</span>
                                <span>Nice to get started</span>
                              </div>
                            </div>
                          </div>
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" />
                            <div class="signup-box">
                              <i class="lnil lnil-crown-alt-1"></i>
                              <div class="meta">
                                <span>Paid</span>
                                <span>Get a lot more features</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="control is-agree">
                      <span
                        >By continuing you agree to our
                        <a href="#">Terms</a> and <a href="#">Privacy</a></span
                      >
                    </div>

                    <div class="button-wrap has-help">
                      <button
                        id="confirm-step-1"
                        type="button"
                        class="button h-button is-big is-rounded is-primary is-bold is-fullwidth"
                      >
                        Continue
                      </button>
                      <span
                        >Or
                        <RouterLink :to="{ name: 'auth-login-1' }"
                          >Sign In</RouterLink
                        >
                        to your account.</span
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div id="signup-step-2" class="columns signup-columns is-hidden">
              <div class="column is-8 is-offset-2">
                <div class="signup-profile-wrapper">
                  <h1 class="title is-5 signup-title has-text-centered">
                    Add a profile picture
                  </h1>
                  <h2 class="subtitle signup-subtitle has-text-centered">
                    This is your visual identity.
                  </h2>
                  <div class="picture-selector">
                    <div class="image-container">
                      <img src="/images/avatars/svg/huro-1.svg" alt="" />
                      <div
                        class="upload-button modal-trigger"
                        role="button"
                        data-modal="upload-modal"
                      >
                        <i class="iconify" data-icon="feather:plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="divider-container">
                  <div class="divider">
                    <span>Or select an avatar</span>
                  </div>
                </div>

                <div class="avatar-carousel resized-mobile">
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-1.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-3.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-4.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-5.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-6.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-7.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-8.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-9.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-10.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-11.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="image-wrapper">
                      <img
                        src="/images/avatars/svg/huro-12.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
                <div class="button-wrap is-centered has-text-centered">
                  <button
                    id="confirm-step-2"
                    type="button"
                    class="button h-button is-primary is-big is-rounded is-lower"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div id="signup-step-3" class="columns signup-columns is-hidden">
              <div class="column is-4 is-offset-4 username-form">
                <h1 class="title is-5 signup-title has-text-centered">
                  Pick a username
                </h1>
                <h2 class="subtitle signup-subtitle has-text-centered">
                  Your username is how others will find you on Vuero so pick a
                  good one. You can change it later.
                </h2>
                <form class="signup-form">
                  <div class="columns is-multiline">
                    <div class="column is-12">
                      <div class="control has-validation">
                        <input type="text" class="input" />
                        <small class="error-text"
                          >This is a required field</small
                        >
                        <div class="auth-label">Username</div>
                        <div class="validation-icon is-success">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:check"></i>
                          </div>
                        </div>
                        <div class="validation-icon is-error">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-12">
                      <div class="control has-validation">
                        <input type="text" class="input" />
                        <small class="error-text"
                          >This is a required field</small
                        >
                        <div class="auth-label">Password</div>
                        <div class="validation-icon is-success">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:check"></i>
                          </div>
                        </div>
                        <div class="validation-icon is-error">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-12">
                      <div class="control has-validation">
                        <input type="text" class="input" />
                        <small class="error-text"
                          >This is a required field</small
                        >
                        <div class="auth-label">Confirm Password</div>
                        <div class="validation-icon is-success">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:check"></i>
                          </div>
                        </div>
                        <div class="validation-icon is-error">
                          <div class="icon-wrapper">
                            <i class="iconify" data-icon="feather:x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-12">
                      <div class="control has-switch">
                        <span>Send me marketing and transaction emails</span>
                        <label class="form-switch ml-auto">
                          <input
                            id="signup-toggle"
                            type="checkbox"
                            class="is-switch"
                          />
                          <i></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="button-wrap is-centered has-text-centered">
                    <button
                      id="finish-signup"
                      type="button"
                      class="button h-button is-big is-rounded is-primary is-lower"
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- upload modal -->
    <div id="upload-modal" class="modal modal-sm">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="h-modal">
          <div class="modal-heading">
            <img src="/images/logos/logo/logo-light.svg" alt="" />
            <h2 class="subtitle is-6 is-light has-text-centered">
              Upload and crop your picture
            </h2>
          </div>
          <div class="h-modal-card">
            <div class="upload-demo-wrap">
              <div id="upload-demo"></div>
            </div>

            <small class="help-text">Use the slider to resize the image</small>

            <div class="actions">
              <div class="button h-button is-big is-outlined upload-button">
                <span>Upload</span>
                <input id="upload" type="file" accept="image/*" />
              </div>
              <button
                class="button h-button is-big is-outlined upload-result is-disabled"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large is-hidden"
        aria-label="close"
      ></button>
    </div>
    <!-- upload modal -->
  </AuthLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/profile/_user-profile.scss';

/* ==========================================================================
4. Sign up
========================================================================== */

.signup-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  z-index: 99;

  .signup-nav-inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      img {
        display: block;
        min-width: 48px;
        max-width: 48px;
      }
    }
  }
}

.signup-steps {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 380px;

  .steps-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .progress {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      width: calc(100% - 80px);
      margin: 0 auto;
      height: 0.35rem !important;
      background-color: $white;
      z-index: 0;

      &::-webkit-progress-value {
        background-color: $primary;
        transition: width 0.5s ease;
      }

      &::-moz-progress-bar {
        background-color: $primary;
        transition: width 0.5s ease;
      }

      &::-ms-fill {
        background-color: $primary;
        transition: width 0.5s ease;
      }
    }

    .step-icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      width: 46px;
      border-radius: 50%;
      background: $fade-grey;
      cursor: pointer;
      z-index: 1;

      &.is-active {
        .inner {
          background: $white;
          border-color: $primary;

          svg {
            color: $primary;
          }
        }
      }

      &.is-done {
        .inner {
          background: $primary;
          border-color: $primary;

          svg {
            color: $smoke-white;
          }
        }
      }

      &.is-inactive {
        pointer-events: none;
      }

      .inner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 2px solid $accent-grey;
        background: $accent-grey;
      }

      .step-label {
        position: absolute;
        top: 45px;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        min-width: 100px;
        transform: translateX(-25%);
        font-size: 0.8rem;
        font-weight: 500;
        color: $dark-text;
      }

      svg {
        height: 16px;
        width: 16px;
        color: $muted-grey;
      }
    }
  }
}

.signup-columns {
  animation: fadeInLeft 0.5s;
}

.signup-wrapper {
  position: relative;
  min-height: 100vh;
  background: $fade-grey;

  .card-bg {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 90%;
    transition: all 0.3s;

    &.faded {
      opacity: 0;
    }
  }

  .signup-title {
    font-family: $font-alt;
    color: $dark-text;
  }

  .signup-subtitle {
    font-family: $font;
    color: $muted-grey;
    font-size: 1rem;
  }

  .hero {
    .signup-form {
      .control {
        position: relative;
        width: 100%;

        &.has-switch {
          display: flex;
          align-items: center;

          span {
            display: block;
            color: $muted-grey;
          }
        }

        &.is-agree {
          span {
            color: darken($placeholder, 8%);

            a {
              color: $muted-grey;
              font-weight: 500;
              transition: color 0.3s;

              &:hover {
                color: $primary;
              }
            }
          }
        }

        .input {
          padding-top: 10px;
          height: 60px;
          padding-left: 10px;
          border-radius: 8px;
          transition: all 0.3s;

          &:focus {
            background: lighten($fade-grey, 6%);
            border-color: $placeholder;

            ~ .auth-label,
            ~ .auth-icon i {
              color: $muted-grey;
            }
          }
        }

        .error-text {
          color: $danger;
          font-size: 0.8rem;
          display: none;
          padding: 2px 6px;
        }

        .auth-label {
          position: absolute;
          top: 6px;
          left: 10px;
          font-size: 0.8rem;
          color: $dark-text;
          font-weight: 500;
          z-index: 2;
          transition: all 0.3s;
        }

        .auth-icon {
          position: absolute;
          top: 0;
          left: 0;
          height: 60px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 24px;
            color: $placeholder;
            transition: all 0.3s;
          }
        }

        &.has-validation {
          .validation-icon {
            position: absolute;
            top: 0;
            right: 0;
            height: 60px;
            width: 60px;
            display: none;
            justify-content: center;
            align-items: center;

            .icon-wrapper {
              height: 20px;
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;

              svg {
                height: 10px;
                width: 10px;
                stroke-width: 3px;
                color: $white !important;
              }
            }

            &.is-success {
              .icon-wrapper {
                background: $success;
              }
            }

            &.is-error {
              .icon-wrapper {
                background: $danger;
              }
            }
          }

          &.has-success {
            .validation-icon {
              &.is-success {
                display: flex;
              }

              &.is-error {
                display: none;
              }
            }
          }

          &.has-error {
            .input {
              border-color: $danger;
            }

            .error-text {
              display: block;
            }

            .validation-icon {
              &.is-error {
                display: flex;
              }

              &.is-success {
                display: none;
              }
            }
          }
        }

        &.is-flex {
          display: flex;
          align-items: center;

          a {
            display: block;
            margin-left: auto;
            color: $muted-grey;
            font-weight: 500;
            font-size: 0.9rem;
            transition: color 0.3s;

            &:hover {
              color: $primary;
            }
          }

          .remember-me {
            font-size: 0.9rem;
            color: $muted-grey;
            font-weight: 500;
          }
        }
      }
    }

    .button-wrap {
      margin: 20px 0 0 0;

      &.has-help {
        display: flex;
        align-items: center;

        > span {
          margin-left: 12px;
          font-family: $font;

          a {
            color: $primary;
            font-weight: 500;
            padding: 0 3px;
          }
        }
      }

      &.is-centered {
        margin-top: 40px;
        text-align: center;

        .button {
          min-width: 180px;
          margin-left: 0 !important;
        }
      }

      .button {
        height: 46px;
        width: 190px;
        margin-left: 6px;

        &:first-child {
          &:hover {
            opacity: 0.95;
            box-shadow: $primary-box-shadow;
          }
        }

        &:nth-child(2) {
          color: $dark-text;
          border-color: $placeholder;
        }
      }
    }

    .signup-type {
      display: flex;
      align-items: center;

      //margin-top: 16px;

      .box-wrap {
        width: 100%;
        position: relative;

        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;

          &:checked + .signup-box {
            border-color: $primary;

            i {
              color: $primary;
            }

            .meta {
              span:first-child {
                color: $primary;
              }
            }
          }
        }

        .signup-box {
          display: flex;
          align-items: center;
          padding: 12px;
          background: $white;
          border: 1px solid darken($fade-grey, 3%);
          border-radius: 6px;
          transition: all 0.3s;

          i {
            font-size: 2rem;
            color: $muted-grey;
          }

          .meta {
            margin-left: 10px;

            span {
              display: block;

              &:first-child {
                font-size: 0.85rem;
                font-weight: 500;
                color: $dark-text;
              }

              &:nth-child(2) {
                font-size: 0.8rem;
                color: $muted-grey;
              }
            }
          }
        }

        &:first-child {
          margin-right: 6px;
        }

        &:nth-child(2) {
          margin-left: 6px;
        }
      }
    }
  }
}

.signup-profile-wrapper {
  padding: 80px 60px 10px 60px;

  .title,
  .subtitle {
    text-align: center;
  }

  .title {
    font-family: $font-alt;
    font-size: 1.4rem;
  }

  .subtitle {
    font-family: $font;
    font-size: 1rem;
  }

  .picture-selector,
  .skill-picture-selector {
    width: 100%;
    text-align: center;

    .image-container {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 10px auto;
      border-radius: 50%;

      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        display: block;
        border: 4px solid #e8e8e8;
        margin-left: -1px;
      }

      .upload-button {
        position: absolute;
        bottom: 18px;
        right: 0;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $white;
        border-radius: 50%;
        border: 1px solid darken($fade-grey, 4%);
        z-index: 5;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          box-shadow: $light-box-shadow;
        }

        svg {
          height: 16px;
          width: 16px;
          color: $dark-text;
        }
      }
    }
  }
}

.avatar-carousel {
  text-align: center;
  max-width: 550px;
  margin: 0 auto 20px auto;

  &:hover .slick-custom {
    opacity: 1;
  }

  .carousel-item {
    margin: 0 10px;
  }

  .image-wrapper {
    position: relative;

    &.is-smaller img {
      height: 70px;
      width: 70px;
    }

    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin: 0 auto;
      transition: all 0.3s;
    }
  }

  .slick-slide {
    max-width: 120px;
    text-align: center;
    cursor: pointer;

    &:focus {
      outline: none !important;
    }

    img {
      opacity: 0.6;
      border: 4px solid transparent;
      transform: scale(0.75);
    }

    &.slick-current {
      img {
        opacity: 1;
        transform: scale(1);
        border: 2px solid $primary;
      }
    }
  }

  .slick-custom {
    opacity: 0;

    &.is-prev {
      left: -45px;
    }

    &.is-next {
      right: -45px;
    }
  }

  .slick-dots {
    bottom: -60px !important;
  }

  .slick-prev::before,
  .slick-next::before {
    color: $muted-grey;
  }

  .slick-custom {
    position: absolute;
    top: calc(50% - 15px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $fade-grey;
    width: 30px;
    height: 30px;
    background: $white;
    border-radius: 100px;
    cursor: pointer;
    color: $dark-text;
    transition: all 0.3s;
    z-index: 25;

    svg {
      height: 16px;
      width: 16px;
      color: $primary;
      transition: all 0.3s;
    }

    &:hover {
      border-color: darken($fade-grey, 4%);
      color: $white;
      box-shadow: $light-box-shadow;
    }

    &.is-prev {
      left: -6px;
    }

    &.is-next {
      right: -6px;
    }
  }
}

.username-form {
  padding-top: 80px;
}
</style>
