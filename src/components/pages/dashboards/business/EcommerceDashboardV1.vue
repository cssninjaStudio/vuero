<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useFlexRadialChartCircle } from '/@src/data/widgets/charts/flexRadialChartCircleChart'
import { useFlexRadialChartStripes } from '/@src/data/widgets/charts/flexRadialChartStripesChart'
import { useRevenueAreaChart } from '/@src/data/widgets/charts/revenueAreaChart'
import { useLineStatsWidgetCharts } from '/@src/data/widgets/charts/lineStatsWidgetChart'
import { useGroupedCircleCharts } from '/@src/data/widgets/charts/groupedCircleCharts'
import { useGroupedRadialCharts } from '/@src/data/widgets/charts/groupedRadialCharts'
import { useSparksCharts } from '/@src/data/dashboards/ecommerce/sparksCharts'
import {
  valueSingle,
  optionsSingle,
  flexRowsOrders,
} from '/@src/data/dashboards/ecommerce/dashboardData'

const { flexRadialChartCircleOptions } = useFlexRadialChartCircle()
const { flexRadialChartStripesOptions } = useFlexRadialChartStripes()
const { revenueOptions } = useRevenueAreaChart()
const { lineStatsChartOptions } = useLineStatsWidgetCharts()
const { spark1, spark2, spark3, spark4 } = useSparksCharts()
const { widgetGaugeGroup1Options, widgetGaugeGroup2Options, widgetGaugeGroup3Options } =
  useGroupedRadialCharts()
const {
  widgetRadialGroup1Options,
  widgetRadialGroup2Options,
  widgetRadialGroup3Options,
} = useGroupedCircleCharts()
</script>

