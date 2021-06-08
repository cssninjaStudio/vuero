<script setup lang="ts">
import * as genericLine from '/@src/data/dashboards/billboardjs-demo/genericLine'
import * as regionLine from '/@src/data/dashboards/billboardjs-demo/regionLine'
import * as areaSimple from '/@src/data/dashboards/billboardjs-demo/areaSimple'
import * as areaLineRange from '/@src/data/dashboards/billboardjs-demo/areaLineRange'
import * as barSimple from '/@src/data/dashboards/billboardjs-demo/barSimple'
import * as barStacked from '/@src/data/dashboards/billboardjs-demo/barStacked'
import * as stepSimple from '/@src/data/dashboards/billboardjs-demo/stepSimple'
import * as splineSimple from '/@src/data/dashboards/billboardjs-demo/splineSimple'
import * as bubbleSimple from '/@src/data/dashboards/billboardjs-demo/bubbleSimple'
import * as scatterSimple from '/@src/data/dashboards/billboardjs-demo/scatterSimple'
import * as pieSimple from '/@src/data/dashboards/billboardjs-demo/pieSimple'
import * as donutSimple from '/@src/data/dashboards/billboardjs-demo/donutSimple'
import * as gaugeSimple from '/@src/data/dashboards/billboardjs-demo/gaugeSimple'
import * as radarSimple from '/@src/data/dashboards/billboardjs-demo/radarSimple'
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="genericLine.options"
          @ready="genericLine.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="regionLine.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="areaSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="areaLineRange.options"
          @ready="areaLineRange.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="barSimple.options"
          @ready="barSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="barStacked.options"
          @ready="barStacked.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="stepSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="splineSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="bubbleSimple.options"
          @ready="bubbleSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="scatterSimple.options"
          @ready="scatterSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="pieSimple.options"
          @ready="pieSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="donutSimple.options"
          @ready="donutSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS
          :options="gaugeSimple.options"
          @ready="gaugeSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <V-BillboardJS :options="radarSimple.options" />
      </div>
    </div>
  </div>
</template>
