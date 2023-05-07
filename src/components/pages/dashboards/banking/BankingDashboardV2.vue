<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'

import ApexChart from 'vue3-apexcharts'

import { useExpensesAreaChart } from '/@src/data/dashboards/banking-v2/expensesAreaChart'
import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/banking-v2/dashboardData'

let slider: TinySliderInstance

const { expensesOptions } = useExpensesAreaChart()

const sliderElement = ref<HTMLElement>()
onMounted(() => {
  if (sliderElement.value) {
    slider = tns({
      container: sliderElement.value,
      controls: false,
      nav: true,
      mouseDrag: true,
      items: 1.9,
      center: false,
      loop: false,
      responsive: {
        320: {
          items: 1.7,
        },
        700: {
          items: 1.9,
        },
        900: {
          items: 1.9,
        },
      },
    })
  }
})

const goto = (index: number) => {
  if (slider) {
    slider.goTo(index)
  }
}
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v2">
    <!--Panel-->
    <div class="dashboard-card is-card-panel">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box has-bounds">
            <div class="box-title">
              <h3>My Cards</h3>
            </div>

            <div class="cards-wrapper">
              <div class="controls">
                <button class="button is-large">
                  <span class="icon is-medium">
                    <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                  </span>
                </button>
              </div>

              <!--Carousel-->
              <div class="cards-carousel">
                <div ref="sliderElement" class="cards-carousel-inner">
                  <!--Carousel Item-->
                  <div
                    class="cards-carousel-item"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="goto(0)"
                    @click="goto(0)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$6,341.14</span>
                        <span>**** **** **** 4986</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    class="cards-carousel-item"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="goto(1)"
                    @click="goto(1)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$2,211.27</span>
                        <span>**** **** **** 3619</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    class="cards-carousel-item"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="goto(2)"
                    @click="goto(2)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$1,228.49</span>
                        <span>**** **** **** 5818</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    class="cards-carousel-item"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="goto(3)"
                    @click="goto(3)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$3,412,16</span>
                        <span>**** **** **** 7652</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Balance</h3>
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
            </div>

            <!--Balance-->
            <div class="card-balance-wrap">
              <div class="card-balance">
                <span>$6,341.14</span>
                <span>**** **** **** 4986</span>
              </div>
              <div class="card-balance-stats">
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>Income</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-up">
                      <i
                        aria-hidden="true"
                        class="iconify rtl-reflect"
                        data-icon="feather:arrow-right"
                      ></i>
                    </div>
                    <div class="stat-text">
                      <span>+ 2,324.12</span>
                    </div>
                  </div>
                </div>
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>Expense</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-down">
                      <i
                        aria-hidden="true"
                        class="iconify rtl-reflect"
                        data-icon="feather:arrow-right"
                      ></i>
                    </div>
                    <div class="stat-text">
                      <span>+ 518.41</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-card is-card-panel is-grey">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Monthly Summary</h3>
            </div>

            <div class="columns">
              <!--Monthly Summary-->
              <div class="column is-4">
                <div class="monthly-summary-wrap">
                  <div class="monthly-summary">
                    <div class="monthly-summary-item">
                      <span>Income</span>
                      <span class="is-income">+$5,000.00</span>
                    </div>
                    <div class="monthly-summary-item">
                      <span>Expenses</span>
                      <span class="is-expense">-$263.19</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Chart-->
              <div class="column is-8">
                <div class="chart-wrapper">
                  <a class="action-link" tabindex="0">All Reports</a>
                  <ApexChart
                    id="timeline-chart"
                    :height="expensesOptions.chart.height"
                    :type="expensesOptions.chart.type"
                    :series="expensesOptions.series"
                    :options="expensesOptions"
                  >
                  </ApexChart>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Transactions</h3>
              <a class="action-link" tabindex="0">View All</a>
            </div>
            <!--Transactions-->
            <div class="transactions">
              <!--Transaction-->
              <VBlock
                title="Food Delivery"
                subtitle="Oct 23, 2020 - 8:46pm"
                center
                lighter
              >
                <template #icon>
                  <VIconBox color="green" rounded>
                    <i aria-hidden="true" class="lnil lnil-service"></i>
                  </VIconBox>
                </template>
                <template #action>
                  <span class="dark-inverted">- $41.49</span>
                </template>
              </VBlock>
              <!--Transaction-->
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
              <!--Transaction-->
              <VBlock
                title="Online Order"
                subtitle="Oct 16, 2020 - 2:13pm"
                center
                lighter
              >
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
            <div class="button-wrap">
              <VButton color="primary" fullwidth elevated>New</VButton>
              <VButton fullwidth>Settings</VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.banking-dashboard-v2 {
  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-card-panel {
      &.is-grey {
        background: var(--widget-grey);
        border: none;
      }

      .columns {
        .column {
          &:first-child {
            .inner-box {
              border-inline-end: 1px solid var(--fade-grey-dark-3);
            }
          }
        }
      }

      .inner-box {
        position: relative;
        margin: 20px;
        height: calc(100% - 40px);

        &.has-bounds {
          overflow: hidden;
        }

        .box-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;

          h3 {
            font-family: var(--font-alt);
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          .field {
            position: absolute;
            top: -7px;
            inset-inline-end: 0;
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

        .cards-wrapper {
          display: flex;

          .controls {
            margin-inline-end: 1.5rem;

            .button {
              .icon {
                svg {
                  height: 20px;
                  width: 20px;
                }
              }
            }
          }

          .cards-carousel {
            max-width: 520px;

            .tns-nav {
              text-align: inset-inline-end;
              position: absolute;
              top: 0;
              inset-inline-end: 15px;
              height: auto;
              max-height: 30px;
              width: auto;

              [aria-controls] {
                width: 9px;
                height: 9px;
                padding: 0;
                margin: 0 5px;
                border-radius: var(--radius-rounded);
                background: var(--medium-grey);
                border: 0;

                &.tns-nav-active {
                  background: var(--primary);
                }
              }
            }

            .cards-carousel-inner {
              margin-bottom: 0;

              .cards-carousel-item {
                padding: 0 1.25rem 0.75rem 0;
                user-select: none;

                &.tns-slide-active {
                  .ccard {
                    background-image: linear-gradient(
                      -225deg,
                      var(--primary-dark-8) 0%,
                      var(--primary-dark-2) 48%,
                      var(--primary-light-12) 100%
                    );
                    box-shadow: var(--primary-box-shadow);

                    .shape {
                      opacity: 0.15;
                    }

                    .top {
                      img {
                        &.active {
                          display: block;
                        }

                        &.inactive,
                        &.inactive.light-image {
                          display: none !important;
                        }
                      }
                    }

                    .bottom {
                      span {
                        color: var(--smoke-white);
                      }
                    }
                  }
                }

                .ccard {
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  font-family: var(--font);
                  width: 240px;
                  height: 144px;
                  border-radius: 14px;
                  background: var(--fade-grey);
                  padding: 18px;
                  margin: 0 auto;
                  overflow: hidden;
                  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                    height 0.3s, width 0.3s;

                  .shape {
                    position: absolute;
                    bottom: -10px;
                    inset-inline-end: -10px;
                    height: 70px;
                    width: 70px;
                    background: var(--white);
                    border-radius: var(--radius-rounded);
                    opacity: 0;
                    transition: opacity 0.3s;
                  }

                  .top {
                    img {
                      display: block;
                      max-width: 35px;

                      &.active {
                        display: none;
                      }

                      &.inactive {
                        display: block;
                      }
                    }
                  }

                  .bottom {
                    margin-top: auto;

                    span {
                      display: block;
                      color: var(--dark-text);

                      &:first-child {
                        font-weight: 600;
                        font-size: 1.3rem;
                      }

                      &:nth-child(2) {
                        font-size: 0.9rem;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .card-balance-wrap {
          display: flex;
          flex-direction: column;
          height: calc(100% - 60px);

          .card-balance {
            span {
              display: block;
              color: var(--title-text);

              &:first-child {
                font-weight: 700;
                font-size: 2.4rem;
              }

              &:nth-child(2) {
                font-size: 1rem;
                font-weight: 500;
              }
            }
          }

          .card-balance-stats {
            margin-top: auto;
            display: flex;

            .card-balance-stat {
              width: 50%;
              font-family: var(--font);

              .stat-title {
                color: var(--light-text);
                margin-bottom: 6px;
              }

              .stat-block {
                display: flex;
                align-items: center;

                .stat-icon {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 30px;
                  width: 30px;
                  border-radius: var(--radius-rounded);
                  background: var(--fade-grey-light-2);

                  &.is-up {
                    transform: rotate(calc(var(--transform-direction) * -45deg));

                    svg {
                      color: var(--green);
                    }
                  }

                  &.is-down {
                    transform: rotate(calc(var(--transform-direction) * 45deg));

                    svg {
                      color: var(--red);
                    }
                  }

                  svg {
                    height: 16px;
                    width: 16px;
                    stroke-width: 3px;
                  }
                }

                .stat-text {
                  margin-inline-start: 12px;
                  font-family: var(--font);
                  font-weight: 600;
                  font-size: 1.1rem;
                  color: var(--dark-text);
                }
              }
            }
          }
        }

        .monthly-summary-wrap {
          .monthly-summary {
            padding: 0 20px;
            border: 1px solid var(--fade-grey-dark-5);
            border-radius: var(--radius-large);

            .monthly-summary-item {
              padding: 20px 0;
              font-family: var(--font);

              &:first-child {
                border-bottom: 1px solid var(--fade-grey-dark-5);
              }

              span {
                display: block;

                &:first-child {
                  font-size: 0.85rem;
                  font-weight: 500;
                  color: var(--light-text);
                }

                &:nth-child(2) {
                  font-weight: 500;

                  &.is-income {
                    color: var(--green);
                  }

                  &.is-expense {
                    color: var(--red);
                  }
                }
              }
            }
          }
        }

        .chart-wrapper {
          position: relative;
          padding-inline-end: 30px;

          .action-link {
            position: absolute;
            top: -42px;
            inset-inline-end: 45px;
          }
        }

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

        .button-wrap {
          display: flex;
          justify-content: space-between;
          padding: 20px 0 0;

          .button {
            max-width: 49%;
          }
        }
      }
    }
  }
}

.is-dark {
  .banking-dashboard-v2 {
    .dashboard-card {
      @include vuero-card--dark;

      &.is-card-panel {
        background: var(--dark-sidebar-light-6);

        .inner-box {
          border-color: var(--dark-sidebar-light-12) !important;

          .box-title {
            h3 {
              color: var(--dark-dark-text);
            }
          }

          .cards-carousel {
            .tns-nav {
              [aria-controls] {
                background: var(--dark-sidebar-light-12);
              }
            }

            .cards-carousel-inner {
              .cards-carousel-item {
                &.tns-slide-active {
                  .ccard {
                    background-image: linear-gradient(
                      -225deg,
                      var(--primary-dark-8) 0%,
                      var(--primary-dark-2) 48%,
                      var(--primary-light-12) 100%
                    );
                    box-shadow: var(--primary-box-shadow);

                    .top {
                      .inactive.dark-image {
                        display: none !important;
                      }
                    }
                  }
                }

                .ccard {
                  background: var(--dark-sidebar-light-2);

                  .top {
                    .inactive.dark-image {
                      display: block !important;
                    }
                  }

                  .bottom {
                    span {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }

          .card-balance-wrap {
            .card-balance {
              span {
                color: var(--white);
              }
            }

            .card-balance-stats {
              .card-balance-stat {
                .stat-block {
                  .stat-icon {
                    background: var(--dark-sidebar-light-2);
                  }

                  .stat-text {
                    color: var(--dark-dark-text);
                  }
                }
              }
            }
          }

          .monthly-summary-wrap {
            .monthly-summary {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-4);

              .monthly-summary-item {
                border-color: var(--dark-sidebar-light-12);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        overflow: hidden;
        padding: 10px;

        .inner-box {
          border-inline-end: none !important;

          .cards-wrapper {
            position: relative;
            margin-top: 30px;

            .controls {
              position: absolute;
              top: -68px;
              inset-inline-end: -8px;
              margin-inline-end: 0;
            }
          }

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 30px;
            }
          }

          .monthly-summary-wrap {
            margin-bottom: 60px;
          }

          .chart-wrapper {
            padding-inline-end: 0;

            .action-link {
              top: -45px;
              inset-inline-end: 0;
            }
          }
        }
      }
    }

    .cards-carousel {
      .tns-nav {
        display: none !important;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        .inner-box {
          border-inline-end: none !important;

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 30px;
            }
          }

          .monthly-summary-wrap {
            margin-bottom: 60px;
          }

          .chart-wrapper {
            padding-inline-end: 0;

            .action-link {
              top: -45px;
              inset-inline-end: 0;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        .inner-box {
          .cards-carousel {
            margin-inline-start: 30px;
            max-width: 400px !important;

            .cards-carousel-inner {
              .cards-carousel-item {
                .ccard {
                  width: 180px !important;
                  height: 108px !important;
                }
              }
            }
          }

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
