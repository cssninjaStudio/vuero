<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useIncomeHistoryChart } from '/@src/data/dashboards/banking-v1/incomeHistoryChart'
import { popovers } from '/@src/data/users/userPopovers'

const selectSlotValue = ref(['default'])
const selectSlotOptions = [
  {
    value: 'default',
    name: 'Select an account',
    icon: '/images/avatars/svg/vuero-1.svg',
  },
  {
    value: '4156 1000 56565 17',
    name: '4156 1000 56565 17',
    icon: '/images/icons/dashboards/banking/bank-1.svg',
  },
  {
    value: '2247 2427 89975 12',
    name: '2247 2427 89975 12',
    icon: '/images/icons/dashboards/banking/bank-2.svg',
  },
  {
    value: '2247 2427 89975 19',
    name: '2247 2427 89975 19',
    icon: '/images/icons/dashboards/banking/bank-3.svg',
  },
]

const { incomeOptions } = useIncomeHistoryChart()
const valueSingle = ref(0)
const optionsSingle = ['Last 10 days', 'Last month', 'Last 3 months', 'Last 6 months']
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v1">
    <div class="columns is-multiline">
      <!--Credit Cards-->
      <div class="column is-4">
        <div class="dashboard-card is-credit-cards">
          <div class="title-wrap">
            <h3 class="dark-inverted">My Cards</h3>
            <button class="button is-circle is-dark-outlined">
              <span class="icon is-small">
                <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
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
                      src="/images/icons/dashboards/banking/visa-squared-white.svg"
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
                <a class="action-link" tabindex="0">Edit</a>
              </div>
              <div class="info-block-line">
                <h4 class="dark-inverted">Status</h4>
                <span>
                  <i aria-hidden="true" class="fas fa-circle text-success"></i>
                  Active
                </span>
              </div>
              <div class="info-block-line">
                <h4 class="dark-inverted">Expires in</h4>
                <span>134 days</span>
              </div>
              <div class="info-block-line">
                <h4 class="dark-inverted">Type</h4>
                <span class="has-image">
                  <img
                    src="/images/icons/dashboards/banking/visa-squared-color.svg"
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
                      src="/images/icons/dashboards/banking/visa-squared-white.svg"
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
            <a class="action-link" tabindex="0">View All</a>
          </div>

          <div class="transactions">
            <VBlock title="Food Delivery" subtitle="Oct 23, 2020 - 8:46pm" center lighter>
              <template #icon>
                <VIconBox color="green" rounded>
                  <i aria-hidden="true" class="lnil lnil-service"></i>
                </VIconBox>
              </template>
              <template #action>
                <span class="dark-inverted">- $41.49</span>
              </template>
            </VBlock>

            <VBlock
              title="Market Earnings"
              subtitle="Oct 18, 2020 - 9:11am"
              center
              lighter
            >
              <template #icon>
                <VIconBox color="orange" rounded>
                  <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                </VIconBox>
              </template>
              <template #action>
                <span class="dark-inverted">+ $263.39</span>
              </template>
            </VBlock>

            <VBlock title="Online Order" subtitle="Oct 16, 2020 - 2:13pm" center lighter>
              <template #icon>
                <VIconBox color="purple" rounded>
                  <i aria-hidden="true" class="lnil lnil-cart-alt"></i>
                </VIconBox>
              </template>
              <template #action>
                <span class="dark-inverted">- $92.00</span>
              </template>
            </VBlock>
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
              <VField class="is-image-select has-curved-images">
                <VControl>
                  <Multiselect
                    v-model="selectSlotValue"
                    placeholder="Select a language"
                    label="name"
                    :max-height="145"
                    :options="selectSlotOptions"
                  >
                    <template #singlelabel="{ value }">
                      <div class="multiselect-single-label">
                        <img class="select-label-icon" :src="value.icon" alt="" />
                        <span class="select-label-text">
                          {{ value.name }}
                        </span>
                      </div>
                    </template>
                    <template #option="{ option }">
                      <img class="select-option-icon" :src="option.icon" alt="" />
                      <span class="select-label-text">
                        {{ option.name }}
                      </span>
                    </template>
                  </Multiselect>
                </VControl>
              </VField>

              <p class="context-text">
                Select one of your bank accounts to transfer some funds. The transfer
                cannot exceed 20% of your balance.
              </p>
              <div class="level is-mobile">
                <div class="level-left"></div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="action-link" tabindex="0">Confirm</a>
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
                <VProgress size="tiny" :value="65" />
              </div>
              <p class="context-text">
                This is your Vuero customer level. Reach out higher levels to unlock
                achievements, special gifts, and more.
              </p>
              <div class="level is-mobile">
                <div class="level-left"></div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="action-link" tabindex="0">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="dashboard-card is-contacts">
              <div class="title-wrap">
                <h3 class="dark-inverted">Send money to</h3>
              </div>

              <div class="people-wrap">
                <div class="people">
                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="bottom-end"
                    >
                      <VAvatar color="warning" initials="BT" size="small" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user122" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="bottom-end"
                    >
                      <VAvatar picture="/demo/avatars/18.jpg" size="small" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user18" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="bottom-end"
                    >
                      <VAvatar color="info" initials="JD" size="small" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user123" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="bottom-end"
                    >
                      <VAvatar picture="/demo/avatars/7.jpg" size="small" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user7" />
                      </template>
                    </Tippy>
                  </div>
                </div>
                <div class="actions">
                  <span>See all Contacts</span>
                  <a class="is-dark-primary-hover">
                    <i
                      aria-hidden="true"
                      class="iconify rtl-hidden"
                      data-icon="feather:arrow-right"
                    />
                    <i
                      aria-hidden="true"
                      class="iconify ltr-hidden"
                      data-icon="feather:arrow-left"
                    />
                  </a>
                </div>
              </div>

              <div class="transfer-form">
                <VField class="is-image-select has-curved-images">
                  <VControl>
                    <Multiselect
                      v-model="selectSlotValue"
                      placeholder="Select a language"
                      label="name"
                      :max-height="145"
                      :options="selectSlotOptions"
                    >
                      <template #singlelabel="{ value }">
                        <div class="multiselect-single-label">
                          <img class="select-label-icon" :src="value.icon" alt="" />
                          <span class="select-label-text">
                            {{ value.name }}
                          </span>
                        </div>
                      </template>
                      <template #option="{ option }">
                        <img class="select-option-icon" :src="option.icon" alt="" />
                        <span class="select-label-text">
                          {{ option.name }}
                        </span>
                      </template>
                    </Multiselect>
                  </VControl>
                </VField>

                <div class="field">
                  <label>Amount</label>
                  <div class="field has-addons">
                    <div class="field-addon-body">
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
                        <input class="input" type="text" placeholder="Amount of money" />
                      </div>
                    </div>
                  </div>
                </div>

                <p class="context-text">Funds will reach destination tomorrow.</p>

                <div class="submit-wrap">
                  <VButton color="primary" size="big" fullwidth raised bold>
                    Send Money
                  </VButton>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="dashboard-card is-income">
              <VField class="is-minimal-select">
                <VControl>
                  <Multiselect
                    v-model="valueSingle"
                    :options="optionsSingle"
                    placeholder="Select an option"
                    :max-height="145"
                  />
                </VControl>
              </VField>

              <ApexChart
                id="income-chart"
                :height="incomeOptions.chart.height"
                :type="incomeOptions.chart.type"
                :series="incomeOptions.series"
                :options="incomeOptions"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.banking-dashboard-v1 {
  .columns {
    .column {
      height: fit-content;
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-credit-cards {
      padding: 0;

      .title-wrap {
        padding: 20px 20px 10px;
        margin-bottom: 0;
      }

      .card-block {
        .card-block-inner {
          display: flex;
          align-items: center;
          padding: 20px;

          &:not(:first-child) {
            border-top: 1.6px dashed var(--fade-grey-dark-4);
          }

          .credit-card {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 80px;
            width: 120px;
            min-width: 120px;
            background: var(--fade-grey);
            border-radius: 10px;
            padding: 6px 10px 8px;
            overflow: hidden;

            &.is-theme-1 {
              background: var(--primary);
              box-shadow: var(--primary-box-shadow);
            }

            &.is-theme-2 {
              background: var(--info);
              box-shadow: var(--info-box-shadow);
            }

            .top {
              .card-number {
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                  font-family: var(--font);
                  font-size: 0.8rem;
                  font-weight: 500;
                  color: var(--smoke-white);
                  display: block;
                }

                img {
                  display: block;
                  width: 100%;
                  max-width: 28px;
                }
              }
            }

            .bottom {
              font-family: var(--font);
              font-size: 0.7rem;
              font-weight: 500;
              color: var(--smoke-white);
            }

            .shape {
              position: absolute;
              bottom: -10px;
              inset-inline-end: -10px;
              height: 46px;
              width: 46px;
              background: var(--white);
              border-radius: var(--radius-rounded);
              opacity: 0.15;
            }
          }

          .credit-card-meta {
            margin-inline-start: 16px;

            span {
              display: block;
              font-family: var(--font);

              &:first-child {
                font-size: 0.9rem;
                color: var(--light-text);
              }

              &:nth-child(2) {
                color: var(--dark-text);
                font-size: 1.6rem;
                font-weight: 600;
                line-height: 1.2;
              }
            }
          }

          .credit-card-end {
            margin-inline-start: auto;
          }
        }

        .info-block-inner {
          padding: 10px 20px 20px;

          .title-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            margin-bottom: 12px;

            h3 {
              font-size: 1rem;
              color: var(--dark-text);
              font-weight: 500;
            }

            .action-link {
              font-size: 0.9rem;
            }
          }

          .info-block-line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;

            h4 {
              font-family: var(--font);
              font-weight: 500;
              color: var(--dark-text);
              font-size: 0.9rem;
              line-height: 2;
            }

            span {
              color: var(--light-text);
              font-size: 0.9rem;

              &.has-image {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-grow: 2;

                img {
                  max-width: 28px;
                  margin-inline-end: 6px;
                }
              }

              i {
                position: relative;
                top: 0;
                font-size: 10px;
                margin-inline-end: 8px;
              }
            }
          }
        }
      }
    }

    &.is-contacts {
      display: flex;
      flex-direction: column;
      height: 372px;

      .people-wrap {
        .people {
          display: flex;
          padding: 10px 0;

          .v-avatar {
            margin: 0 4px;
          }
        }

        .actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font);
          padding: 0 4px;

          span {
            font-size: 0.9rem;
            color: var(--light-text);
          }

          a {
            color: var(--light-text);

            &:hover,
            &:focus {
              color: var(--primary);
            }

            svg {
              height: 16px;
              width: 16px;
            }
          }
        }
      }

      .transfer-form {
        margin-top: auto;
      }
    }

    &.is-transactions {
      .transactions {
        padding: 10px 0;

        .media-flex-center {
          .flex-meta {
            span {
              &:nth-child(2) {
                font-size: 0.85rem;
              }
            }
          }

          .flex-end {
            font-family: var(--font);
            font-size: 1rem;
            font-weight: 500;
            color: var(--dark-text);
          }
        }
      }
    }

    &.is-income {
      position: relative;

      .field {
        position: absolute;
        top: 12px;
        inset-inline-end: 16px;
        z-index: 5;
        min-width: 160px;

        .multiselect {
          .multiselect-input {
            .multiselect-single-label {
              color: var(--light-text);
            }
          }

          .multiselect-options {
            inset-inline-start: unset !important;
            min-width: 180px;
          }
        }
      }
    }

    > .title-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      font-family: var(--font);

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }

      .title-meta {
        font-size: 1rem;
        font-weight: 500;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .context-text {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
  }
}

.is-dark {
  .banking-dashboard-v1 {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .banking-dashboard-v1 {
    .dashboard-card {
      &.is-credit-cards {
        .card-block {
          .card-block-inner {
            .credit-card {
              height: 67px;
              width: 100px;
              min-width: 100px;
            }

            .credit-card-meta {
              span {
                &:nth-child(2) {
                  font-size: 1.3rem;
                }
              }
            }
          }
        }
      }

      &.is-contacts {
        height: 400px;
      }

      .context-text {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
