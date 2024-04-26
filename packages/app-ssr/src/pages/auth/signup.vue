<script setup lang="ts">
const router = useRouter()

const handleSignup = async () => {
  router.push('/auth')
}

useHead({
  title: 'Signup',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <LandingGrids class="is-contrasted" />
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left" />
      <div class="center">
        <RouterLink
          to="/"
          class="header-item"
        >
          My App
        </RouterLink>
      </div>
      <div class="right">
        <VDarkmodeToggle />
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap is-relative">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>Join Us Now.</h2>
          <p>Start by creating your account</p>
          <RouterLink to="/auth">
            I already have an account
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form
            method="post"
            novalidate
            @submit.prevent="handleSignup"
          >
            <div class="login-form">
              <!-- Input -->
              <VField>
                <VControl icon="lucide:user">
                  <VInput
                    type="text"
                    placeholder="Name"
                    autocomplete="name"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="lucide:mail">
                  <VInput
                    type="text"
                    placeholder="Email Address"
                    autocomplete="email"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="lucide:lock">
                  <VInput
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="lucide:lock">
                  <VInput
                    type="password"
                    placeholder="Repeat Password"
                  />
                </VControl>
              </VField>

              <VField>
                <VControl class="setting-item">
                  <VCheckbox
                    label="Receive promotional offers"
                    color="primary"
                    paddingless
                  />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
                <VButton
                  color="primary"
                  type="submit"
                  bold
                  fullwidth
                  raised
                >
                  Sign Up
                </VButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
