<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

import { isDark, toggleDarkModeHandler } from '/@src/state/darkModeState'
import { useUserSession } from '/@src/stores/userSession'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const notif = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    userSession.setToken('logged-in')

    notif.dismissAll()
    notif.success('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    } else {
      router.push({
        name: 'app',
      })
    }

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
            @change="toggleDarkModeHandler"
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
          <RouterLink :to="{ name: 'auth-signup-3' }">
            I do not have an account yet
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleLogin">
            <div class="login-form">
              <VField>
                <VControl icon="feather:user">
                  <input
                    class="input"
                    type="text"
                    placeholder="Username"
                    autocomplete="username"
                  />
                </VControl>
              </VField>
              <VField>
                <VControl icon="feather:lock">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                  />
                </VControl>
              </VField>

              <!-- Switch -->
              <VControl class="setting-item">
                <label for="remember-me" class="form-switch is-primary">
                  <input id="remember-me" type="checkbox" class="is-switch" />
                  <i aria-hidden="true"></i>
                </label>
                <div class="setting-meta">
                  <label for="remember-me">
                    <span>Remember Me</span>
                  </label>
                </div>
              </VControl>

              <!-- Submit -->
              <VControl class="login">
                <VButton
                  :loading="isLoading"
                  type="submit"
                  color="primary"
                  bold
                  fullwidth
                  raised
                >
                  Sign In
                </VButton>
              </VControl>
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
