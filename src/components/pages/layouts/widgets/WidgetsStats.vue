<script setup lang="ts">
import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/widgets/charts/salesSparksChart'
import { revenueOptions } from '/@src/data/widgets/charts/revenueAreaChart'
import { lineStatsChartOptions } from '/@src/data/widgets/charts/lineStatsWidgetChart'
import { flexRadialChartCircleOptions } from '/@src/data/widgets/charts/flexRadialChartCircleChart'
import { flexRadialChartStripesOptions } from '/@src/data/widgets/charts/flexRadialChartStripesChart'
import {
  widgetRadialGroup1Options,
  widgetRadialGroup2Options,
  widgetRadialGroup3Options,
} from '/@src/data/widgets/charts/groupedCircleCharts'
import {
  widgetGaugeGroup1Options,
  widgetGaugeGroup2Options,
  widgetGaugeGroup3Options,
} from '/@src/data/widgets/charts/groupedRadialCharts'
import { memberList } from '/@src/data/widgets/table/memberList'
</script>

<template>
  <div class="columns is-multiline">
    <!--Spark Tile Widgets-->
    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark1"
          :height="spark1.chart.height"
          :type="spark1.chart.type"
          :series="spark1.series"
          :options="spark1"
        >
        </apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark2"
          :height="spark2.chart.height"
          :type="spark2.chart.type"
          :series="spark2.series"
          :options="spark2"
        >
        </apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark3"
          :height="spark3.chart.height"
          :type="spark3.chart.type"
          :series="spark3.series"
          :options="spark3"
        >
        </apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark4"
          :height="spark4.chart.height"
          :type="spark4.chart.type"
          :series="spark4.series"
          :options="spark4"
        >
        </apexchart>
      </SparkStatWidget>
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
        <apexchart
          id="line-stats-widget-chart"
          :height="lineStatsChartOptions.chart.height"
          :type="lineStatsChartOptions.chart.type"
          :series="lineStatsChartOptions.series"
          :options="lineStatsChartOptions"
        >
        </apexchart>
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
        <apexchart
          id="line-stats-area-chart"
          :height="revenueOptions.chart.height"
          :type="revenueOptions.chart.type"
          :series="revenueOptions.series"
          :options="revenueOptions"
        >
        </apexchart>
      </LineStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="Sales Revenue" straight>
        <apexchart
          id="flex-stat-circle"
          :height="flexRadialChartCircleOptions.chart.height"
          :type="flexRadialChartCircleOptions.chart.type"
          :series="flexRadialChartCircleOptions.series"
          :options="flexRadialChartCircleOptions"
        >
        </apexchart>
      </FlexStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="Sales Revenue" straight>
        <apexchart
          id="flex-stat-radial"
          :height="flexRadialChartStripesOptions.chart.height"
          :type="flexRadialChartStripesOptions.chart.type"
          :series="flexRadialChartStripesOptions.series"
          :options="flexRadialChartStripesOptions"
        >
        </apexchart>
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
          <apexchart
            id="group-radial-1"
            :height="widgetRadialGroup1Options.chart.height"
            :type="widgetRadialGroup1Options.chart.type"
            :series="widgetRadialGroup1Options.series"
            :options="widgetRadialGroup1Options"
          >
          </apexchart>
        </template>
        <template #chart2>
          <apexchart
            id="group-radial-2"
            :height="widgetRadialGroup2Options.chart.height"
            :type="widgetRadialGroup2Options.chart.type"
            :series="widgetRadialGroup2Options.series"
            :options="widgetRadialGroup2Options"
          >
          </apexchart>
        </template>
        <template #chart3>
          <apexchart
            id="group-radial-3"
            :height="widgetRadialGroup3Options.chart.height"
            :type="widgetRadialGroup3Options.chart.type"
            :series="widgetRadialGroup3Options.series"
            :options="widgetRadialGroup3Options"
          >
          </apexchart>
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
          <apexchart
            id="group-gauge-1"
            :height="widgetGaugeGroup1Options.chart.height"
            :type="widgetGaugeGroup1Options.chart.type"
            :series="widgetGaugeGroup1Options.series"
            :options="widgetGaugeGroup1Options"
          >
          </apexchart>
        </template>
        <template #chart2>
          <apexchart
            id="group-gauge-2"
            :height="widgetGaugeGroup2Options.chart.height"
            :type="widgetGaugeGroup2Options.chart.type"
            :series="widgetGaugeGroup2Options.series"
            :options="widgetGaugeGroup2Options"
          >
          </apexchart>
        </template>
        <template #chart3>
          <apexchart
            id="group-gauge-3"
            :height="widgetGaugeGroup3Options.chart.height"
            :type="widgetGaugeGroup3Options.chart.type"
            :series="widgetGaugeGroup3Options.series"
            :options="widgetGaugeGroup3Options"
          >
          </apexchart>
        </template>
      </GroupedStatWidget>
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight />
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight squared />
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight colored />
    </div>

    <!--Table Widget-->
    <div class="column is-12">
      <TableWidget
        title="Members"
        action-label="Add Member"
        :data="memberList"
        straight
        squared
      />
    </div>

    <!--Table Widget-->
    <div class="column is-12">
      <TableWidget
        title="Members"
        action-label="Add Member"
        :data="memberList"
        straight
        circled
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_widgets-stats.scss';
</style>
