<script setup lang="ts">
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const token = useUserToken()

const handleLogin = async () => {
  token.value = 'logged-in'

  if (route?.query?.redirect) {
    router.push(route.query.redirect as string)
  }
  else {
    router.push('/app')
  }
}

useHead({
  title: 'Login',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <LandingGrids class="is-contrasted" />
    <div class="auth-nav">
      <div class="left" />
      <div class="center">
        <NuxtLink
          to="/"
          class="header-item"
        >
          <!-- Your logo -->
        </NuxtLink>
      </div>
      <div class="right">
        <VDarkmodeToggle />
      </div>
    </div>

    <div class="single-form-wrap is-relative">
      <div class="inner-wrap">
        <div class="auth-head">
          <h2>Welcome Back.</h2>
          <p>Please sign in to your account</p>
          <NuxtLink to="/auth/signup">
            I do not have an account yet
          </NuxtLink>
        </div>

        <div class="form-card">
          <form
            method="post"
            novalidate
            @submit.prevent="handleLogin"
          >
            <div class="login-form">
              <VField>
                <VControl icon="lucide:user">
                  <VInput
                    type="text"
                    placeholder="Username"
                    autocomplete="username"
                  />
                </VControl>
              </VField>
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
                    color="primary"
                    paddingless
                  />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
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
              </div>
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
