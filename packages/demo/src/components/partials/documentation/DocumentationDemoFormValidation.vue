<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useFieldArray, useForm } from 'vee-validate'
import { z } from 'zod'
import VueScrollTo from 'vue-scrollto'

const notyf = useNotyf()
const { scrollTo } = VueScrollTo

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    email: z
      .string({
        required_error: 'Enter your email first',
      })
      .email('A valid email address should be provided'),
    rating: z
      .number({
        required_error: 'Enter a valid rating first',
      })
      .gte(1, 'The rating should be at least 1'),
    password: z
      .string({
        required_error: 'Enter your password to sign in',
      })
      .min(8, 'Your password should contains at least 8 characters'),
    passwordCheck: z.string(),
    birthdate: z
      .date({
        invalid_type_error: 'Please enter a valid date',
        required_error: 'Please enter a date',
      })
      .max(new Date(), 'You cannot be born in the future')
      .nullable(),
    agreeTerms: z
      .boolean()
      .refine(value => value, 'You must agree our terms of service'),
    area: z.object({
      timezone: z.string().min(1, 'Please select a timezone'),
    }),
    interests: z
      .string()
      .array()
      .min(2, 'You must select at least 2 center of interest')
      .max(3, 'You can select up to 3 center of interest'),
    allergens: z.string().array().max(4, 'You can select up to 4 allergen'),
    feedback: z
      .array(
        z.object({
          title: z
            .string()
            .min(10, 'Your experience title should be at least 10 characters'),
          rating: z.number().gte(1, 'The rating should be at least 1'),
        }),
      )
      .min(1, 'You must send at least 1 feedback')
      .max(3, 'You can send up to 3 feedbacks'),
    emailOptin: z.boolean(),
  })
  .refine(data => data.password === data.passwordCheck, {
    message: 'The confirmation does not match the password',
    path: ['passwordCheck'],
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

// we need to declare the schema for the form
const validationSchema = toTypedSchema(zodSchema)

// Set initial values for the form
const initialValues = {
  email: '',
  password: '',
  rating: 1,
  passwordCheck: '',
  birthdate: null,
  interests: [],
  feedback: [],
  allergens: [],
  area: {
    timezone: '',
  },
  agreeTerms: false,
  emailOptin: false,
} satisfies FormInput

// here we create a vee-validate form context that
// will be used in all vuero form components
const { handleSubmit, setFieldError, handleReset, values, errors } = useForm({
  validationSchema,
  initialValues,
})

const { remove, push, fields } = useFieldArray<FormInput['feedback'][0]>('feedback')
const { errorMessage } = useField<FormInput['feedback'][0]>('feedback')

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

  notyf.primary('You have successfully signed up!')
  loading.value = false
})
</script>

