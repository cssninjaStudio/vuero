<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/composition/state/darkModeState.ts'

useHead({
  title: 'Auth Login 2 - Vuero',
})
</script>

<template>
  <AuthLayout>
    <!-- Wrapper -->
    <div class="auth-wrapper-inner columns is-gapless">
      <!-- Image section (hidden on mobile) -->
      <div class="column login-column is-8 h-hidden-mobile hero-banner">
        <div class="hero login-hero is-fullheight is-app-grey">
          <div class="hero-body">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <img
                  class="light-image has-light-shadow has-light-border"
                  src="/images/illustrations/apps/huro-banking-light.png"
                  alt=""
                />
                <img
                  class="dark-image has-light-shadow"
                  src="/images/illustrations/apps/huro-banking-dark.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="hero-footer">
            <p class="has-text-centered"></p>
          </div>
        </div>
      </div>

      <!-- Form section -->
      <div class="column is-4">
        <div class="hero is-fullheight is-white">
          <div class="hero-heading">
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
            <div class="auth-logo">
              <RouterLink :to="{ name: 'index' }">
                <AnimatedLogo width="36px" height="36px" />
              </RouterLink>
            </div>
          </div>
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-12">
                  <div class="auth-content">
                    <h2>Welcome Back.</h2>
                    <p>Please sign in to your account</p>
                    <RouterLink :to="{ name: 'auth-signup-2' }"
                      >I do not have an account yet
                    </RouterLink>
                  </div>
                  <div class="auth-form-wrapper">
                    <!-- Login Form -->
                    <form>
                      <div id="signin-form" class="login-form">
                        <!-- Input -->
                        <div class="field">
                          <div class="control has-icon">
                            <input
                              class="input"
                              type="text"
                              placeholder="Username"
                            />
                            <span class="form-icon">
                              <i class="iconify" data-icon="feather:user"></i>
                            </span>
                          </div>
                        </div>
                        <!-- Input -->
                        <div class="field">
                          <div class="control has-icon">
                            <input
                              class="input"
                              type="password"
                              placeholder="Password"
                            />
                            <span class="form-icon">
                              <i class="iconify" data-icon="feather:lock"></i>
                            </span>
                          </div>
                        </div>

                        <div class="setting-item">
                          <label class="form-switch is-primary">
                            <input type="checkbox" class="is-switch" />
                            <i></i>
                          </label>
                          <div class="setting-meta">
                            <span>Remember Me</span>
                          </div>
                        </div>

                        <!-- Submit -->
                        <div class="control login">
                          <button
                            class="button v-button is-primary is-bold is-fullwidth is-raised"
                          >
                            Sign In
                          </button>
                        </div>

                        <div class="forgot-link has-text-centered">
                          <a>Forgot Password?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