<template>
  <div class="ecommerce-dashboard ecommerce-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="large" />
      <div class="start">
        <h3 class="dark-inverted">Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your dashboard.</p>
      </div>
      <div class="end">
        <VButton dark="3">View Reports</VButton>
        <VButton color="primary" elevated>Manage Shop</VButton>
      </div>
    </div>

    <div class="columns is-multiline">
      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Total Sales</h3>
            <VIconBox color="info" rounded>
              <i aria-hidden="true" class="iconify" data-icon="feather:gift"></i>
            </VIconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">641.4K</span>
            </div>
            <div class="right">
              <ApexChart
                id="spark1"
                :height="spark1.chart.height"
                :type="spark1.chart.type"
                :series="spark1.series"
                :options="spark1"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Total Income</h3>
            <VIconBox color="purple" rounded>
              <i aria-hidden="true" class="iconify" data-icon="feather:dollar-sign"></i>
            </VIconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">$389.9K</span>
            </div>
            <div class="right">
              <ApexChart
                id="spark2"
                :height="spark2.chart.height"
                :type="spark2.chart.type"
                :series="spark2.series"
                :options="spark2"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>New Orders</h3>
            <VIconBox color="green" rounded>
              <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
            </VIconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">371</span>
            </div>
            <div class="right">
              <ApexChart
                id="spark3"
                :height="spark3.chart.height"
                :type="spark3.chart.type"
                :series="spark3.series"
                :options="spark3"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <!--Dashboard tile-->
      <div class="column is-3">
        <div class="dashboard-tile">
          <div class="tile-head">
            <h3>Abandonned</h3>
            <VIconBox color="orange" rounded>
              <i aria-hidden="true" class="iconify" data-icon="feather:shopping-cart"></i>
            </VIconBox>
          </div>
          <div class="dashboard-tile-inner">
            <div class="left">
              <span class="dark-inverted">29</span>
            </div>
            <div class="right">
              <ApexChart
                id="spark4"
                :height="spark4.chart.height"
                :type="spark4.chart.type"
                :series="spark4.series"
                :options="spark4"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <LineStatWidget
          title="Revenue"
          current-label="This Month"
          current-value="$75,648.43"
          previous-label="Last Month"
          previous-value="$91,512.18"
          straight
        >
          <ApexChart
            id="line-stats-widget-chart"
            :height="lineStatsChartOptions.chart.height"
            :type="lineStatsChartOptions.chart.type"
            :series="lineStatsChartOptions.series"
            :options="lineStatsChartOptions"
          >
          </ApexChart>
        </LineStatWidget>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <LineStatWidget
          title="Revenue"
          current-label="This Month"
          current-value="$75,648.43"
          previous-label="Last Month"
          previous-value="$91,512.18"
          straight
        >
          <ApexChart
            id="line-stats-area-chart"
            :height="revenueOptions.chart.height"
            :type="revenueOptions.chart.type"
            :series="revenueOptions.series"
            :options="revenueOptions"
          >
          </ApexChart>
        </LineStatWidget>
      </div>

      <!--Flex Stat Widget-->
      <div class="column is-6">
        <FlexStatWidget title="Sales Revenue" straight>
          <ApexChart
            id="flex-stat-circle"
            :height="flexRadialChartCircleOptions.chart.height"
            :type="flexRadialChartCircleOptions.chart.type"
            :series="flexRadialChartCircleOptions.series"
            :options="flexRadialChartCircleOptions"
          >
          </ApexChart>
        </FlexStatWidget>
      </div>

      <!--Flex Stat Widget-->
      <div class="column is-6">
        <FlexStatWidget title="Sales Revenue" straight>
          <ApexChart
            id="flex-stat-radial"
            :height="flexRadialChartStripesOptions.chart.height"
            :type="flexRadialChartStripesOptions.chart.type"
            :series="flexRadialChartStripesOptions.series"
            :options="flexRadialChartStripesOptions"
          >
          </ApexChart>
        </FlexStatWidget>
      </div>

      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <GroupedStatWidget
          title="Additional Stats"
          :values="['264', '1,203', '3,078']"
          :labels="['New Deals', 'Proposals', 'Closed Deals']"
        >
          <template #chart1>
            <ApexChart
              id="group-radial-1"
              :height="widgetRadialGroup1Options.chart.height"
              :type="widgetRadialGroup1Options.chart.type"
              :series="widgetRadialGroup1Options.series"
              :options="widgetRadialGroup1Options"
            >
            </ApexChart>
          </template>
          <template #chart2>
            <ApexChart
              id="group-radial-2"
              :height="widgetRadialGroup2Options.chart.height"
              :type="widgetRadialGroup2Options.chart.type"
              :series="widgetRadialGroup2Options.series"
              :options="widgetRadialGroup2Options"
            >
            </ApexChart>
          </template>
          <template #chart3>
            <ApexChart
              id="group-radial-3"
              :height="widgetRadialGroup3Options.chart.height"
              :type="widgetRadialGroup3Options.chart.type"
              :series="widgetRadialGroup3Options.series"
              :options="widgetRadialGroup3Options"
            >
            </ApexChart>
          </template>
        </GroupedStatWidget>
      </div>

      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <GroupedStatWidget
          title="Additional Stats"
          :values="['264', '1,203', '3,078']"
          :labels="['New Deals', 'Proposals', 'Closed Deals']"
          gauge
        >
          <template #chart1>
            <ApexChart
              id="group-gauge-1"
              :height="widgetGaugeGroup1Options.chart.height"
              :type="widgetGaugeGroup1Options.chart.type"
              :series="widgetGaugeGroup1Options.series"
              :options="widgetGaugeGroup1Options"
            >
            </ApexChart>
          </template>
          <template #chart2>
            <ApexChart
              id="group-gauge-2"
              :height="widgetGaugeGroup2Options.chart.height"
              :type="widgetGaugeGroup2Options.chart.type"
              :series="widgetGaugeGroup2Options.series"
              :options="widgetGaugeGroup2Options"
            >
            </ApexChart>
          </template>
          <template #chart3>
            <ApexChart
              id="group-gauge-3"
              :height="widgetGaugeGroup3Options.chart.height"
              :type="widgetGaugeGroup3Options.chart.type"
              :series="widgetGaugeGroup3Options.series"
              :options="widgetGaugeGroup3Options"
            >
            </ApexChart>
          </template>
        </GroupedStatWidget>
      </div>

      <!--Table-->
      <div class="column is-12">
        <!--Header-->
        <div class="table-header">
          <h3 class="dark-inverted">Recent Orders</h3>
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

        <VFlexTable
          rounded
          :data="flexRowsOrders"
          :columns="{
            picture: {
              label: 'Customer',
              media: true,
              grow: true,
            },
            date: 'Date',
            amount: 'Amount',
            status: 'Status',
            tracking: 'Tracking',
            actions: {
              label: 'Actions',
              align: 'end',
            },
          }"
        >
          <template #body-cell="{ row, column, value }">
            <template v-if="column.key === 'picture'">
              <VAvatar :picture="row.picture" size="medium" squared />
              <div>
                <span class="item-name dark-inverted is-font-alt is-weight-600">{{
                  row.username
                }}</span>
                <span class="item-meta">
                  <span>{{ row.orderId }}</span>
                </span>
              </div>
            </template>
            <template v-else-if="column.key === 'amount'">
              <span class="dark-inverted is-weight-600">${{ row.amount }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <VTag v-if="row.status === 'paid'" color="green" rounded label="Paid" />
              <VTag
                v-if="row.status === 'pending'"
                color="orange"
                rounded
                label="Pending"
              />
            </template>
            <template v-else-if="column.key === 'tracking'">
              <a v-if="row.tracking" tabindex="0" class="action-link is-pushed-mobile">
                {{ row.tracking }}
              </a>
              <span v-else class="light-text is-pushed-mobile">N/A</span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <VButton class="is-pushed-mobile" dark-outlined>View Order</VButton>
            </template>

            <span v-else class="light-text">{{ value }}</span>
          </template>
        </VFlexTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.ecommerce-dashboard-v1 {
  .dashboard-header {
    display: flex;
    align-items: center;
    font-family: var(--font);
    margin-bottom: 30px;

    .start {
      margin-inline-start: 12px;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--dark-text);
      }
    }

    .end {
      margin-inline-start: auto;
      display: flex;
      justify-content: flex-end;

      .button {
        margin-inline-start: 10px;
      }
    }
  }

  .dashboard-tile {
    @include vuero-s-card;

    font-family: var(--font);

    .tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      h3 {
        font-family: var(--font-alt);
        color: var(--light-text);
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .dashboard-tile-inner {
      display: flex;
      align-items: center;

      .left {
        margin-inline-end: 20px;

        span {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark-text);
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
    font-family: var(--font);
    margin: 20px 0;

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--dark-text);
    }

    .field {
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
}

.is-dark {
  .ecommerce-dashboard-v1 {
    .dashboard-tile {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width <= 767px) {
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
