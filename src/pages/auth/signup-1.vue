<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Auth Signup 1 - Vuero')
</script>

<template>
  <AuthLayout>
    <div class="signup-nav">
      <div class="signup-nav-inner">
        <RouterLink :to="{ name: 'index' }" class="logo">
          <img src="/@images/logos/logo/logo.svg" alt="" />
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

      <img class="card-bg" src="/@images/bg/signup/huro-signup.png" alt="" />

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
                      <img src="/@images/avatars/svg/huro-1.svg" alt="" />
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
                        src="/@images/avatars/svg/huro-1.svg"
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
                        src="/@images/avatars/svg/huro-2.svg"
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
                        src="/@images/avatars/svg/huro-3.svg"
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
                        src="/@images/avatars/svg/huro-4.svg"
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
                        src="/@images/avatars/svg/huro-5.svg"
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
                        src="/@images/avatars/svg/huro-6.svg"
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
                        src="/@images/avatars/svg/huro-7.svg"
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
                        src="/@images/avatars/svg/huro-8.svg"
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
                        src="/@images/avatars/svg/huro-9.svg"
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
                        src="/@images/avatars/svg/huro-10.svg"
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
                        src="/@images/avatars/svg/huro-11.svg"
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
                        src="/@images/avatars/svg/huro-12.svg"
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
            <img src="/@images/logos/logo/logo-light.svg" alt="" />
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
</style>
