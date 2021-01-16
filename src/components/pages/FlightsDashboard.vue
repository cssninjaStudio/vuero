<template>
  <!--Flights Dashboard V1-->
  <div class="business-dashboard flights-dashboard">
    <div class="columns">
      <div class="column is-9">
        <!--Booking bar-->
        <div class="booking-bar-wrapper">
          <img
            class="travel-illustration light-image"
            src="/@images/illustrations/dashboards/flights/travel.svg"
            alt=""
          />
          <img
            class="travel-illustration dark-image"
            src="/@images/illustrations/dashboards/flights/travel-dark.svg"
            alt=""
          />
          <div class="booking-bar-info">
            <i class="lnil lnil-plane-alt"></i>
            <div class="inner">
              <h2 class="booking-bar-heading">
                Paris <small>[PAR]</small> - New York
                <small>[NY]</small>
              </h2>
              <p class="booking-bar-sub-heading">1 adult - Business</p>
            </div>
          </div>
          <div class="booking-bar">
            <div class="booking-bar-inputs">
              <div class="control has-icon">
                <input
                  type="text"
                  class="input flight-datepicker"
                  placeholder="Departure"
                  value=""
                />
                <div class="form-icon">
                  <Icon icon="feather:calendar" />
                </div>
              </div>
              <div class="control has-icon">
                <input
                  type="text"
                  class="input flight-datepicker"
                  placeholder="Return"
                  value=""
                />
                <div class="form-icon">
                  <Icon icon="feather:calendar" />
                </div>
              </div>
            </div>
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
              src="/@images/illustrations/dashboards/flights/company1.svg"
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
                <i class="lnil lnil-plane-alt"></i>
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
              src="/@images/illustrations/dashboards/flights/company2.svg"
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
                <i class="lnil lnil-plane-alt"></i>
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
              src="/@images/illustrations/dashboards/flights/company1.svg"
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
                <i class="lnil lnil-plane-alt"></i>
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
              src="/@images/illustrations/dashboards/flights/company3.svg"
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
                <i class="lnil lnil-plane-alt"></i>
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
              src="/@images/illustrations/dashboards/flights/company1.svg"
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
                <i class="lnil lnil-plane-alt"></i>
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
        <div class="widget search-widget is-straight">
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Search..." />
              <button class="search-button">
                <Icon icon="feather:search" />
              </button>
            </div>

            <div class="topics">
              <a>#Paris</a>
              <a>#Berlin</a>
              <a>#Chicago</a>
            </div>
          </div>
        </div>

        <!--Widget-->
        <div class="widget picker-widget is-straight">
          <div class="widget-toolbar">
            <div class="left">
              <a class="action-icon">
                <Icon icon="feather:chevron-left" />
              </a>
            </div>
            <div class="center">
              <h3>October 2020</h3>
            </div>
            <div class="right">
              <a class="action-icon">
                <Icon icon="feather:chevron-right" />
              </a>
            </div>
          </div>
          <table class="calendar">
            <thead>
              <tr>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
                <td>Sun</td>
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
        </div>

        <div class="filters-card">
          <a class="button h-button is-primary is-fullwidth is-bold is-raised"
            >Add To Favorites</a
          >

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">Stops</h5>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_stops" checked />
                  <span></span>
                  All Flights
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_stops" />
                  <span></span>
                  No Stops
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_stops" />
                  <span></span>
                  1 Stop
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_stops" />
                  <span></span>
                  2 Stops
                </label>
              </div>
            </div>
          </div>

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">Luggage</h5>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_luggage" checked />
                  <span></span>
                  All Options
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_luggage" />
                  <span></span>
                  1 Cabin luggage
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_luggage" />
                  <span></span>
                  2 Cabin luggage
                </label>
              </div>
              <div class="control">
                <label class="checkbox">
                  <input type="radio" name="flight_luggage" />
                  <span></span>
                  None
                </label>
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
@import '../../assets/scss/pages/dashboards/_business.scss';
</style>
