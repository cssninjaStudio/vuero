<template>
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
              <div class="column is-12">
                <div class="field">
                  <label>Street</label>
                  <div class="control has-icon">
                    <input type="text" class="input" placeholder="" />
                    <div class="form-icon">
                      <i class="iconify" data-icon="feather:map-pin"></i>
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
                      <i class="iconify" data-icon="feather:map-pin"></i>
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
                            src="/images/icons/flags/united-states-of-america.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                          <span class="selected-item">Select a country</span>
                        </div>
                      </div>
                      <div class="box-chevron">
                        <i class="iconify" data-icon="feather:chevron-down"></i>
                      </div>
                      <div class="box-dropdown">
                        <div class="dropdown-inner has-slimscroll">
                          <ul>
                            <li>
                              <span class="item-icon">
                                <img
                                  src="/images/icons/flags/united-states-of-america.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </span>
                              <span class="item-name">United States</span>
                              <span class="checkmark">
                                <i
                                  class="iconify"
                                  data-icon="feather:check"
                                ></i>
                              </span>
                            </li>
                            <li>
                              <span class="item-icon">
                                <img
                                  src="/images/icons/flags/germany.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </span>
                              <span class="item-name">Germany</span>
                              <span class="checkmark">
                                <i
                                  class="iconify"
                                  data-icon="feather:check"
                                ></i>
                              </span>
                            </li>
                            <li>
                              <span class="item-icon">
                                <img
                                  src="/images/icons/flags/france.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </span>
                              <span class="item-name">France</span>
                              <span class="checkmark">
                                <i
                                  class="iconify"
                                  data-icon="feather:check"
                                ></i>
                              </span>
                            </li>
                            <li>
                              <span class="item-icon">
                                <img
                                  src="/images/icons/flags/england.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </span>
                              <span class="item-name">England</span>
                              <span class="checkmark">
                                <i
                                  class="iconify"
                                  data-icon="feather:check"
                                ></i>
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
                      <i class="iconify" data-icon="feather:phone"></i>
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
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_forms.scss';
</style>
