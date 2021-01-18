<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'

useTitle('Auth Login 1 - Vuero')
</script>

<template>
  <AuthLayout>
    <div class="modern-login">
      <div class="underlay h-hidden-mobile"></div>

      <div class="columns is-gapless is-vcentered">
        <div class="column is-relative is-8 h-hidden-mobile">
          <div class="hero is-fullheight is-image">
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <img
                      class="hero-image"
                      src="/@images/illustrations/login/station.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4 is-relative">
          <RouterLink :to="{ name: 'index' }" class="top-logo">
            <img
              class="light-image"
              src="/@images/logos/logo/logo.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@images/logos/logo/logo-light.svg"
              alt=""
            />
          </RouterLink>
          <label class="dark-mode ml-auto">
            <input
              type="checkbox"
              :checked="!isDark"
              @change="
                (event) => {
                  isDark = !event.target.checked
                }
              "
            />
            <span></span>
          </label>
          <div class="is-form">
            <div class="hero-body">
              <div class="form-text">
                <h2>Sign In</h2>
                <p>Welcome back to your account.</p>
              </div>
              <div class="form-text is-hidden">
                <h2>Recover Account</h2>
                <p>Reset your account password.</p>
              </div>
              <form
                id="login-form"
                class="login-wrapper"
                action="activity-main.html"
              >
                <div class="control has-validation">
                  <input type="text" class="input" placeholder="" />
                  <small class="error-text">This is a required field</small>
                  <div class="auth-label">Email Address</div>
                  <div class="auth-icon">
                    <i class="lnil lnil-envelope"></i>
                  </div>
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
                <div class="control has-validation">
                  <input type="password" class="input" />
                  <div class="auth-label">Password</div>
                  <div class="auth-icon">
                    <i class="lnil lnil-lock-alt"></i>
                  </div>
                </div>

                <div class="control is-flex">
                  <label class="remember-toggle">
                    <input type="checkbox" />
                    <span class="toggler">
                      <span class="active">
                        <i class="iconify" data-icon="feather:check"></i>
                      </span>
                      <span class="inactive">
                        <i class="iconify" data-icon="feather:circle"></i>
                      </span>
                    </span>
                  </label>
                  <div class="remember-me">Remember Me</div>
                  <a id="forgot-link">Forgot Password?</a>
                </div>
                <div class="button-wrap has-help">
                  <button
                    id="login-submit"
                    type="button"
                    class="button h-button is-big is-rounded is-primary is-bold is-raised"
                  >
                    Login Now
                  </button>
                  <span
                    >Or
                    <RouterLink :to="{ name: 'auth-signup-1' }"
                      >Create</RouterLink
                    >
                    an account.</span
                  >
                </div>
              </form>

              <form id="recover-form" class="login-wrapper is-hidden">
                <p class="recover-text">
                  Enter your email and click on the confirm button to reset your
                  password. We'll send you an email detailing the steps to
                  complete the procedure.
                </p>
                <div class="control has-validation">
                  <input type="text" class="input" />
                  <small class="error-text">This is a required field</small>
                  <div class="auth-label">Email Address</div>
                  <div class="auth-icon">
                    <i class="lnil lnil-envelope"></i>
                  </div>
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
                <div class="button-wrap">
                  <button
                    id="cancel-recover"
                    type="button"
                    class="button h-button is-white is-big is-rounded is-lower"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="button h-button is-solid is-big is-rounded is-lower is-raised is-colored"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
