<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
</script>

<template>
  <form class="form-layout" @submit.prevent>
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
                :to="{ name: 'sidebar-layouts-profile-view' }"
                light
                dark-outlined
              >
                Cancel
              </VButton>
              <VButton color="primary" raised> Schedule </VButton>
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
                <label>First Name</label>
                <VControl icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="given-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>Last Name</label>
                <VControl icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <label>Email Address</label>
                <VControl icon="feather:mail">
                  <input
                    type="email"
                    class="input"
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
                <label>Company Name</label>
                <VControl icon="feather:briefcase">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="organization"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>Company Phone</label>
                <VControl icon="feather:phone">
                  <input
                    type="tel"
                    class="input"
                    placeholder=""
                    autocomplete="tel"
                    inputmode="tel"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>Company Size</label>
                <VControl>
                  <Multiselect
                    v-model="companySize"
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
              <VField>
                <label>Business Type</label>
                <VControl>
                  <Multiselect
                    v-model="businessType"
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
                <label>Company Email</label>
                <VControl icon="feather:mail">
                  <input
                    type="email"
                    class="input"
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
              <VField>
                <label>Product to demo</label>
                <VControl>
                  <Multiselect
                    v-model="productToDemo"
                    placeholder="Select a product"
                    :options="['Vuero Starter', 'Vuero Pro', 'Vuero Business']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <v-date-picker v-model="date" color="green" trim-weeks>
                <template #default="{ inputValue, inputEvents }">
                  <VField>
                    <label>Prefered Date</label>
                    <VControl icon="feather:calendar">
                      <input
                        class="input"
                        type="text"
                        placeholder="Select a date"
                        :value="inputValue"
                        v-on="inputEvents"
                      />
                    </VControl>
                  </VField>
                </template>
              </v-date-picker>
            </div>
            <div class="column is-12">
              <VField>
                <label>Special Instructions</label>
                <VControl>
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Tell us about any details you'd like us to know..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  ></textarea>
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
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_forms.scss';
</style>
