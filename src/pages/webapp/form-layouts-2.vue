<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Form Layouts 2 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Form Layouts"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Form Layouts</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Form Layout 2-->
            <div class="form-layout is-split is-webapp">
              <div class="form-outer">
                <div class="form-header stuck-header">
                  <div class="form-header-inner">
                    <div class="left">
                      <h3>Request Payout</h3>
                    </div>
                    <div class="right">
                      <div class="buttons">
                        <a
                          href="#"
                          class="button h-button is-light is-dark-outlined"
                        >
                          <span class="icon">
                            <i class="lnir lnir-arrow-left rem-100"></i>
                          </span>
                          <span>Cancel</span>
                        </a>
                        <button
                          id="save-button"
                          class="button h-button is-primary is-raised"
                        >
                          Request Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-body">
                  <div class="form-section">
                    <div class="left">
                      <h3 class="has-text-centered">Choose an amount</h3>
                      <div class="operator">
                        <span>Or</span>
                      </div>
                      <div class="field">
                        <div class="control">
                          <div class="radio-pills">
                            <div class="radio-pill">
                              <input
                                type="radio"
                                name="amount_selection"
                                checked
                              />
                              <div class="radio-pill-inner">
                                <span>$20</span>
                              </div>
                            </div>
                            <div class="radio-pill">
                              <input type="radio" name="amount_selection" />
                              <div class="radio-pill-inner">
                                <span>$40</span>
                              </div>
                            </div>
                            <div class="radio-pill">
                              <input type="radio" name="amount_selection" />
                              <div class="radio-pill-inner">
                                <span>$60</span>
                              </div>
                            </div>
                            <div class="radio-pill">
                              <input type="radio" name="amount_selection" />
                              <div class="radio-pill-inner">
                                <span>$100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right">
                      <h3 class="has-text-centered">Enter your own</h3>
                      <div class="field">
                        <div class="control has-icon">
                          <input class="input" placeholder="Amount..." />
                          <div class="form-icon">
                            <Icon icon="feather:dollar-sign" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-section is-grey">
                    <div class="left">
                      <h3>Personal Info</h3>

                      <div class="field">
                        <div class="control has-icon">
                          <input class="input" placeholder="First Name *" />
                          <div class="form-icon">
                            <Icon icon="feather:user" />
                          </div>
                        </div>
                      </div>
                      <div class="field">
                        <div class="control has-icon">
                          <input class="input" placeholder="Last Name *" />
                          <div class="form-icon">
                            <Icon icon="feather:user" />
                          </div>
                        </div>
                      </div>
                      <div class="field">
                        <div class="control has-icon">
                          <input class="input" placeholder="Email Address *" />
                          <div class="form-icon">
                            <Icon icon="feather:mail" />
                          </div>
                        </div>
                      </div>
                      <div class="field">
                        <div class="control has-icon">
                          <input class="input" placeholder="Phone Number *" />
                          <div class="form-icon">
                            <Icon icon="feather:phone" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right">
                      <h3>Payout Details</h3>

                      <div class="field">
                        <div class="control">
                          <div class="h-select">
                            <div class="select-box">
                              <span>Bank Account</span>
                            </div>
                            <div class="select-icon">
                              <Icon icon="feather:chevron-down" />
                            </div>
                            <div class="select-drop has-slimscroll-sm">
                              <div class="drop-inner">
                                <div class="option-row">
                                  <input type="radio" name="account_select" />
                                  <div class="option-meta">
                                    <span>AMEX **** 42</span>
                                  </div>
                                </div>
                                <div class="option-row">
                                  <input type="radio" name="account_select" />
                                  <div class="option-meta">
                                    <span>HSBC **** 29</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="field">
                        <div class="control">
                          <div class="h-select">
                            <div class="select-box">
                              <span>Transfer Fees</span>
                            </div>
                            <div class="select-icon">
                              <Icon icon="feather:chevron-down" />
                            </div>
                            <div class="select-drop has-slimscroll-sm">
                              <div class="drop-inner">
                                <div class="option-row">
                                  <input type="radio" name="fees_selection" />
                                  <div class="option-meta">
                                    <span>Super Fast - $3.00</span>
                                  </div>
                                </div>
                                <div class="option-row">
                                  <input type="radio" name="fees_selection" />
                                  <div class="option-meta">
                                    <span>Regular - $0.50</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="field">
                        <label>Notify me when funds are ready?</label>
                        <div class="control">
                          <label class="radio">
                            <input
                              type="radio"
                              name="notification_selection"
                              checked
                            />
                            <span></span>
                            Yes
                          </label>

                          <label class="radio is-outlined is-primary">
                            <input type="radio" name="notification_selection" />
                            <span></span>
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_forms.scss';
</style>
