<script setup lang="ts">
import { genericLineOptions, onGenericLineReady } from '/@src/composition/state/charts/billboardjs/demo/genericLine'
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="s-card">
        <BillboardJS
          :options="genericLineOptions"
          @ready="onGenericLineReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-2"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-3"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-4"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-5"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-6"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-7"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-8"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-9"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-10"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-11"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-12"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-13"></div>
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <div id="billboardjs-chart-14"></div>
      </div>
    </div>
  </div>
</template>
