<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-billing"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="layouts-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">SaaS Billing</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--SaaS Billing-->
            <div class="saas-billing-wrapper">
              <div class="plans-wrapper">
                <div class="left">
                  <div class="inner-wrap">
                    <h3>Select a Plan</h3>
                    <div class="plans">
                      <div
                        class="plan"
                        data-monthly="$45"
                        data-yearly="$530"
                        data-seats="3"
                        data-projects="20"
                        data-storage="20GB"
                        data-addons="1"
                        data-logo-light="assets/img/illustrations/pricing/huro-starter.svg"
                        data-logo-dark="assets/img/illustrations/pricing/huro-starter-dark.svg"
                      >
                        <input type="radio" name="plan_selection" />
                        <div class="plan-inner">
                          <img src="/@images/logos/logo/logo.svg" alt="" />
                          <div class="meta">
                            <span>Vuero Starter</span>
                            <span>Plan for starters</span>
                          </div>
                          <div class="checkmark">
                            <Icon icon="feather:check" />
                          </div>
                        </div>
                      </div>
                      <div
                        class="plan"
                        data-monthly="$99"
                        data-yearly="$1080"
                        data-seats="8"
                        data-projects="150"
                        data-storage="100GB"
                        data-addons="3"
                        data-logo-light="assets/img/illustrations/pricing/huro-pro.svg"
                        data-logo-dark="assets/img/illustrations/pricing/huro-pro-dark.svg"
                      >
                        <input type="radio" name="plan_selection" checked />
                        <div class="plan-inner">
                          <img
                            src="/@images/logos/logo/logo-secondary.svg"
                            alt=""
                          />
                          <div class="meta">
                            <span>Vuero Pro</span>
                            <span>For professionals</span>
                          </div>
                          <div class="checkmark">
                            <Icon icon="feather:check" />
                          </div>
                        </div>
                      </div>
                      <div
                        class="plan"
                        data-monthly="$149"
                        data-yearly="$1590"
                        data-seats="20"
                        data-projects="Unlimited"
                        data-storage="500GB"
                        data-addons="5"
                        data-logo-light="assets/img/illustrations/pricing/huro-business.svg"
                        data-logo-dark="assets/img/illustrations/pricing/huro-business-dark.svg"
                      >
                        <input type="radio" name="plan_selection" />
                        <div class="plan-inner">
                          <img
                            src="/@images/logos/logo/logo-accent.svg"
                            alt=""
                          />
                          <div class="meta">
                            <span>Vuero Business</span>
                            <span>For serious people</span>
                          </div>
                          <div class="checkmark">
                            <Icon icon="feather:check" />
                          </div>
                        </div>
                      </div>
                      <div
                        class="plan"
                        data-monthly="$199"
                        data-yearly="$2230"
                        data-seats="40"
                        data-projects="Unlimited"
                        data-storage="Unlimited"
                        data-addons="Unlimited"
                        data-logo-light="assets/img/illustrations/pricing/huro-enterprise.svg"
                        data-logo-dark="assets/img/illustrations/pricing/huro-enterprise-dark.svg"
                      >
                        <input type="radio" name="plan_selection" />
                        <div class="plan-inner">
                          <img
                            src="/@images/logos/logo/logo-platinum.svg"
                            alt=""
                          />
                          <div class="meta">
                            <span>Vuero Enterprise</span>
                            <span>For big companies</span>
                          </div>
                          <div class="checkmark">
                            <Icon icon="feather:check" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="plan-details">
                    <div class="plan-details-inner">
                      <div class="plan-description">
                        <div class="left">
                          <img
                            id="plan-logo-light"
                            class="light-image"
                            src="/@images/illustrations/pricing/huro-pro.svg"
                            alt=""
                          />
                          <img
                            id="plan-logo-dark"
                            class="dark-image"
                            src="/@images/illustrations/pricing/huro-pro-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="right">
                          <div class="plan-pricing">
                            <span
                              ><b><var id="plan-monthly">$99</var></b> per
                              month</span
                            >
                            <span
                              >Billed
                              <var id="plan-yearly">$1080</var> yearly</span
                            >
                          </div>
                          <div class="plan-moto">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Utilitatis causa amicitia est quaesita.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="plan-summary">
                        <p>
                          Vuero has incredible features and each plan perfectly
                          adapts to your company, wether it is a small business
                          or a bigger one. Vuero can also scale with you, as
                          your business grows.
                        </p>
                        <div class="plan-features">
                          <div class="columns">
                            <div class="column is-6">
                              <div class="content">
                                <ul>
                                  <li><var id="plan-seats">5</var> seats</li>
                                  <li>
                                    <var id="plan-projects">150</var> projects
                                  </li>
                                  <li>
                                    <var id="plan-storage">100GB</var> storage
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="column is-6">
                              <div class="content">
                                <ul>
                                  <li>Live updates</li>
                                  <li>Payments</li>
                                  <li><var id="plan-addons">3</var> Addons</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="billing-options-wrapper">
                <div class="left">
                  <div class="option-block">
                    <div class="block-header">
                      <h3>Team Seats</h3>
                      <span>3 remaining</span>
                    </div>
                    <div class="block-body is-seats">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/18.jpg"
                          alt=""
                          data-user-popover="7"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <button class="add-seat">
                        <Icon icon="feather:plus" />
                      </button>
                    </div>
                  </div>

                  <div class="option-block">
                    <div class="block-header">
                      <h3>Options</h3>
                    </div>
                    <div class="block-body">
                      <div class="switch-block">
                        <label class="form-switch is-primary">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                        <div class="text">
                          <span>Send new invoices to my inbox</span>
                        </div>
                      </div>
                      <div class="switch-block">
                        <label class="form-switch is-primary">
                          <input type="checkbox" class="is-switch" />
                          <i></i>
                        </label>
                        <div class="text">
                          <span
                            >Warn me before the end of the billing period</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="option-block">
                    <div class="block-header">
                      <h3>Billing Cycle</h3>
                      <a>My Invoices</a>
                    </div>
                    <div class="block-body">
                      <div class="field">
                        <div class="control">
                          <label class="radio">
                            <input type="radio" name="billing_radio" checked />
                            <span></span>
                            Monthly
                          </label>

                          <label class="radio is-outlined is-primary">
                            <input type="radio" name="billing_radio" />
                            <span></span>
                            Yearly
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="right">
                  <div class="payment-form">
                    <div class="form-header">
                      <h3>Payment information</h3>
                      <span id="generatecard">Randomize</span>
                    </div>

                    <CreditCard />

                    <div class="form-container">
                      <div class="columns is-multiline">
                        <div class="column is-12">
                          <div class="field">
                            <label for="name">Name</label>
                            <div class="control">
                              <input
                                id="name"
                                class="input"
                                maxlength="20"
                                type="text"
                                placeholder="The name on the card"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="field">
                            <label for="cardnumber">Card Number</label>
                            <div class="control">
                              <input
                                id="cardnumber"
                                class="input"
                                type="text"
                                pattern="[0-9]*"
                                placeholder="Credit card number"
                              />
                              <svg
                                id="ccicon"
                                class="ccicon"
                                width="750"
                                height="471"
                                viewBox="0 0 750 471"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              ></svg>
                            </div>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="field">
                            <label for="expirationdate">Expiration</label>
                            <div class="control">
                              <input
                                id="expirationdate"
                                class="input"
                                type="text"
                                pattern="[0-9]*"
                                placeholder="MM / YY"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="field">
                            <label for="securitycode">CVC</label>
                            <div class="control">
                              <input
                                id="securitycode"
                                class="input"
                                type="text"
                                pattern="[0-9]*"
                                placeholder="3 digits code"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="button-wrap">
                            <button
                              type="button"
                              class="button h-button is-primary is-raised is-fullwidth"
                            >
                              Save Payment Method
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
      </div>
    </div>
  </DefaultLayout>
</template>
