<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { isLargeScreen } from '/@src/state/responsiveState'
import VueScrollTo from 'vue-scrollto'

import { isDark } from '/@src/state/darkModeState'
import { useRouter } from 'vue-router'

const isMobileNavOpen = ref(false)
const router = useRouter()
const scrollTo = VueScrollTo.scrollTo

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

watchEffect(() => {
  if (isLargeScreen.value) {
    isMobileNavOpen.value = false
  }
})
</script>

<template>
  <nav
    class="navbar is-fixed-top is-transparent"
    :class="[!isScrolling && 'is-docked', isMobileNavOpen && 'is-solid']"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a href="/" class="navbar-item" @click.prevent="scrollTo('#app', 800)">
        <div class="brand-icon">
          <AnimatedLogo width="34px" height="34px" />
        </div>
      </a>

      <a
        role="button"
        :class="[isMobileNavOpen && 'is-active']"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isMobileNavOpen = !isMobileNavOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="[isMobileNavOpen && 'is-active']">
      <div class="navbar-start">
        <div class="navbar-item">
          <RouterLink
            :to="{
              name: 'index',
            }"
            class="nav-link"
            @click.passive="
              () => {
                scrollTo('#features', 800, { offset: -50 })
                isMobileNavOpen = false
              }
            "
          >
            Awesome Features
          </RouterLink>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item is-theme-toggle">
          <label class="theme-toggle">
            <input
              id="navbar-night-toggle--daynight"
              v-model="isDark"
              type="checkbox"
            />
            <span class="toggler">
              <span class="dark">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:moon"
                ></i>
              </span>
              <span class="light">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sun"
                ></i>
              </span>
            </span>
          </label>
        </div>
        <div class="navbar-item">
          <RouterLink :to="{ name: 'auth-login' }" class="nav-link">
            Login
          </RouterLink>
        </div>
        <div class="navbar-item">
          <V-Button
            :to="{ name: 'auth-signup' }"
            color="primary"
            rounded
            raised
          >
            <strong>Sign up</strong>
          </V-Button>
        </div>
      </div>
    </div>
  </nav>
</template>
