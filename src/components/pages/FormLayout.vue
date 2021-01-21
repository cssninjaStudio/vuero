<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
</script>

<template>
  <!--Form Layout 1-->
  <div class="form-layout">
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Request a Demo</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <RouterLink
                :to="{ name: 'admin-layouts-profile-view' }"
                class="button h-button is-light is-dark-outlined"
              >
                <span class="icon">
                  <i class="lnir lnir-arrow-left rem-100"></i>
                </span>
                <span>Cancel</span>
              </RouterLink>
              <button
                id="save-button"
                class="button h-button is-primary is-raised"
              >
                Schedule
              </button>
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
              <div class="field">
                <label>First Name</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:user"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Last name</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:user"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <label>Email Address</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:mail"></i>
                  </div>
                </div>
              </div>
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
              <div class="field">
                <label>Company Name</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:briefcase"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Company Phone</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:phone"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Company Size</label>
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Select a size</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="company_size" />
                          <div class="option-meta">
                            <span>1-5 Employees</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_size" />
                          <div class="option-meta">
                            <span>5-25 Employees</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_size" />
                          <div class="option-meta">
                            <span>25-50 Employees</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_size" />
                          <div class="option-meta">
                            <span>50-100 Employees</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_size" />
                          <div class="option-meta">
                            <span>100+ Employees</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Business Type</label>
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Select a type</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="company_type" />
                          <div class="option-meta">
                            <span>Government</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_type" />
                          <div class="option-meta">
                            <span>Medical</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_type" />
                          <div class="option-meta">
                            <span>Finance</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_type" />
                          <div class="option-meta">
                            <span>Services</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="company_type" />
                          <div class="option-meta">
                            <span>Technology</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <label>Company Email</label>
                <div class="control has-icon">
                  <input type="text" class="input" placeholder="" />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:mail"></i>
                  </div>
                </div>
              </div>
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
              <div class="field">
                <label>Product to demo</label>
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Select a product</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="product_demo" />
                          <div class="option-meta">
                            <span>Vuero Starter</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="product_demo" />
                          <div class="option-meta">
                            <span>Vuero Pro</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="product_demo" />
                          <div class="option-meta">
                            <span>Vuero Business</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Prefered Date</label>
                <div class="control has-icon">
                  <input
                    id="pickaday-datepicker"
                    class="input"
                    placeholder="Select a date"
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:calendar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <label>Special Instructions</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Tell us about any details you'd like us to know..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_forms.scss';
</style>
