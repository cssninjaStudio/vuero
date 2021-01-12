<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Form Layouts 3 - WebApp - Vuero')
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
            <!--Form Layout 3-->
            <div class="form-layout is-separate">
              <div class="form-outer">
                <div class="form-body">
                  <div class="form-section">
                    <div class="form-section-inner has-padding-bottom">
                      <h3 class="has-text-centered">Personal Information</h3>
                      <div class="columns is-multiline">
                        <div class="column is-6">
                          <div class="field">
                            <label>First name</label>
                            <div class="control has-icon">
                              <input type="text" class="input" placeholder="" />
                              <div class="form-icon">
                                <Icon icon="feather:user" />
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
                                <Icon icon="feather:user" />
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
                                <Icon icon="feather:mail" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="field">
                            <label>Street</label>
                            <div class="control has-icon">
                              <input type="text" class="input" placeholder="" />
                              <div class="form-icon">
                                <Icon icon="feather:map-pin" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="field">
                            <label>City</label>
                            <div class="control has-icon">
                              <input type="text" class="input" placeholder="" />
                              <div class="form-icon">
                                <Icon icon="feather:map-pin" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="field">
                            <label>Country</label>
                            <div class="control is-combo">
                              <div class="image-combo-box has-rounded-images">
                                <div class="box-inner">
                                  <div class="combo-item">
                                    <img
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <span class="selected-item"
                                      >Select a country</span
                                    >
                                  </div>
                                </div>
                                <div class="box-chevron">
                                  <Icon icon="feather:chevron-down" />
                                </div>
                                <div class="box-dropdown">
                                  <div class="dropdown-inner has-slimscroll">
                                    <ul>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/flags/united-states-of-america.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name"
                                          >United States</span
                                        >
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/flags/germany.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name">Germany</span>
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/flags/france.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name">France</span>
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/flags/england.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name">England</span>
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="field">
                            <label>Phone</label>
                            <div class="control has-icon">
                              <input type="text" class="input" placeholder="" />
                              <div class="form-icon">
                                <Icon icon="feather:phone" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-section">
                    <div class="form-section-inner">
                      <h3 class="has-text-centered">Delivery</h3>
                      <div class="columns is-multiline">
                        <div class="column is-12">
                          <div class="field">
                            <label>Delivery Fee</label>
                            <div class="control">
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
                                  <input
                                    type="radio"
                                    name="delivery_type"
                                    checked
                                  />
                                  <div class="radio-box-inner">
                                    <div class="fee">
                                      <span>5</span>
                                    </div>
                                    <p>2-5 days</p>
                                  </div>
                                </div>
                              </div>

                              <p>
                                <span
                                  >Estimated delivery date:
                                  <span>Oct 23</span></span
                                >
                                <span>Each package has a tracking number</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-section-outer">
                      <div class="checkboxes">
                        <div class="field">
                          <div class="control">
                            <label class="checkbox is-circle">
                              <input type="checkbox" checked />
                              <span></span>
                              Create an account
                            </label>
                          </div>
                        </div>

                        <div class="field">
                          <div class="control">
                            <label class="checkbox is-circle">
                              <input type="checkbox" />
                              <span></span>
                              Subscribe to our Newsletter
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="button-wrap">
                        <button
                          class="button h-button is-primary is-bold is-raised is-fullwidth"
                        >
                          Confirm My Order
                        </button>
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
