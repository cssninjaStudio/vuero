<script setup lang="ts">
import { customerEngagementChartOptions } from '/@src/data/dashboards/ecommerce/customerEngagementChart'
import { customersChartOptions } from '/@src/data/dashboards/ecommerce/customersChart'
import { productReturnsChartOptions } from '/@src/data/dashboards/ecommerce/productReturnsChart'
import { revenueChartsOptions } from '/@src/data/dashboards/ecommerce/revenueChart'
import {
  activeTicketsChartOptions,
  escalatedChartOptions,
  closedTicketsChartOptions,
} from '/@src/data/dashboards/ecommerce/supportCharts'
import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/dashboards/ecommerce/sparksCharts'
import {
  freeShippingChartOptions,
  groundShippingChartOptions,
  nextDayAirChartOptions,
} from '/@src/data/dashboards/ecommerce/shippingCharts'
import {
  valueSingle,
  optionsSingle,
  flexRowsOrders,
} from '/@src/data/dashboards/ecommerce/dashboardData'
</script>

<template>
  <div class="ecommerce-dashboard ecommerce-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <V-Avatar picture="/demo/avatars/8.jpg" size="large" />
      <div class="start">
        <h3 class="dark-inverted">Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your dashboard.</p>
      </div>
      <div class="end">
        <V-Button dark="3">View Reports</V-Button>
        <V-Button color="primary" elevated>Manage Shop</V-Button>
      </div>
    </div>

    <div class="columns is-multiline">
      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Total Sales</h3>
            <V-IconBox color="info" rounded>
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:gift"
              ></i>
            </V-IconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">641.4K</span>
            </div>
            <div class="right">
              <apexchart
                id="spark1"
                :height="spark1.chart.height"
                :type="spark1.chart.type"
                :series="spark1.series"
                :options="spark1"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Total Income</h3>
            <V-IconBox color="purple" rounded>
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:dollar-sign"
              ></i>
            </V-IconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">$389.9K</span>
            </div>
            <div class="right">
              <apexchart
                id="spark2"
                :height="spark2.chart.height"
                :type="spark2.chart.type"
                :series="spark2.series"
                :options="spark2"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>New Orders</h3>
            <V-IconBox color="green" rounded>
              <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
            </V-IconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">371</span>
            </div>
            <div class="right">
              <apexchart
                id="spark3"
                :height="spark3.chart.height"
                :type="spark3.chart.type"
                :series="spark3.series"
                :options="spark3"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Abandonned</h3>
            <V-IconBox color="orange" rounded>
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:shopping-cart"
              ></i>
            </V-IconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">29</span>
            </div>
            <div class="right">
              <apexchart
                id="spark4"
                :height="spark4.chart.height"
                :type="spark4.chart.type"
                :series="spark4.series"
                :options="spark4"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="stat-widget line-stats-widget is-straight">
          <div class="widget-head">
            <h3 class="dark-inverted">Revenue</h3>
            <!--Dropdown-->
            <ChartDropdown />
          </div>
          <div class="line-stats">
            <div class="line-stat">
              <span>This Month</span>
              <span class="current">$75,648.43</span>
            </div>
            <div class="line-stat">
              <span>Last Month</span>
              <span class="dark-inverted">$91,512.18</span>
            </div>
          </div>
          <apexchart
            id="line-stats-widget-chart"
            :height="revenueChartsOptions.chart.height"
            :type="revenueChartsOptions.chart.type"
            :series="revenueChartsOptions.series"
            :options="revenueChartsOptions"
          >
          </apexchart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="stat-widget area-stats-widget is-straight">
          <div class="widget-head">
            <h3 class="dark-inverted">Customers</h3>
            <!--Dropdown-->
            <ChartDropdown />
          </div>
          <div class="area-stats">
            <div class="area-stat">
              <span>New Customers</span>
              <span class="current">249</span>
            </div>
            <div class="area-stat">
              <span>Returning</span>
              <span class="dark-inverted">684</span>
            </div>
          </div>
          <apexchart
            id="area-stats-widget-chart"
            :height="customersChartOptions.chart.height"
            :type="customersChartOptions.chart.type"
            :series="customersChartOptions.series"
            :options="customersChartOptions"
          >
          </apexchart>
        </div>
      </div>

      <!--Flex Stat Widget-->
      <div class="column is-6">
        <div class="stat-widget flex-stat-widget is-straight">
          <div class="chart-media">
            <div class="meta">
              <h4 class="dark-inverted">Product Returns</h4>
              <span class="is-dark-primary">Avg. 642</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum
                integritas corporis: misera debilitas. Ita ne hoc quidem modo
                paria.
              </p>
            </div>
            <div class="chart-container">
              <apexchart
                id="flex-stat-circle"
                :height="productReturnsChartOptions.chart.height"
                :type="productReturnsChartOptions.chart.type"
                :series="productReturnsChartOptions.series"
                :options="productReturnsChartOptions"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Flex Stat Widget-->
      <div class="column is-6">
        <div class="stat-widget flex-stat-widget is-straight has-fullheight">
          <div class="chart-media">
            <div class="meta">
              <h4 class="dark-inverted">Customer Engagement</h4>
              <span class="is-dark-primary">+34.2%</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum
                integritas corporis: misera debilitas. Ita ne hoc quidem modo
                paria.
              </p>
            </div>
            <div class="chart-container">
              <apexchart
                id="flex-stat-radial"
                :height="customerEngagementChartOptions.chart.height"
                :type="customerEngagementChartOptions.chart.type"
                :series="customerEngagementChartOptions.series"
                :options="customerEngagementChartOptions"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <div class="stat-widget grouped-stat-widget is-straight">
          <div class="widget-head">
            <h3 class="dark-inverted">Shipping Stats</h3>
          </div>
          <div class="chart-group">
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <apexchart
                    id="widget-group-radial-1"
                    :height="freeShippingChartOptions.chart.height"
                    :type="freeShippingChartOptions.chart.type"
                    :series="freeShippingChartOptions.series"
                    :options="freeShippingChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">36.8K</span>
                <p>Free Shipping</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <apexchart
                    id="widget-group-radial-2"
                    :height="groundShippingChartOptions.chart.height"
                    :type="groundShippingChartOptions.chart.type"
                    :series="groundShippingChartOptions.series"
                    :options="groundShippingChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">292.3K</span>
                <p>Ground Shipping</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <apexchart
                    id="widget-group-radial-3"
                    :height="nextDayAirChartOptions.chart.height"
                    :type="nextDayAirChartOptions.chart.type"
                    :series="nextDayAirChartOptions.series"
                    :options="nextDayAirChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">108.2K</span>
                <p>Next Day Air</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <div class="stat-widget grouped-stat-widget is-straight">
          <div class="widget-head">
            <h3 class="dark-inverted">Customer Support</h3>
          </div>
          <div class="chart-group">
            <div class="group">
              <div class="group-content">
                <div class="chart-container is-gauge">
                  <apexchart
                    id="widget-group-radial-4"
                    :height="activeTicketsChartOptions.chart.height"
                    :type="activeTicketsChartOptions.chart.type"
                    :series="activeTicketsChartOptions.series"
                    :options="activeTicketsChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">641</span>
                <p>Active Tickets</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container is-gauge">
                  <apexchart
                    id="widget-group-radial-5"
                    :height="escalatedChartOptions.chart.height"
                    :type="escalatedChartOptions.chart.type"
                    :series="escalatedChartOptions.series"
                    :options="escalatedChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">84</span>
                <p>Escalated</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container is-gauge">
                  <apexchart
                    id="widget-group-radial-6"
                    :height="closedTicketsChartOptions.chart.height"
                    :type="closedTicketsChartOptions.chart.type"
                    :series="closedTicketsChartOptions.series"
                    :options="closedTicketsChartOptions"
                  >
                  </apexchart>
                </div>
                <span class="dark-inverted">1,749</span>
                <p>Closed Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Table-->
      <div class="column is-12">
        <!--Header-->
        <div class="table-header">
          <h3 class="dark-inverted">Recent Orders</h3>
          <V-Field class="is-minimal-select">
            <V-Control>
              <Multiselect
                v-model="valueSingle"
                :options="optionsSingle"
                placeholder="Select an option"
                :max-height="145"
              />
            </V-Control>
          </V-Field>
        </div>

        <div class="flex-table">
          <!--Table header-->
          <div class="flex-table-header">
            <span class="is-grow">Customer</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
            <span>Tracking</span>
            <span class="cell-end">Actions</span>
          </div>

          <!--Table item-->
          <V-FlexTableRowOrders :rows="flexRowsOrders" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_widgets-stats.scss';

