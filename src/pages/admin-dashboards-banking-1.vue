<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      data-naver-offset="150"
      data-menu-item="#home-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="home-sidebar"
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
              <h1 class="title is-4">Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Banking Dashboard V1-->
            <div class="banking-dashboard banking-dashboard-v1">
              <div class="columns is-multiline">
                <!--Credit Cards-->
                <div class="column is-4">
                  <div class="dashboard-card is-credit-cards">
                    <div class="title-wrap">
                      <h3 class="dark-inverted">My Cards</h3>
                      <button class="button is-circle is-dark-outlined">
                        <span class="icon is-small">
                          <Icon icon="feather:plus" />
                        </span>
                      </button>
                    </div>

                    <div class="card-block">
                      <div class="card-block-inner is-dark-bordered-12">
                        <div class="credit-card is-theme-1">
                          <div class="shape"></div>
                          <div class="top">
                            <div class="card-number">
                              <span>** 4628</span>
                              <img
                                src="/@images/icons/dashboards/banking/visa-squared-white.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="bottom">
                            <span>Credit Card</span>
                          </div>
                        </div>
                        <div class="credit-card-meta">
                          <span>Card Balance</span>
                          <span class="dark-inverted">$2,834.31</span>
                        </div>
                        <div class="credit-card-end">
                          <!--Dropdown-->
                          <GraphDropdown />
                        </div>
                      </div>
                      <div class="info-block-inner">
                        <div class="title-wrap">
                          <h3 class="dark-inverted">Information</h3>
                          <a class="action-link">Edit</a>
                        </div>
                        <div class="info-block-line">
                          <h4 class="dark-inverted">Status</h4>
                          <span
                            ><i class="fas fa-circle text-success"></i
                            >Active</span
                          >
                        </div>
                        <div class="info-block-line">
                          <h4 class="dark-inverted">Expires in</h4>
                          <span>134 days</span>
                        </div>
                        <div class="info-block-line">
                          <h4 class="dark-inverted">Type</h4>
                          <span class="has-image">
                            <img
                              src="/@images/icons/dashboards/banking/visa-squared-color.svg"
                              alt=""
                            />
                            Credit card
                          </span>
                        </div>
                      </div>
                      <div class="card-block-inner is-dark-bordered-12">
                        <div class="credit-card is-theme-2">
                          <div class="shape"></div>
                          <div class="top">
                            <div class="card-number">
                              <span>** 2649</span>
                              <img
                                src="/@images/icons/dashboards/banking/visa-squared-white.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="bottom">
                            <span>Debit Card</span>
                          </div>
                        </div>
                        <div class="credit-card-meta">
                          <span>Card Balance</span>
                          <span class="dark-inverted">$10,563.18</span>
                        </div>
                        <div class="credit-card-end">
                          <!--Dropdown-->
                          <GraphDropdown />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="dashboard-card is-transactions">
                    <div class="title-wrap">
                      <h3 class="dark-inverted">Transactions</h3>
                      <a class="action-link">View All</a>
                    </div>

                    <div class="transactions">
                      <div class="media-flex-center">
                        <div class="h-icon is-green is-rounded">
                          <i class="lnil lnil-service"></i>
                        </div>
                        <div class="flex-meta is-lighter">
                          <span>Food Delivery</span>
                          <span>Oct 23, 2020 - 8:46pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="dark-inverted">- $41.49</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-icon is-orange is-rounded">
                          <i class="lnil lnil-analytics-alt-1"></i>
                        </div>
                        <div class="flex-meta is-lighter">
                          <span>Market Earnings</span>
                          <span>Oct 18, 2020 - 9:11am</span>
                        </div>
                        <div class="flex-end">
                          <span class="dark-inverted">+ $263.39</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-icon is-purple is-rounded">
                          <i class="lnil lnil-cart-alt"></i>
                        </div>
                        <div class="flex-meta is-lighter">
                          <span>Online Order</span>
                          <span>Oct 16, 2020 - 2:13pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="dark-inverted">- $92.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-8">
                  <div class="columns is-multiline">
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div class="title-wrap">
                          <h3 class="dark-inverted">Quick Transfer</h3>
                        </div>

                        <div class="field">
                          <div class="control is-combo">
                            <div class="image-combo-box">
                              <div class="box-inner">
                                <div class="combo-item">
                                  <img
                                    src="/@images/avatars/photos/8.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span class="selected-item"
                                    >Select an account</span
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
                                          src="/@images/icons/dashboards/banking/bank-1.svg"
                                          alt=""
                                          @error="
                                            $event.target.src =
                                              'https://via.placeholder.com/150x150'
                                          "
                                        />
                                      </span>
                                      <span class="item-name"
                                        >4156 1000 56565 17</span
                                      >
                                      <span class="checkmark">
                                        <Icon icon="feather:check" />
                                      </span>
                                    </li>
                                    <li>
                                      <span class="item-icon">
                                        <img
                                          src="/@images/icons/dashboards/banking/bank-2.svg"
                                          alt=""
                                          @error="
                                            $event.target.src =
                                              'https://via.placeholder.com/150x150'
                                          "
                                        />
                                      </span>
                                      <span class="item-name"
                                        >2247 2427 89975 12</span
                                      >
                                      <span class="checkmark">
                                        <Icon icon="feather:check" />
                                      </span>
                                    </li>
                                    <li>
                                      <span class="item-icon">
                                        <img
                                          src="/@images/icons/dashboards/banking/bank-3.svg"
                                          alt=""
                                          @error="
                                            $event.target.src =
                                              'https://via.placeholder.com/150x150'
                                          "
                                        />
                                      </span>
                                      <span class="item-name"
                                        >2247 2427 89975 12</span
                                      >
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

                        <p class="context-text">
                          Select one of your bank accounts to transfer some
                          funds. The transfer cannot exceed 20% of your balance.
                        </p>
                        <div class="level is-mobile">
                          <div class="level-left"></div>
                          <div class="level-right">
                            <div class="level-item">
                              <a class="action-link">Confirm</a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="dashboard-card"
                        data-toggle="popover"
                        data-pop-mode="hover"
                        data-pop-width="220"
                        data-pop-title="Level 3"
                        data-pop-content="Awesome! You're already a level 3 customer. Keep up for more."
                        data-pop-position="auto"
                        data-pop-icon="lnil lnil-crown-alt-1"
                        data-pop-iconbg="green"
                      >
                        <div class="title-wrap">
                          <h3 class="dark-inverted">Overall Progress</h3>
                          <span class="title-meta dark-inverted">Lvl 3</span>
                        </div>

                        <div class="progress-wrap m-b-10 m-t-10">
                          <progress
                            class="progress is-primary is-tiny"
                            value="65"
                            max="100"
                          >
                            65%
                          </progress>
                        </div>
                        <p class="context-text">
                          This is your Vuero customer level. Reach out higher
                          levels to unlock achievements, special gifts, and
                          more.
                        </p>
                        <div class="level is-mobile">
                          <div class="level-left"></div>
                          <div class="level-right">
                            <div class="level-item">
                              <a class="action-link">Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6">
                      <div class="dashboard-card is-contacts">
                        <div class="title-wrap">
                          <h3 class="dark-inverted">Send Money To</h3>
                        </div>

                        <div class="people-wrap">
                          <div class="people">
                            <div class="h-avatar is-small">
                              <span
                                class="avatar is-fake is-warning"
                                data-user-popover="36"
                              >
                                <span>BT</span>
                              </span>
                            </div>
                            <div class="h-avatar is-small">
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
                            <div class="h-avatar is-small">
                              <span
                                class="avatar is-fake is-info"
                                data-user-popover="34"
                              >
                                <span>JD</span>
                              </span>
                            </div>
                            <div class="h-avatar is-small">
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
                          </div>

                          <div class="actions">
                            <span>See all Contacts</span>
                            <a class="is-dark-primary-hover"
                              ><i data-feather="arrow-right"></i
                            ></a>
                          </div>
                        </div>

                        <div class="transfer-form">
                          <div class="field">
                            <div class="control is-combo">
                              <div class="image-combo-box">
                                <div class="box-inner">
                                  <div class="combo-item">
                                    <img
                                      src="/@images/avatars/photos/8.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <span class="selected-item"
                                      >Select an account</span
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
                                            src="/@images/icons/dashboards/banking/bank-1.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name"
                                          >4156 1000 56565 17</span
                                        >
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/dashboards/banking/bank-2.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name"
                                          >2247 2427 89975 12</span
                                        >
                                        <span class="checkmark">
                                          <Icon icon="feather:check" />
                                        </span>
                                      </li>
                                      <li>
                                        <span class="item-icon">
                                          <img
                                            src="/@images/icons/dashboards/banking/bank-3.svg"
                                            alt=""
                                            @error="
                                              $event.target.src =
                                                'https://via.placeholder.com/150x150'
                                            "
                                          />
                                        </span>
                                        <span class="item-name"
                                          >2247 2427 89975 12</span
                                        >
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

                          <div class="field">
                            <label>Amount</label>
                            <div class="field has-addons">
                              <div class="control">
                                <span class="select currency-select">
                                  <select>
                                    <option>$</option>
                                    <option>£</option>
                                    <option>€</option>
                                  </select>
                                </span>
                              </div>
                              <div class="control is-expanded">
                                <input
                                  class="input"
                                  type="text"
                                  placeholder="Amount of money"
                                />
                              </div>
                            </div>
                          </div>

                          <p class="context-text">
                            Funds will reach destination tomorrow.
                          </p>

                          <div class="submit-wrap">
                            <button
                              class="button h-button is-fullwidth is-primary is-big is-raised is-bold"
                            >
                              Send Money
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="column is-12">
                      <div class="dashboard-card is-income">
                        <div class="field">
                          <div class="control">
                            <div class="h-select">
                              <div class="select-box">
                                <span>Last 10 days</span>
                              </div>
                              <div class="select-icon">
                                <Icon icon="feather:chevron-down" />
                              </div>
                              <div class="select-drop has-slimscroll-sm">
                                <div class="drop-inner">
                                  <div class="option-row">
                                    <input
                                      type="radio"
                                      name="period_select"
                                      checked
                                    />
                                    <div class="option-meta">
                                      <span>Last 10 days</span>
                                    </div>
                                  </div>
                                  <div class="option-row">
                                    <input type="radio" name="period_select" />
                                    <div class="option-meta">
                                      <span>Last month</span>
                                    </div>
                                  </div>
                                  <div class="option-row">
                                    <input type="radio" name="period_select" />
                                    <div class="option-meta">
                                      <span>Last 3 months</span>
                                    </div>
                                  </div>
                                  <div class="option-row">
                                    <input type="radio" name="period_select" />
                                    <div class="option-meta">
                                      <span>Last 6 months</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="income-chart"></div>
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
