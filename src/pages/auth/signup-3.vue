<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'

useHead({
  title: 'Auth Signup 3 - Vuero',
})
</script>

<template>
  <AuthLayout>
    <div class="auth-wrapper-inner is-single">
      <!--Fake navigation-->
      <div class="auth-nav">
        <div class="left"></div>
        <div class="center">
          <RouterLink :to="{ name: 'index' }" class="header-item">
            <img
              class="light-image"
              src="/images/logos/logo/logo.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/images/logos/logo/logo-light.svg"
              alt=""
            />
          </RouterLink>
        </div>
        <div class="right">
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
        </div>
      </div>

      <!--Single Centered Form-->
      <div class="single-form-wrap">
        <div class="inner-wrap">
          <!--Form Title-->
          <div class="auth-head">
            <h2>Join Us Now.</h2>
            <p>Start by creating your account</p>
            <RouterLink :to="{ name: 'auth-login-3' }"
              >I already have an account
            </RouterLink>
          </div>

          <!--Form-->
          <div class="form-card">
            <form>
              <div id="signin-form" class="login-form">
                <!-- Input -->
                <div class="field">
                  <div class="control has-icon">
                    <input class="input" type="text" placeholder="Username" />
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
                      type="text"
                      placeholder="Email Address"
                    />
                    <span class="form-icon">
                      <i class="iconify" data-icon="feather:mail"></i>
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
                <!-- Input -->
                <div class="field">
                  <div class="control has-icon">
                    <input
                      class="input"
                      type="password"
                      placeholder="Repeat Password"
                    />
                    <span class="form-icon">
                      <i class="iconify" data-icon="feather:lock"></i>
                    </span>
                  </div>
                </div>

                <div class="setting-item">
                  <label class="form-switch is-primary">
                    <input
                      id="busy-mode-toggle"
                      type="checkbox"
                      class="is-switch"
                    />
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
  </AuthLayout>
</template>