.ecommerce-dashboard-v1 {
  .dashboard-header {
    display: flex;
    align-items: center;
    font-family: $font;
    margin-bottom: 30px;

    .start {
      margin-left: 12px;

      h3 {
        font-family: $font-alt;
        font-weight: 600;
        font-size: 1.3rem;
        color: $dark-text;
      }
    }

    .end {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;

      .button {
        margin-left: 10px;
      }
    }
  }

  .dashboard-tile {
    @include vuero-s-card();

    font-family: $font;

    .tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: $font-alt;
        color: $light-text;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .dashboard-tile-inner {
      display: flex;
      align-items: center;

      .left {
        margin-right: 20px;

        span {
          font-size: 1.5rem;
          font-weight: 600;
          color: $dark-text;
        }
      }

      .right {
        flex-grow: 2;
      }
    }
  }

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font;
    margin: 20px 0;

    h3 {
      font-family: $font-alt;
      font-size: 1.1rem;
      font-weight: 700;
      color: $dark-text;
    }

    .field {
      z-index: 5;
      min-width: 135px;

      .multiselect {
        .multiselect-input {
          .multiselect-single-label {
            color: $light-text;
          }
        }

        .multiselect-options {
          left: unset !important;
          min-width: 180px;
        }
      }
    }
  }
}

.is-dark {
  .ecommerce-dashboard-v1 {
    .dashboard-tile {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (max-width: 767px) {
  .ecommerce-dashboard-v1 {
    .dashboard-header {
      text-align: center;
      flex-direction: column;

      .start {
        margin: 10px auto;
      }

      .end {
        margin: 0;
        justify-content: space-between;
      }
    }
  }
}
</style>