<template>
  <form
    method="post"
    novalidate
    @submit.prevent="handleSignup"
  >
    <VField
      id="email"
      v-slot="{ field }"
      label="Your email"
    >
      <VControl icon="lucide:user">
        <VInput
          type="email"
          placeholder="john.doe@gmail.com"
          autocomplete="username"
        />
        <p
          v-if="field?.errorMessage"
          class="help is-danger"
        >
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField
      id="password"
      v-slot="{ field }"
      label="Choose a password"
    >
      <VControl icon="lucide:lock">
        <VInput
          type="password"
          placeholder="Not$3cret"
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
    <VField
      id="passwordCheck"
      v-slot="{ field }"
      label="Confirm your new password"
    >
      <VControl icon="lucide:check">
        <VInput
          type="password"
          placeholder="Not$3cret"
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
    <VField
      id="birthdate"
      v-slot="{ field }"
      label="Birthdate"
    >
      <VControl icon="lucide:calendar">
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
              >
              <p
                v-if="field?.errorMessage"
                class="help is-danger"
              >
                {{ field.errorMessage }}
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
        <VSelect
          multiple
          size="9"
        >
          <VOption value="Food">
            Food
          </VOption>
          <VOption value="Home Appliances">
            Home Appliances
          </VOption>
          <VOption value="Computer & Office">
            Computer & Office
          </VOption>
          <VOption value="Home Improvement">
            Home Improvement
          </VOption>
          <VOption value="Home & Garden">
            Home & Garden
          </VOption>
          <VOption value="Sports & Entertainment">
            Sports & Entertainment
          </VOption>
          <VOption value="Toys & Hobbies">
            Education & Office Supplies
          </VOption>
          <VOption value="Security & Protection">
            Security & Protection
          </VOption>
          <VOption value="Lights & Lighting">
            Lights & Lighting
          </VOption>
        </VSelect>
        <p
          v-if="field?.errorMessage"
          class="help is-danger"
        >
          {{ field.errorMessage }}
        </p>
        <p class="help">
          Hold down the <kbd>Ctrl</kbd> (windows) / <kbd>Command</kbd> (Mac) button to
          select multiple options.
        </p>
      </VControl>
    </VField>
    <VField
      id="area"
      v-slot="{ field }"
      class="pb-4"
      label="Choose your timezone"
    >
      <VControl>
        <VSelect>
          <VOption :value="{ timezone: 'europe/paris', label: 'Paris' }">
            europe
          </VOption>
          <VOption :value="{ timezone: 'asia/tokyo', label: 'Tokyo' }">
            asia
          </VOption>
          <VOption :value="{ timezone: 'america/new_york', label: 'New York' }">
            america
          </VOption>
          <VOption :value="{ timezone: 'australia/sydney', label: 'Sydney' }">
            australia
          </VOption>
        </VSelect>
        <p
          v-if="field?.errorMessage"
          class="help is-danger"
        >
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField
      id="allergens"
      v-slot="{ field }"
      label="Pick your allergens"
    >
      <VControl>
        <VCheckbox
          class="pl-0"
          color="primary"
          value="peanuts"
        >
          Peanuts
        </VCheckbox>
        <VCheckbox
          id="allergens-milk"
          color="primary"
          value="milk"
        >
          Milk
        </VCheckbox>
        <VCheckbox
          id="allergens-egg"
          color="primary"
          value="egg"
        >
          Egg
        </VCheckbox>
        <VCheckbox
          id="allergens-fish"
          color="primary"
          value="fish"
        >
          Fish
        </VCheckbox>
        <VCheckbox
          id="allergens-soybeans"
          color="primary"
          value="soybeans"
        >
          Soybeans
        </VCheckbox>
      </VControl>
      <p
        v-if="field?.errorMessage"
        class="help is-danger"
      >
        {{ field.errorMessage }}
      </p>
    </VField>
    <div class="py-4">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div
        v-for="(element, index) in fields"
        class="my-3"
      >
        <div class="columns">
          <VField
            :id="`feedback[${index}].title`"
            v-slot="{ field }"
            label="Name your experience"
            class="column is-two-fifths"
          >
            <VControl>
              <VInput
                type="email"
                placeholder="john.doe@gmail.com"
                autocomplete="username"
              />
              <p
                v-if="field?.errorMessage"
                class="help is-danger"
              >
                {{ field.errorMessage }}
              </p>
            </VControl>
          </VField>
          <VField
            :id="`feedback[${index}].rating`"
            v-slot="{ field }"
            class="ml-4"
            label="Give a rating"
          >
            <VControl>
              <VRangeRating
                class="mt-5"
                size="medium"
              />
              <p
                v-if="field?.errorMessage"
                class="help is-danger"
              >
                {{ field.errorMessage }}
              </p>
            </VControl>
          </VField>
          <VIconButton
            class="is-remove"
            light
            raised
            circle
            color="danger"
            icon="lucide:trash-2"
            @click="() => remove(index)"
          />
        </div>
      </div>
      <div class="mb-5">
        <VButton @click="() => push({ rating: 3, title: '' })">
          Add feedback
        </VButton>
        <p
          v-if="errorMessage"
          class="help is-danger"
        >
          {{ errorMessage }}
        </p>
      </div>
    </div>
    <VField
      id="agreeTerms"
      v-slot="{ field }"
    >
      <VControl>
        <VSwitchBlock> I agree to the <a href="#">terms and conditions</a> </VSwitchBlock>

        <p
          v-if="field?.errorMessage"
          class="help is-danger"
        >
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="emailOptin">
      <VControl>
        <VSwitchBlock thin>
          I want to receive exclusive news and updates
        </VSwitchBlock>
      </VControl>
    </VField>
    <VButtons class="pt-4">
      <VButton
        :loading="loading"
        type="submit"
        color="primary"
      >
        Submit
      </VButton>
      <VButton
        type="reset"
        @click="handleReset"
      >
        Reset
      </VButton>
    </VButtons>
    <div class="demo-code-wrapper">
      <div class="demo-state">
        <pre>{{ values }}</pre>
      </div>
      <div class="demo-state">
        <pre>{{ errors }}</pre>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.is-remove {
  margin-inline-start: 1.5rem;
  margin-top: 2.25rem;
}

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

@media only screen and (width <= 767px) {
  .is-remove {
    margin-inline-start: 1rem;
    margin-top: 1em;
    margin-bottom: 2.25rem;
  }
}
</style>
