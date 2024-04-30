<script setup lang="ts">
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const token = useUserToken()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    token.value = 'logged-in'

    notyf.dismissAll()
    notyf.primary('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    }
    else {
      router.push('/sidebar/dashboards')
    }

    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login 2 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body is-justify-content-center is-fullwidth">
          <div class="is-flex is-justify-content-center is-fullwidth">
            <img
              class="light-image has-light-shadow has-light-border"
              src="/images/illustrations/apps/vuero-banking-light.webp"
              alt=""
            >
            <img
              class="dark-image has-light-shadow"
              src="/images/illustrations/apps/vuero-banking-dark.webp"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="column is-4">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <div class="auth-logo">
            <RouterLink to="/">
              <AnimatedLogo
                width="36px"
                height="36px"
              />
            </RouterLink>
            <VDarkmodeToggle />
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>Welcome Back.</h2>
                  <p>Please sign in to your account</p>
                  <RouterLink to="/auth/signup-2">
                    I do not have an account yet
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form
                    method="post"
                    novalidate
                    @submit.prevent="handleLogin"
                  >
                    <div class="login-form">
                      <!-- Username -->
                      <VField>
                        <VControl icon="lucide:user">
                          <VInput
                            type="text"
                            placeholder="Username"
                            autocomplete="username"
                          />
                        </VControl>
                      </VField>

                      <!-- Password -->
                      <VField>
                        <VControl icon="lucide:lock">
                          <VInput
                            type="password"
                            placeholder="Password"
                            autocomplete="current-password"
                          />
                        </VControl>
                      </VField>

                      <!-- Switch -->
                      <VField>
                        <VControl class="setting-item">
                          <VCheckbox
                            label="Remember me"
                            paddingless
                          />
                        </VControl>
                      </VField>

                      <!-- Submit -->
                      <div class="login">
                        <VButton
                          :loading="isLoading"
                          color="primary"
                          type="submit"
                          bold
                          fullwidth
                          raised
                        >
                          Sign In
                        </VButton>
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
</template>
