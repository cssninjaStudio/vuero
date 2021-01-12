<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'

useTitle('Auth Signup 2 - Vuero')
</script>

<template>
  <AuthLayout>
    <!-- Wrapper -->
    <div class="auth-wrapper-inner columns is-gapless">
      <!-- Form section -->
      <div class="column is-5">
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
                <img
                  class="top-logo light-image"
                  src="/@images/logos/logo/logo.svg"
                  alt=""
                />
                <img
                  class="top-logo dark-image"
                  src="/@images/logos/logo/logo-light.svg"
                  alt=""
                />
              </RouterLink>
            </div>
          </div>
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-12">
                  <div class="auth-content">
                    <h2>Join Us Now.</h2>
                    <p>Start by creating your account</p>
                    <RouterLink :to="{ name: 'auth-login-2' }"
                      >I already have an account
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
                              <Icon icon="feather:user" />
                            </span>
                          </div>
                        </div>
                        <!-- Input -->
                        <div class="field">
                          <div class="control has-icon">
                            <input
                              class="input"
                              type="text"
                              placeholder="Email Address"
                            />
                            <span class="form-icon">
                              <Icon icon="feather:mail" />
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
                              <Icon icon="feather:lock" />
                            </span>
                          </div>
                        </div>
                        <!-- Input -->
                        <div class="field">
                          <div class="control has-icon">
                            <input
                              class="input"
                              type="password"
                              placeholder="Repeat Password"
                            />
                            <span class="form-icon">
                              <Icon icon="feather:lock" />
                            </span>
                          </div>
                        </div>

                        <div class="setting-item">
                          <label class="form-switch is-primary">
                            <input type="checkbox" class="is-switch" />
                            <i></i>
                          </label>
                          <div class="setting-meta">
                            <span>Receive promotional offers</span>
                          </div>
                        </div>

                        <!-- Submit -->
                        <div class="control login">
                          <button
                            class="button h-button is-primary is-bold is-fullwidth is-raised"
                          >
                            Sign Up
                          </button>
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

      <!-- Image section (hidden on mobile) -->
      <div class="column login-column is-7 is-hidden-mobile hero-banner">
        <div class="hero login-hero is-fullheight is-app-grey">
          <div class="hero-body">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <img
                  class="light-image has-light-shadow has-light-border"
                  src="/@images/illustrations/apps/huro-banking-light.png"
                  alt=""
                />
                <img
                  class="dark-image has-light-shadow"
                  src="/@images/illustrations/apps/huro-banking-dark.png"
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
    </div>
  </AuthLayout>
</template>
