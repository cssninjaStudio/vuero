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
  title: 'Auth Login 3 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink :to="{ name: 'index' }" class="header-item">
          <AnimatedLogo width="38px" height="38px" />
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
          <h2>Welcome Back.</h2>
          <p>Please sign in to your account</p>
          <RouterLink :to="{ name: 'auth-signup-3' }"
            >I do not have an account yet
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleLogin">
            <div class="login-form">
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
                  <input id="remember-me" type="checkbox" class="is-switch" />
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
            </div>
          </form>
        </div>

        <div class="forgot-link has-text-centered">
          <a>Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
