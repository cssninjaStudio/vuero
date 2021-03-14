<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/state/darkModeState'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const isLoading = ref(false)
const router = useRouter()
const notif = useNotyf()

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true
    await sleep(2000)
    notif.success('Welcome back, Erik Kovalsky')
    router.push({ name: 'sidebar-dashboards' })
    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login 2 - Vuero',
})
</script>

<template>
  <!-- Wrapper -->
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div
      class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"
    >
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <img
                class="light-image has-light-shadow has-light-border"
                src="/@src/assets/illustrations/apps/vuero-banking-light.png?format=webp"
                alt=""
              />
              <img
                class="dark-image has-light-shadow"
                src="/@src/assets/illustrations/apps/vuero-banking-dark.png?format=webp"
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
                  <form @submit.prevent="handleLogin">
                    <div class="login-form">
                      <!-- Username -->
                      <V-Field>
                        <V-Control icon="feather:user">
                          <input
                            class="input"
                            type="text"
                            placeholder="Username"
                            autocomplete="username"
                          />
                        </V-Control>
                      </V-Field>

                      <!-- Password -->
                      <V-Field>
                        <V-Control icon="feather:lock">
                          <input
                            class="input"
                            type="password"
                            placeholder="Password"
                            autocomplete="current-password"
                          />
                        </V-Control>
                      </V-Field>

                      <!-- Switch -->
                      <V-Control class="setting-item">
                        <label for="remember-me" class="form-switch is-primary">
                          <input
                            id="remember-me"
                            type="checkbox"
                            class="is-switch"
                          />
                          <i></i>
                        </label>
                        <div class="setting-meta">
                          <label for="remember-me">
                            <span>Remember Me</span>
                          </label>
                        </div>
                      </V-Control>

                      <!-- Submit -->
                      <V-Control class="login">
                        <V-Button
                          :loading="isLoading"
                          color="primary"
                          bold
                          fullwidth
                          raised
                        >
                          Sign In
                        </V-Button>
                      </V-Control>

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
</template>
