<script setup lang="ts">
import { ref } from 'vue'

const date = ref({
  start: new Date(),
  end: new Date(),
})

const options = ref(['All Flights'])
</script>

<template>
  <div class="business-dashboard flights-dashboard">
    <div class="columns">
      <div class="column is-9">
        <!--Booking bar-->
        <div class="booking-bar-wrapper">
          <img
            class="travel-illustration light-image"
            src="/@src/assets/illustrations/dashboards/flights/travel.svg"
            alt=""
          />
          <img
            class="travel-illustration dark-image"
            src="/@src/assets/illustrations/dashboards/flights/travel-dark.svg"
            alt=""
          />
          <div class="booking-bar-info">
            <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
            <div class="inner">
              <h2 class="booking-bar-heading">
                Paris <small>[PAR]</small> - New York
                <small>[NY]</small>
              </h2>
              <p class="booking-bar-sub-heading">1 adult - Business</p>
            </div>
          </div>
          <div class="booking-bar">
            <VDatePicker v-model="date" is-range color="green" trim-weeks>
              <template #default="{ inputValue, inputEvents }">
                <div class="booking-bar-inputs">
                  <VControl icon="feather:calendar">
                    <input
                      type="text"
                      class="input flight-datepicker"
                      placeholder="Departure"
                      :value="inputValue.start"
                      v-on="inputEvents.start"
                    />
                  </VControl>
                  <VControl icon="feather:calendar">
                    <input
                      type="text"
                      class="input flight-datepicker"
                      placeholder="Return"
                      :value="inputValue.end"
                      v-on="inputEvents.end"
                    />
                  </VControl>
                </div>
              </template>
            </VDatePicker>
          </div>
        </div>

        <div class="flights-toolbar">
          <h3 class="dark-inverted">74 results</h3>
          <!--Dropdown-->
          <FlightResultsDropdown />
        </div>

        <div class="flights-summary-wrapper">
          <div class="columns is-flex-tablet-p">
            <div class="column is-4">
              <a class="flight-summary">
                <div class="flight-price">312</div>
                <div class="meta">
                  <span>Cheapest</span>
                  <span>7h32min</span>
                </div>
              </a>
            </div>
            <div class="column is-4">
              <a class="flight-summary is-featured">
                <div class="flight-price">428</div>
                <div class="meta">
                  <span>Best</span>
                  <span>7h16min</span>
                </div>
              </a>
            </div>
            <div class="column is-4">
              <a class="flight-summary">
                <div class="flight-price">549</div>
                <div class="meta">
                  <span>Fastest</span>
                  <span>5h36min</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="flights">
          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>11:30 am</span>
              <span>Paris ORLY</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="1 stop"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>06:59 pm</span>
              <span>New York JFK</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="flight-price">374</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company2.svg"
              alt=""
            />
            <div class="start">
              <span>09:30 am</span>
              <span>Paris ORLY</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="1 stop"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>04:18 pm</span>
              <span>New York JFK</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="flight-price">392</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>06:42 am</span>
              <span>Paris ORLY</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="direct"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>02:11 pm</span>
              <span>New York JFK</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="flight-price">398</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company3.svg"
              alt=""
            />
            <div class="start">
              <span>07:23 am</span>
              <span>Paris ORLY</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="direct"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>01:46 pm</span>
              <span>New York JFK</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="flight-price">407</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>10:12 am</span>
              <span>Paris ORLY</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="1 stop"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>03:39 pm</span>
              <span>New York JFK</span>
              <span>Monday, Jul 7th</span>
            </div>
            <div class="flight-price">431</div>
          </a>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="search-widget" straight>
          <template #body>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Search..." />
                <button class="searcv-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </button>
              </div>

              <div class="topics">
                <a>#Paris</a>
                <a>#Berlin</a>
                <a>#Chicago</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="picker-widget">
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-left"
                  ></i>
                </a>
              </div>
              <div class="center">
                <h3>October 2020</h3>
              </div>
              <div class="right">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-right"
                  ></i>
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thu</th>
                  <th scope="col">Fri</th>
                  <th scope="col">Sat</th>
                  <th scope="col">Sun</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="prev-month">29</td>
                  <td class="prev-month">30</td>
                  <td class="prev-month">31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td class="current-day">18</td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td class="next-month">1</td>
                </tr>
              </tbody>
            </table>
          </template>
        </UIWidget>

        <div class="filters-card">
          <a class="button v-button is-primary is-fullwidth is-bold is-raised">
            Add To Favorites
          </a>

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">Stops</h5>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="All Flights"
                  label="All Flights"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="No Stops"
                  label="No Stops"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="1 Stop"
                  label="1 Stop"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="2 Stops"
                  label="2 Stops"
                  color="primary"
                  circle
                />
              </div>
            </div>
          </div>

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">Luggage</h5>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="All Options"
                  label="All Options"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="1 Cabine Luggage"
                  label="1 Cabine Luggage"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="2 Cabin Luggage"
                  label="2 Cabin Luggage"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="None"
                  label="None"
                  color="primary"
                  circle
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.flights-dashboard {
  .booking-bar-wrapper {
    @include vuero-s-card;

    position: relative;
    background: var(--primary);
    border-color: var(--primary);
    padding: 30px;
    color: var(--white);
    font-family: var(--font);
    box-shadow: var(--primary-box-shadow);

    .travel-illustration {
      position: absolute;
      bottom: 30px;
      right: 30px;
      max-width: 260px;
    }

    .booking-bar-info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      .lnil {
        font-size: 2.2rem;
        color: var(--white);
      }

      .inner {
        margin-left: 16px;

        .booking-bar-heading {
          font-family: var(--font-alt);
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--white);
        }

        .booking-bar-sub-heading {
          font-family: var(--font);
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--white);
        }
      }
    }

    .booking-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .booking-bar-inputs {
        display: flex;
        align-items: center;

        .control:not(:last-of-type) {
          margin-right: 2rem;
        }

        .input {
          font-family: var(--font);
          color: var(--light-text);
        }
      }
    }
  }

  .flights-toolbar {
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-family: var(--font);
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .flights-summary-wrapper {
    .flight-summary {
      @include vuero-s-card;

      display: flex;
      align-items: center;
      border: 1px solid var(--fade-grey);
      transition: all 0.3s; // transition-all test

      &:hover {
        border-color: var(--primary);
      }

      &.is-featured {
        background: var(--primary);
        border-color: var(--primary);
        box-shadow: var(--primary-box-shadow);

        .flight-price {
          color: var(--white);
        }

        .meta {
          span {
            color: var(--white) !important;
          }
        }
      }

      .flight-price {
        font-family: var(--font);
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);

        &::before {
          content: '$';
          position: relative;
          right: 0;
          font-size: 1.2rem;
          font-weight: 700;
        }
      }

      .meta {
        margin-left: 16px;
        line-height: 1.3;

        span {
          display: block;

          &:first-child {
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          &:nth-child(2) {
            font-family: var(--font);
            color: var(--light-text);
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .flights {
    padding: 1.5rem 0;

    .flight-card {
      @include vuero-s-card;

      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      box-shadow: none;

      &:hover,
      &:focus {
        box-shadow: var(--light-box-shadow);

        .route {
          .line {
            &::before,
            &::after {
              opacity: 1;
            }
          }
        }
      }

      > img {
        display: block;
        border-radius: var(--radius-rounded);
        max-width: 32px;
      }

      .start,
      .end {
        span {
          display: block;
          color: var(--dark-text);
          font-family: var(--font);

          &:first-child {
            font-family: var(--font-alt);
            font-weight: 600;
            color: var(--dark-text);
          }

          &:nth-child(2),
          &:nth-child(3) {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }
      }

      .start {
        margin-left: 1rem;
      }

      .end {
        margin-left: auto;
        margin-right: 1.5rem;
      }

      .route {
        flex-grow: 2;
        display: flex;
        align-items: center;
        max-width: 320px;
        margin: 0 auto;
        padding: 0 1rem;

        .departure {
          height: 16px;
          width: 16px;
          border-radius: var(--radius-rounded);
          border: 1px solid var(--light-text);
        }

        .line {
          position: relative;
          flex-grow: 2;
          height: 1px;
          border-bottom: 1.6px dashed var(--light-text);

          &::before,
          &::after {
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s; // transition-all test
          }

          &::before {
            content: '';
            position: absolute;
            top: -14px;
            left: 50%;
            right: 50%;
            height: 10px;
            width: 1px;
            border-right: 1px solid var(--light-text);
          }

          &::after {
            content: attr(data-content);
            position: absolute;
            top: -32px;
            left: 23%;
            width: 130px;
            font-size: 0.8rem;
            text-align: center;
            color: var(--light-text);
          }
        }

        .arrival {
          font-size: 1.8rem;
          transform: rotate(90deg);
          height: 26px;
          width: 26px;
          display: flex;
          justify-content: center;
          align-items: center;

          .lnil {
            position: relative;
            top: -4px;
            right: 5px;
            color: var(--light-text);
            margin-left: 0.75rem;
          }
        }
      }

      .flight-price {
        font-family: var(--font);
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--light-text);

        &::before {
          content: '$';
          position: relative;
          top: -8px;
          right: 0;
          font-size: 1.1rem;
          font-weight: 700;
        }
      }
    }
  }

  .company-card {
    @include vuero-s-card;

    padding: 30px;
    margin-bottom: 1.5rem;

    .v-avatar {
      display: block;
      margin: 0 auto;
    }
  }

  .filters-card {
    @include vuero-s-card;

    padding: 30px;
    margin-bottom: 1.5rem;

    .checkboxes-list {
      margin: 0;
      padding: 20px 0 0;

      .field {
        > h5 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--dark-text);
          padding-bottom: 6px;
        }
      }

      .checkbox {
        padding: 8px 0;
      }
    }
  }
}

.is-dark {
  .flights-dashboard {
    .booking-bar-wrapper {
      @include vuero-card--dark;

      background: var(--dark-sidebar-light-4);
      border-color: var(--dark-sidebar-light-12);
      box-shadow: var(--light-box-shadow);
    }

    .flights-summary-wrapper {
      .flight-summary {
        @include vuero-card--dark;

        &:hover,
        &:focus {
          border-color: var(--primary) !important;
        }

        &.is-featured {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          box-shadow: var(--primary-box-shadow) !important;

          .flight-price {
            color: var(--white);
          }
        }

        .flight-price {
          color: var(--primary);
        }

        .meta {
          span {
            &:first-child {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }

    .flights {
      .flight-card {
        @include vuero-card--dark;

        .start,
        .end {
          span {
            &:first-child {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }

    .company-card,
    .filters-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        position: static;
        margin-bottom: 20px;
      }

      .booking-bar {
        > div {
          width: 100%;
        }

        .booking-bar-inputs {
          flex-direction: column;
          width: 100%;

          .control {
            margin: 0 !important;
            width: 100% !important;

            &:first-child {
              margin-bottom: 1rem !important;
            }
          }
        }
      }
    }

    .flights {
      padding-bottom: 0;

      .flight-card {
        flex-direction: column;

        &:last-child {
          margin-bottom: 0;
        }

        > img {
          max-width: 48px;
          margin-bottom: 12px;
        }

        .start,
        .end {
          text-align: center;
          margin: 10px auto;

          span {
            font-size: 1rem !important;
          }
        }

        .route {
          width: 100%;
          max-width: 100%;

          .line {
            &::before,
            &::after {
              display: none !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        bottom: 30px;
        right: -25px;
        max-width: 215px;
      }
    }

    .flights {
      padding-bottom: 0;

      .flight-card {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        bottom: 30px;
        right: -12px;
        max-width: 200px;
      }
    }

    .flights-summary-wrapper {
      .flight-summary {
        .flight-price {
          font-size: 2.2rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1300px) and (orientation: landscape) {
  .flights-dashboard {
    .flights-summary-wrapper {
      .flight-summary {
        .flight-price {
          font-size: 2.2rem;
        }
      }
    }
  }
}
</style>
