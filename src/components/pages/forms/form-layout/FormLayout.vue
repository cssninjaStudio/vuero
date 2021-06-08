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
              <V-Button
                icon="lnir lnir-arrow-left rem-100"
                :to="{ name: 'sidebar-layouts-profile-view' }"
                light
                dark-outlined
              >
                Cancel
              </V-Button>
              <V-Button color="primary" raised> Schedule </V-Button>
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
              <V-Field>
                <label>First Name</label>
                <V-Control icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="given-name"
                  />
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-6">
              <V-Field>
                <label>Last Name</label>
                <V-Control icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-12">
              <V-Field>
                <label>Email Address</label>
                <V-Control icon="feather:mail">
                  <input
                    type="email"
                    class="input"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </V-Control>
              </V-Field>
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
              <V-Field>
                <label>Company Name</label>
                <V-Control icon="feather:briefcase">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="organization"
                  />
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-6">
              <V-Field>
                <label>Company Phone</label>
                <V-Control icon="feather:phone">
                  <input
                    type="tel"
                    class="input"
                    placeholder=""
                    autocomplete="tel"
                    inputmode="tel"
                  />
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-6">
              <V-Field>
                <label>Company Size</label>
                <V-Control>
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
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-6">
              <V-Field>
                <label>Business Type</label>
                <V-Control>
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
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-12">
              <V-Field>
                <label>Company Email</label>
                <V-Control icon="feather:mail">
                  <input
                    type="email"
                    class="input"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </V-Control>
              </V-Field>
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
              <V-Field>
                <label>Product to demo</label>
                <V-Control>
                  <Multiselect
                    v-model="productToDemo"
                    placeholder="Select a product"
                    :options="['Vuero Starter', 'Vuero Pro', 'Vuero Business']"
                  />
                </V-Control>
              </V-Field>
            </div>
            <div class="column is-6">
              <v-date-picker v-model="date" color="green" trim-weeks>
                <template #default="{ inputValue, inputEvents }">
                  <V-Field>
                    <label>Prefered Date</label>
                    <V-Control icon="feather:calendar">
                      <input
                        class="input"
                        type="text"
                        placeholder="Select a date"
                        :value="inputValue"
                        v-on="inputEvents"
                      />
                    </V-Control>
                  </V-Field>
                </template>
              </v-date-picker>
            </div>
            <div class="column is-12">
              <V-Field>
                <label>Special Instructions</label>
                <V-Control>
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Tell us about any details you'd like us to know..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  ></textarea>
                </V-Control>
              </V-Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_forms.scss';
</style>
