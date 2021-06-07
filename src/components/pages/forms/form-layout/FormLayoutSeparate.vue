<script setup lang="ts">
import { ref } from 'vue'

const country = ref('')
</script>

<template>
  <form class="form-layout is-separate" @submit.prevent>
    <div class="form-outer">
      <div class="form-body">
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">Personal Information</h3>
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
              <div class="column is-12">
                <V-Field>
                  <label>Street</label>
                  <V-Control icon="feather:map-pin">
                    <input
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="street-address"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-6">
                <V-Field>
                  <label>City</label>
                  <V-Control icon="feather:map-pin">
                    <input
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="address-level2"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-6">
                <V-Field class="is-image-select">
                  <label>Country</label>
                  <V-Control>
                    <Multiselect
                      v-model="country"
                      placeholder="Select a country"
                      autocomplete="country"
                      label="name"
                      :options="[
                        {
                          value: 'english',
                          name: 'English',
                          icon: '/images/icons/flags/united-states-of-america.svg',
                        },
                        {
                          value: 'french',
                          name: 'French',
                          icon: '/images/icons/flags/france.svg',
                        },
                        {
                          value: 'german',
                          name: 'German',
                          icon: '/images/icons/flags/germany.svg',
                        },
                        {
                          value: 'spanish',
                          name: 'Spanish',
                          icon: '/images/icons/flags/spain.svg',
                        },
                      ]"
                    >
                      <template #singlelabel="{ value }">
                        <div class="multiselect-single-label">
                          <img
                            class="select-label-icon"
                            :src="value.icon"
                            alt=""
                          />
                          <span class="select-label-text">
                            {{ value.name }}
                          </span>
                        </div>
                      </template>
                      <template #option="{ option }">
                        <img
                          class="select-option-icon"
                          :src="option.icon"
                          alt=""
                        />
                        <span class="select-label-text">
                          {{ option.name }}
                        </span>
                      </template>
                    </Multiselect>
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-12">
                <V-Field>
                  <label>Phone</label>
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
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-inner">
            <h3 class="has-text-centered">Delivery</h3>
            <div class="columns is-multiline">
              <div class="column is-12">
                <V-Field>
                  <label>Delivery Fee</label>
                  <V-Control>
                    <div class="radio-boxes">
                      <div class="radio-box">
                        <input type="radio" name="delivery_type" />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>0</span>
                          </div>
                          <p>3-4 weeks</p>
                        </div>
                      </div>
                      <div class="radio-box">
                        <input type="radio" name="delivery_type" checked />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>5</span>
                          </div>
                          <p>2-5 days</p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <span>Estimated delivery date: <span>Oct 23</span></span>
                      <span>Each package has a tracking number</span>
                    </p>
                  </V-Control>
                </V-Field>
              </div>
            </div>
          </div>

          <div class="form-section-outer">
            <div class="checkboxes">
              <V-Field>
                <V-Control>
                  <label class="checkbox is-circle">
                    <input type="checkbox" checked />
                    <span></span>
                    Create an account
                  </label>
                </V-Control>
              </V-Field>

              <V-Field>
                <V-Control>
                  <label class="checkbox is-circle">
                    <input type="checkbox" />
                    <span></span>
                    Subscribe to our Newsletter
                  </label>
                </V-Control>
              </V-Field>
            </div>
            <div class="button-wrap">
              <V-Button color="primary" bold raised fullwidth>
                Confirm My Order
              </V-Button>
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
