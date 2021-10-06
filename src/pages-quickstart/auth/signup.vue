<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'

import { isDark, toggleDarkModeHandler } from '/@src/state/darkModeState'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const router = useRouter()
const notif = useNotyf()

const isLoading = ref(false)
const { t } = useI18n()

// Define a validation schema
const schema = yup.object({
  promotional: yup.mixed(),
  name: yup.string().required(t('auth.errors.name.required')),
  email: yup
    .string()
    .required(t('auth.errors.email.required'))
    .email(t('auth.errors.email.format')),
  password: yup
    .string()
    .required(t('auth.errors.password.required'))
    .min(8, t('auth.errors.password.length')),
  passwordCheck: yup
    .string()
    .required(t('auth.errors.passwordCheck.required'))
    .oneOf([yup.ref('password')], t('auth.errors.passwordCheck.match')),
})

const handleSignup = async (values: typeof schema) => {
  console.log('handleSignup values')
  console.table(values)

  if (!isLoading.value) {
    isLoading.value = true

    await sleep(800)

    notif.dismissAll()
    notif.success('Welcome, Erik Kovalsky')

    router.push({ name: 'app' })
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
              @change="toggleDarkModeHandler"
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
                  <h2>{{ t('auth.title') }}</h2>
                  <p>{{ t('auth.subtitle') }}</p>
                  <RouterLink :to="{ name: 'auth-login-2' }">
                    {{ t('auth.action.login') }}
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <Form :validation-schema="schema" @submit="handleSignup">
                    <div id="signin-form" class="login-form">
                      <!-- Input -->
                      <Field v-slot="{ field, errorMessage }" name="name">
                        <VField>
                          <VControl
                            icon="feather:user"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input"
                              type="text"
                              :placeholder="t('auth.placeholder.name')"
                              autocomplete="name"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Input -->
                      <Field v-slot="{ field, errorMessage }" name="email">
                        <VField>
                          <VControl
                            icon="feather:mail"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input"
                              type="text"
                              :placeholder="t('auth.placeholder.email')"
                              autocomplete="email"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Input -->
                      <Field v-slot="{ field, errorMessage }" name="password">
                        <VField>
                          <VControl
                            icon="feather:lock"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input"
                              type="password"
                              :placeholder="t('auth.placeholder.password')"
                              autocomplete="new-password"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Input -->
                      <Field
                        v-slot="{ field, errorMessage }"
                        name="passwordCheck"
                      >
                        <VField>
                          <VControl
                            icon="feather:lock"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input"
                              type="password"
                              :placeholder="t('auth.placeholder.passwordCheck')"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <VField>
                        <VControl class="setting-item">
                          <label
                            for="promotional"
                            class="form-switch is-primary"
                          >
                            <Field
                              id="promotional"
                              type="checkbox"
                              name="promotional"
                              value="yes"
                            />

                            <i aria-hidden="true"></i>
                          </label>
                          <div class="setting-meta">
                            <label for="promotional">
                              <span>{{ t('auth.label.promotional') }} </span>
                            </label>
                          </div>
                        </VControl>
                      </VField>

                      <!-- Submit -->

                      <VField>
                        <VControl class="login">
                          <VButton
                            type="submit"
                            color="primary"
                            bold
                            fullwidth
                            raised
                          >
                            {{ t('auth.action.signup') }}
                          </VButton>
                        </VControl>
                      </VField>
                    </div>
                  </Form>
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
