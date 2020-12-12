<script lang="ts">
import { defineComponent } from 'vue'

const CircleChart = defineComponent({
  name: 'CircleChart',
  components: {},
  setup() {
    // CircleChart - Composition API

    return {}
  },
})

export default CircleChart
</script>

<template>
  <svg
    class="circle-chart"
    viewBox="0 0 45 45"
    width="60"
    height="60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="circle-chart__background"
      stroke-width="5"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
    <circle
      class="circle-chart__circle"
      stroke-width="5"
      stroke-dasharray="75,100"
      stroke-linecap="round"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
  </svg>
</template>