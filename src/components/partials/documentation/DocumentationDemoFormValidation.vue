<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z as zod } from 'zod'
import VueScrollTo from 'vue-scrollto'

import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { scrollTo } = VueScrollTo

// we need to declare the schema for the form
const validationSchema = toTypedSchema(
  zod
    .object({
      email: zod
        .string({
          required_error: 'Enter your email first',
        })
        .email('A valid email address should be provided'),
      password: zod
        .string({
          required_error: 'Enter your password to sign in',
        })
        .min(8, 'Your password should contains at least 8 characters'),
      passwordCheck: zod.string(),
      birthdate: zod
        .date({
          invalid_type_error: 'Please enter a valid date',
          required_error: 'Please enter a date',
        })
        .max(new Date(), 'You cannot be born in the future')
        .nullable(),
      agreeTerms: zod
        .boolean()
        .refine((value) => value, 'You must agree our terms of service'),
      interests: zod
        .string()
        .array()
        .min(2, 'You must select at least 2 terms of service')
        .max(3, 'You can select up to 3 terms of service'),
      emailOptin: zod.boolean(),
    })
    .refine((data) => data.password === data.passwordCheck, {
      message: 'The confirmation does not match the password',
      path: ['passwordCheck'],
    })
)

// here we create a vee-validate form context that
// swill be used in all vuero form components
const { handleSubmit, setFieldError, handleReset, values } = useForm({
  validationSchema,
  initialValues: {
    email: '',
    password: '',
    passwordCheck: '',
    birthdate: null,
    interests: [],
    agreeTerms: false,
    emailOptin: false,
  },
})

const loading = ref(false)

// here we handle our form submission
const handleSignup = handleSubmit(async (values) => {
  if (loading.value) return

  loading.value = true

  await sleep(1600)

  if (values.email !== 'awesome@cssninja.io') {
    setFieldError('email', 'This email is already taken! Tip: use awesome@cssninja.io')
    scrollTo('#email')
    loading.value = false
    return
  }

  notyf.success('You have successfully signed up!')
  loading.value = false
})
</script>

<template>
  <form @submit.prevent="handleSignup">
    <VField id="email" v-slot="{ field }" label="Your email">
      <VControl icon="feather:user">
        <VInput type="email" placeholder="john.doe@gmail.com" autocomplete="username" />
        <p v-if="field?.errors?.value?.length" class="help is-danger">
          {{ field.errors?.value?.join(', ') }}
        </p>
      </VControl>
    </VField>
    <VField id="password" v-slot="{ field }" label="Choose a password">
      <VControl icon="feather:lock">
        <VInput type="password" placeholder="Not$3cret" autocomplete="new-password" />
        <p v-if="field?.errors?.value?.length" class="help is-danger">
          {{ field.errors?.value?.join(', ') }}
        </p>
      </VControl>
    </VField>
    <VField id="passwordCheck" v-slot="{ field }" label="Confirm your new password">
      <VControl icon="feather:check">
        <VInput type="password" placeholder="Not$3cret" autocomplete="new-password" />
        <p v-if="field?.errors?.value?.length" class="help is-danger">
          {{ field.errors?.value?.join(', ') }}
        </p>
      </VControl>
    </VField>
    <VField id="birthdate" v-slot="{ field }" label="Birthdate">
      <VControl icon="feather:calendar">
        <ClientOnly>
          <VDatePicker
            :model-value="field?.value"
            color="green"
            trim-weeks
            @update:model-value="field?.handleChange"
          >
            <template #default="{ inputValue, inputEvents }">
              <input
                class="input"
                type="text"
                :value="inputValue"
                placeholder="Select your birthdate"
                v-on="inputEvents"
              />
              <p v-if="field?.errors?.value?.length" class="help is-danger">
                {{ field.errors?.value?.join(', ') }}
              </p>
            </template>
          </VDatePicker>
        </ClientOnly>
      </VControl>
    </VField>
    <VField
      id="interests"
      v-slot="{ field }"
      class="pb-4"
      label="Choose 2 or 3 center of interests"
    >
      <VControl>
        <VSelect multiple size="9">
          <VOption value="Food">Food</VOption>
          <VOption value="Home Appliances">Home Appliances</VOption>
          <VOption value="Computer & Office">Computer & Office</VOption>
          <VOption value="Home Improvement">Home Improvement</VOption>
          <VOption value="Home & Garden">Home & Garden</VOption>
          <VOption value="Sports & Entertainment">Sports & Entertainment</VOption>
          <VOption value="Toys & Hobbies">Education & Office Supplies</VOption>
          <VOption value="Security & Protection">Security & Protection</VOption>
          <VOption value="Lights & Lighting">Lights & Lighting</VOption>
        </VSelect>
        <p v-if="field?.errors?.value?.length" class="help is-danger">
          {{ field.errors?.value?.join(', ') }}
        </p>
        <p class="help">
          Hold down the <kbd>Ctrl</kbd> (windows) / <kbd>Command</kbd> (Mac) button to
          select multiple options.
        </p>
      </VControl>
    </VField>
    <VField id="agreeTerms" v-slot="{ field }">
      <VControl>
        <VCheckbox paddingless>
          I agree to the <a href="#">terms and conditions</a>
        </VCheckbox>

        <p v-if="field?.errors?.value?.length" class="help is-danger">
          {{ field.errors?.value?.join(', ') }}
        </p>
      </VControl>
    </VField>
    <VField id="emailOptin">
      <VControl>
        <VCheckbox color="primary" paddingless>
          I want to receive exclusive news and updates
        </VCheckbox>
      </VControl>
    </VField>
    <VButtons class="pt-4">
      <VButton :loading="loading" type="submit" color="primary">Submit</VButton>
      <VButton type="reset" @click="handleReset">Reset</VButton>
    </VButtons>
    <div class="demo-code-wrapper">
      <div class="demo-state">
        <pre>{{ values }}</pre>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.demo-code-wrapper {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;
  overflow-x: auto;

  .demo-code {
    flex-grow: 1;
  }

  .demo-state {
    // flex-grow: 1;
    position: relative;
    margin-bottom: 1.5rem;
    max-width: 100%;

    &::before {
      position: absolute;
      top: 0.6em;
      inset-inline-end: 1em;
      z-index: 2;
      font-size: 0.8rem;
      color: #888;
      content: 'values';
    }
  }
}
</style>
