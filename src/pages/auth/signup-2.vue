<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import useNotyf from '/@src/composable/useNotyf'

import { isDark } from '/@src/state/darkModeState'
import sleep from '/@src/utils/sleep'

const router = useRouter()
const notif = useNotyf()
const isLoading = ref(false)

const handleSignup = async () => {
  if (!isLoading.value) {
    isLoading.value = true
    sleep(2000)
    notif.success('Welcome, Erik Kovalsky')
    router.push({ name: 'sidebar-dashboards' })
    isLoading.value = false
  }
}

useHead({
  title: 'Auth Signup 2 - Vuero',
})
</script>

<template>
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
              <AnimatedLogo class="top-logo" width="36px" height="36px" />
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
                  <RouterLink :to="{ name: 'auth-login-2' }">
                    I already have an account
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form @submit.prevent="handleSignup">
                    <div id="signin-form" class="login-form">
                      <!-- Input -->
                      <V-Field>
                        <V-Control icon="feather:user">
                          <input
                            class="input"
                            type="text"
                            placeholder="Name"
                            autocomplete="name"
                          />
                        </V-Control>
                      </V-Field>
                      <!-- Input -->
                      <V-Field>
                        <V-Control icon="feather:mail">
                          <input
                            class="input"
                            type="text"
                            placeholder="Email Address"
                            autocomplete="email"
                          />
                        </V-Control>
                      </V-Field>
                      <!-- Input -->
                      <V-Field>
                        <V-Control icon="feather:lock">
                          <input
                            class="input"
                            type="password"
                            placeholder="Password"
                            autocomplete="new-password"
                          />
                        </V-Control>
                      </V-Field>
                      <!-- Input -->
                      <V-Field>
                        <V-Control icon="feather:lock">
                          <input
                            class="input"
                            type="password"
                            placeholder="Repeat Password"
                          />
                        </V-Control>
                      </V-Field>

                      <V-Field>
                        <V-Control class="setting-item">
                          <label
                            for="send-promotional"
                            class="form-switch is-primary"
                          >
                            <input
                              id="send-promotional"
                              type="checkbox"
                              class="is-switch"
                            />
                            <i aria-hidden="true"></i>
                          </label>
                          <div class="setting-meta">
                            <label for="send-promotional">
                              <span>Receive promotional offers</span>
                            </label>
                          </div>
                        </V-Control>
                      </V-Field>

                      <!-- Submit -->

                      <V-Field>
                        <V-Control class="login">
                          <V-Button color="primary" bold fullwidth raised>
                            Sign Up
                          </V-Button>
                        </V-Control>
                      </V-Field>
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
  </div>
</template>
