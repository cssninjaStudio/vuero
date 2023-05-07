<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useDemo1Line } from '/@src/data/dashboards/apex-demo/demo1-line'
import { useDemo2Line } from '/@src/data/dashboards/apex-demo/demo2-line'
import { useDemo3Line } from '/@src/data/dashboards/apex-demo/demo3-line'
import { useDemo4Area } from '/@src/data/dashboards/apex-demo/demo4-area'
import { useDemo5Area } from '/@src/data/dashboards/apex-demo/demo5-area'
import { useDemo6Area } from '/@src/data/dashboards/apex-demo/demo6-area'
import { useDemo7Bar } from '/@src/data/dashboards/apex-demo/demo7-bar'
import { useDemo8Bar } from '/@src/data/dashboards/apex-demo/demo8-bar'
import { useDemo9Bar } from '/@src/data/dashboards/apex-demo/demo9-bar'
import { useDemo10RangeBar } from '/@src/data/dashboards/apex-demo/demo10-rangebar'
import { useDemo11Bar } from '/@src/data/dashboards/apex-demo/demo11-bar'
import { useDemo12Bar } from '/@src/data/dashboards/apex-demo/demo12-bar'
import { useDemo13RangeBar } from '/@src/data/dashboards/apex-demo/demo13-rangebar'
import { useDemo14Bubble } from '/@src/data/dashboards/apex-demo/demo14-bubble'
import { useDemo15Scatter } from '/@src/data/dashboards/apex-demo/demo15-scatter'
import { useDemo16Pie } from '/@src/data/dashboards/apex-demo/demo16-pie'
import { useDemo17Donuts } from '/@src/data/dashboards/apex-demo/demo17-donuts'
import { useDemo18RadialBar } from '/@src/data/dashboards/apex-demo/demo18-radialbar'
import { useDemo19RadialBar } from '/@src/data/dashboards/apex-demo/demo19-radialbar'
import { useDemo20RadialBar } from '/@src/data/dashboards/apex-demo/demo20-radialbar'
import { useDemo21RadialBar } from '/@src/data/dashboards/apex-demo/demo21-radialbar'
import { useDemo22Radar } from '/@src/data/dashboards/apex-demo/demo22-radar'

const demo1 = useDemo1Line()
const demo2 = useDemo2Line()
const demo3 = useDemo3Line()
const demo4 = useDemo4Area()
const demo5 = useDemo5Area()
const demo6 = useDemo6Area()
const demo7 = useDemo7Bar()
const demo8 = useDemo8Bar()
const demo9 = useDemo9Bar()
const demo10 = useDemo10RangeBar()
const demo11 = useDemo11Bar()
const demo12 = useDemo12Bar()
const demo13 = useDemo13RangeBar()
const demo14 = useDemo14Bubble()
const demo15 = useDemo15Scatter()
const demo16 = useDemo16Pie()
const demo17 = useDemo17Donuts()
const demo18 = useDemo18RadialBar()
const demo19 = useDemo19RadialBar()
const demo20 = useDemo20RadialBar()
const demo21 = useDemo21RadialBar()
const demo22 = useDemo22Radar()

const charts = [
  demo1,
  demo2,
  demo3,
  demo4,
  demo5,
  demo6,
  demo7,
  demo8,
  demo9,
  demo10,
  demo11,
  demo12,
  demo13,
  demo14,
  demo15,
  demo16,
  demo17,
  demo18,
  demo19,
  demo20,
  demo21,
  demo22,
]
</script>

<template>
  <div class="apex-dashboard">
    <div class="columns is-multiline">
      <div v-for="(chart, idx) in charts" :key="idx" class="column is-6">
        <div class="s-card">
          <ApexChart v-bind="chart" />
        </div>
      </div>
    </div>
  </div>
</template>
