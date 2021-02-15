<script setup lang="ts">
import {
  genericLineOptions,
  onGenericLineReady,
} from '/@src/data/dashboards/billboardjs-demo/genericLine'
import { regionLineOptions } from '/@src/data/dashboards/billboardjs-demo/regionLine'
import { areaSimpleOptions } from '/@src/data/dashboards/billboardjs-demo/areaSimple'
import {
  areaLineRangeOptions,
  onAreaLineRangeReady,
} from '/@src/data/dashboards/billboardjs-demo/areaLineRange'
import {
  barSimpleOptions,
  onBarSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/barSimple'
import {
  barStackedOptions,
  onBarStackedReady,
} from '/@src/data/dashboards/billboardjs-demo/barStacked'
import { stepSimpleOptions } from '/@src/data/dashboards/billboardjs-demo/stepSimple'
import { splineSimpleOptions } from '/@src/data/dashboards/billboardjs-demo/splineSimple'
import {
  bubbleSimpleOptions,
  onBubbleSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/bubbleSimple'
import {
  scatterSimpleOptions,
  onScatterSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/scatterSimple'
import {
  pieSimpleOptions,
  onPieSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/pieSimple'
import {
  donutSimpleOptions,
  onDonutSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/donutSimple'
import {
  gaugeSimpleOptions,
  onGaugeSimpleReady,
} from '/@src/data/dashboards/billboardjs-demo/gaugeSimple'
import { radarSimpleOptions } from '/@src/data/dashboards/billboardjs-demo/radarSimple'
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="genericLineOptions"
          @ready="onGenericLineReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="regionLineOptions" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="areaSimpleOptions" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="areaLineRangeOptions"
          @ready="onAreaLineRangeReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="barSimpleOptions" @ready="onBarSimpleReady" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="barStackedOptions"
          @ready="onBarStackedReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="stepSimpleOptions" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="splineSimpleOptions" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="bubbleSimpleOptions"
          @ready="onBubbleSimpleReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="scatterSimpleOptions"
          @ready="onScatterSimpleReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="pieSimpleOptions" @ready="onPieSimpleReady" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="donutSimpleOptions"
          @ready="onDonutSimpleReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="gaugeSimpleOptions"
          @ready="onGaugeSimpleReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="radarSimpleOptions" />
      </div>
    </div>
  </div>
</template>
