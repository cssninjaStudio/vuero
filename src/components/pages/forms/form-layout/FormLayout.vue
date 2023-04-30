<script setup lang="ts">
const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
const onSubmit = () => {
  console.log('Form submitted!')
}
</script>

<template>
  <form class="form-layout" @submit.prevent="onSubmit">
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Request a Demo</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-left rem-100"
                to="/sidebar/layouts/profile-view"
                light
                dark-outlined
              >
                Cancel
              </VButton>
              <VButton type="submit" color="primary" raised> Schedule </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Personal Info</h4>
            <p>This helps us to know you</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>First Name</VLabel>
                <VControl icon="feather:user">
                  <VInput type="text" placeholder="" autocomplete="given-name" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>Last Name</VLabel>
                <VControl icon="feather:user">
                  <VInput type="text" placeholder="" autocomplete="family-name" />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>Email Address</VLabel>
                <VControl icon="feather:mail">
                  <VInput
                    type="email"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Company Info</h4>
            <p>Tell us about your company</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>Company Name</VLabel>
                <VControl icon="feather:briefcase">
                  <VInput type="text" placeholder="" autocomplete="organization" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>Company Phone</VLabel>
                <VControl icon="feather:phone">
                  <VInput type="tel" placeholder="" autocomplete="tel" inputmode="tel" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>Company Size</VLabel>
                <VControl>
                  <Multiselect
                    v-model="companySize"
                    :attrs="{ id }"
                    placeholder="Select a size"
                    :options="[
                      '1-5 Employees',
                      '5-25 Employees',
                      '25-50 Employees',
                      '50-100 Employees',
                      '100+ Employees',
                    ]"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>Business Type</VLabel>
                <VControl>
                  <Multiselect
                    v-model="businessType"
                    :attrs="{ id }"
                    placeholder="Select a type"
                    :options="[
                      'Government',
                      'Medical',
                      'Finance',
                      'Services',
                      'Technology',
                    ]"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>Company Email</VLabel>
                <VControl icon="feather:mail">
                  <VInput
                    type="email"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Demonstration</h4>
            <p>how would you like your demo?</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>Product to demo</VLabel>
                <VControl>
                  <Multiselect
                    v-model="productToDemo"
                    :attrs="{ id }"
                    placeholder="Select a product"
                    :options="['Vuero Starter', 'Vuero Pro', 'Vuero Business']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <ClientOnly>
                <VDatePicker v-model="date" color="green" trim-weeks>
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VLabel>Prefered Date</VLabel>
                      <VControl icon="feather:calendar">
                        <input
                          class="input v-input"
                          type="text"
                          placeholder="Select a date"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </ClientOnly>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>Special Instructions</VLabel>
                <VControl>
                  <VTextarea
                    class="textarea"
                    rows="4"
                    placeholder="Tell us about any details you'd like us to know..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  ></VTextarea>
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.form-layout {
  max-width: 740px;
  margin: 0 auto;
}
</style>
