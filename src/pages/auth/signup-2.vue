<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const darkmode = useDarkmode()
const router = useRouter()
const notyf = useNotyf()

const isLoading = ref(false)
const { t } = useI18n()

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    name: z
      .string({
        required_error: t('auth.errors.name.required'),
      })
      .min(1, t('auth.errors.name.required')),
    email: z
      .string({
        required_error: t('auth.errors.email.required'),
      })
      .email(t('auth.errors.email.format')),
    password: z
      .string({
        required_error: t('auth.errors.password.required'),
      })
      .min(8, t('auth.errors.password.length')),
    passwordCheck: z.string({
      required_error: t('auth.errors.passwordCheck.required'),
    }),
    promotional: z.boolean(),
  })
  // Refine is used to add custom validation rules to the schema
  .refine((data) => data.password === data.passwordCheck, {
    message: t('auth.errors.passwordCheck.match'),
    path: ['passwordCheck'],
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

// Define a validation schema
const validationSchema = toTypedSchema(zodSchema)

// Set initial values for the form
const initialValues = computed<FormInput>(() => ({
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
  promotional: false,
}))

// here we create a vee-validate form context that
// will be used in all vuero form components
const { handleSubmit } = useForm({
  validationSchema,
  initialValues,
})

const onSignup = handleSubmit(async (values) => {
  console.log('handleSignup values')
  console.table(values)

  if (!isLoading.value) {
    isLoading.value = true

    await sleep(800)

    notyf.dismissAll()
    notyf.success('Welcome, Erik Kovalsky')

    router.push('/sidebar/dashboards')
    isLoading.value = false
  }
})

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
          <div class="auth-logo">
            <LanguageDropdown />
            <RouterLink to="/">
              <AnimatedLogo
                class="top-logo"
                width="36px"
                height="36px"
              />
            </RouterLink>
            <label
              class="dark-mode"
              tabindex="0"
              role="button"
              @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
            >
              <input
                data-cy="dark-mode-toggle"
                type="checkbox"
                :checked="!darkmode.isDark"
                @change="darkmode.onChange"
              >
              <span />
            </label>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>{{ t('auth.title') }}</h2>
                  <p>{{ t('auth.subtitle') }}</p>
                  <RouterLink to="/auth/login-2">
                    {{ t('auth.action.login') }}
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form
                    method="post"
                    novalidate
                    @submit="onSignup"
                  >
                    <div
                      id="signin-form"
                      class="login-form"
                    >
                      <!-- Input -->
                      <VField
                        id="name"
                        v-slot="{ field }"
                      >
                        <VControl icon="feather:user">
                          <VInput
                            type="text"
                            :placeholder="t('auth.placeholder.name')"
                            autocomplete="name"
                          />
                          <p
                            v-if="field?.errorMessage"
                            class="help is-danger"
                          >
                            {{ field.errorMessage }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField
                        id="email"
                        v-slot="{ field }"
                      >
                        <VControl icon="feather:mail">
                          <VInput
                            type="text"
                            :placeholder="t('auth.placeholder.email')"
                            autocomplete="email"
                          />
                          <p
                            v-if="field?.errorMessage"
                            class="help is-danger"
                          >
                            {{ field.errorMessage }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField
                        id="password"
                        v-slot="{ field }"
                      >
                        <VControl icon="feather:lock">
                          <VInput
                            type="password"
                            :placeholder="t('auth.placeholder.password')"
                            autocomplete="new-password"
                          />
                          <p
                            v-if="field?.errorMessage"
                            class="help is-danger"
                          >
                            {{ field.errorMessage }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField
                        id="passwordCheck"
                        v-slot="{ field }"
                      >
                        <VControl icon="feather:lock">
                          <VInput
                            type="password"
                            :placeholder="t('auth.placeholder.passwordCheck')"
                          />
                          <p
                            v-if="field?.errorMessage"
                            class="help is-danger"
                          >
                            {{ field.errorMessage }}
                          </p>
                        </VControl>
                      </VField>

                      <VField id="promitional">
                        <VControl class="setting-item">
                          <VCheckbox
                            color="primary"
                            :label="t('auth.label.promotional')"
                            paddingless
                          />
                        </VControl>
                      </VField>

                      <!-- Submit -->

                      <div class="login">
                        <VButton
                          type="submit"
                          color="primary"
                          bold
                          fullwidth
                          raised
                        >
                          {{ t('auth.action.signup') }}
                        </VButton>
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

    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-7 is-hidden-mobile hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body is-justify-content-center is-fullwidth">
          <div class="is-flex is-justify-content-center is-fullwidth">
            <img
              class="light-image has-light-shadow has-light-border"
              src="/@src/assets/illustrations/apps/vuero-banking-light.webp"
              alt=""
            >
            <img
              class="dark-image has-light-shadow"
              src="/@src/assets/illustrations/apps/vuero-banking-dark.webp"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
